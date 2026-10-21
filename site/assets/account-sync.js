(function (global) {
  "use strict";

  var META_KEY = "account:progress-meta";
  var STORAGE_KEY = /^quiz:[A-Za-z0-9:_-]{1,250}$/;
  var ITEM_KEY = /^(?:@value|[A-Za-z0-9:_-]{1,128})$/;

  function createMap() { return Object.create(null); }

  function isObject(value) {
    return !!value && typeof value === "object" && !Array.isArray(value);
  }

  function createMeta() {
    return { version: 1, stamps: createMap(), tombstones: createMap(), pending: createMap() };
  }

  function copyTimestampMap(source, target) {
    if (!isObject(source)) return;
    Object.keys(source).forEach(function (storageKey) {
      if (!STORAGE_KEY.test(storageKey) || !isObject(source[storageKey])) return;
      var destination = createMap();
      Object.keys(source[storageKey]).forEach(function (itemKey) {
        var value = source[storageKey][itemKey];
        if (ITEM_KEY.test(itemKey) && Number.isSafeInteger(value) && value >= 0) destination[itemKey] = value;
      });
      target[storageKey] = destination;
    });
  }

  function normalizeMeta(value) {
    var meta = createMeta();
    if (!isObject(value)) return meta;
    copyTimestampMap(value.stamps, meta.stamps);
    copyTimestampMap(value.tombstones, meta.tombstones);
    copyTimestampMap(value.pending, meta.pending);
    return meta;
  }

  function readMeta(storage) {
    try { return normalizeMeta(JSON.parse(storage.getItem(META_KEY) || "null")); }
    catch (error) { return createMeta(); }
  }

  function writeMeta(storage, meta) {
    try { storage.setItem(META_KEY, JSON.stringify(normalizeMeta(meta))); }
    catch (error) { return false; }
    return true;
  }

  function bucket(root, storageKey) {
    if (!Object.prototype.hasOwnProperty.call(root, storageKey) || !isObject(root[storageKey])) {
      root[storageKey] = createMap();
    }
    return root[storageKey];
  }

  function valuesFromRaw(raw) {
    var values = createMap();
    if (raw === null || raw === undefined) return values;
    var parsed;
    try { parsed = JSON.parse(raw); }
    catch (error) { values["@value"] = String(raw); return values; }
    if (!isObject(parsed)) { values["@value"] = String(raw); return values; }
    Object.keys(parsed).forEach(function (itemKey) {
      if (ITEM_KEY.test(itemKey) && itemKey !== "@value") values[itemKey] = parsed[itemKey];
    });
    return values;
  }

  function identity(storageKey, itemKey) { return storageKey + "\u0000" + itemKey; }

  function trackChange(storageKey, oldRaw, newRaw, meta, now) {
    meta = normalizeMeta(meta);
    if (typeof storageKey !== "string" || !STORAGE_KEY.test(storageKey)) return { records: [], meta: meta };
    var oldValues = valuesFromRaw(oldRaw);
    var newValues = valuesFromRaw(newRaw);
    var keys = Object.create(null);
    Object.keys(oldValues).forEach(function (key) { keys[key] = true; });
    Object.keys(newValues).forEach(function (key) { keys[key] = true; });

    var stamps = bucket(meta.stamps, storageKey);
    var tombstones = bucket(meta.tombstones, storageKey);
    var pending = bucket(meta.pending, storageKey);
    var timestamp = Number.isSafeInteger(now) && now >= 0 ? now : Date.now();
    var changed = [];

    Object.keys(keys).forEach(function (itemKey) {
      var hadOld = Object.prototype.hasOwnProperty.call(oldValues, itemKey);
      var hasNew = Object.prototype.hasOwnProperty.call(newValues, itemKey);
      if (hadOld && hasNew && JSON.stringify(oldValues[itemKey]) === JSON.stringify(newValues[itemKey])) return;

      var itemTimestamp = Math.max(timestamp, Number.isSafeInteger(stamps[itemKey]) ? stamps[itemKey] + 1 : 0);
      stamps[itemKey] = itemTimestamp;
      pending[itemKey] = itemTimestamp;
      if (hasNew) {
        delete tombstones[itemKey];
        changed.push({ storageKey: storageKey, itemKey: itemKey, value: newValues[itemKey], updatedAt: itemTimestamp, isDeleted: false });
      } else if (hadOld) {
        tombstones[itemKey] = itemTimestamp;
        changed.push({ storageKey: storageKey, itemKey: itemKey, value: null, updatedAt: itemTimestamp, isDeleted: true });
      }
    });

    return { records: changed, meta: meta };
  }

  function collectSnapshot(storage, meta, now) {
    meta = normalizeMeta(meta);
    var timestamp = Number.isSafeInteger(now) && now >= 0 ? now : Date.now();
    var records = new Map();
    for (var index = 0; index < storage.length; index += 1) {
      var storageKey = storage.key(index);
      if (typeof storageKey !== "string" || !STORAGE_KEY.test(storageKey)) continue;
      var values = valuesFromRaw(storage.getItem(storageKey));
      var stamps = bucket(meta.stamps, storageKey);
      var tombstones = bucket(meta.tombstones, storageKey);
      Object.keys(values).forEach(function (itemKey) {
        if (!Number.isSafeInteger(stamps[itemKey])) stamps[itemKey] = timestamp;
        delete tombstones[itemKey];
        var record = {
          storageKey: storageKey,
          itemKey: itemKey,
          value: values[itemKey],
          updatedAt: stamps[itemKey],
          isDeleted: false,
        };
        records.set(identity(storageKey, itemKey), record);
      });
    }

    Object.keys(meta.tombstones).forEach(function (storageKey) {
      var tombstones = meta.tombstones[storageKey];
      Object.keys(tombstones).forEach(function (itemKey) {
        records.set(identity(storageKey, itemKey), {
          storageKey: storageKey,
          itemKey: itemKey,
          value: null,
          updatedAt: tombstones[itemKey],
          isDeleted: true,
        });
      });
    });
    return { records: Array.from(records.values()), meta: meta };
  }

  function collectPending(storage, meta, now) {
    var snapshot = collectSnapshot(storage, meta, now);
    return {
      records: snapshot.records.filter(function (record) {
        var bucketForKey = snapshot.meta.pending[record.storageKey];
        return !!bucketForKey && Object.prototype.hasOwnProperty.call(bucketForKey, record.itemKey);
      }),
      meta: snapshot.meta,
    };
  }

  function settle(meta, sentRecords, mergedRecords) {
    meta = normalizeMeta(meta);
    var merged = new Map((mergedRecords || []).map(function (record) {
      return [identity(record.storageKey, record.itemKey), record];
    }));
    (sentRecords || []).forEach(function (sent) {
      var pending = meta.pending[sent.storageKey];
      if (!pending || pending[sent.itemKey] !== sent.updatedAt) return;
      var result = merged.get(identity(sent.storageKey, sent.itemKey));
      if (!result) return;
      delete pending[sent.itemKey];
      bucket(meta.stamps, sent.storageKey)[sent.itemKey] = result.updatedAt;
      if (result.isDeleted) bucket(meta.tombstones, sent.storageKey)[sent.itemKey] = result.updatedAt;
      else delete bucket(meta.tombstones, sent.storageKey)[sent.itemKey];
    });
    return meta;
  }

  function applyMergedRecords(storage, meta, records) {
    meta = normalizeMeta(meta);
    var grouped = new Map();
    (records || []).forEach(function (record) {
      if (!record || !STORAGE_KEY.test(record.storageKey) || !ITEM_KEY.test(record.itemKey)) return;
      if (!grouped.has(record.storageKey)) grouped.set(record.storageKey, []);
      grouped.get(record.storageKey).push(record);
    });

    var changed = false;
    grouped.forEach(function (items, storageKey) {
      var values = valuesFromRaw(storage.getItem(storageKey));
      if (items.some(function (record) { return record.itemKey === "@value"; })) {
        var scalar = items.find(function (record) { return record.itemKey === "@value"; });
        if (scalar.isDeleted) {
          if (storage.getItem(storageKey) !== null) { storage.removeItem(storageKey); changed = true; }
        } else if (storage.getItem(storageKey) !== String(scalar.value)) {
          storage.setItem(storageKey, String(scalar.value));
          changed = true;
        }
        if (scalar.isDeleted) bucket(meta.tombstones, storageKey)["@value"] = scalar.updatedAt;
        else delete bucket(meta.tombstones, storageKey)["@value"];
        bucket(meta.stamps, storageKey)["@value"] = scalar.updatedAt;
        return;
      }

      items.forEach(function (record) {
        var existed = Object.prototype.hasOwnProperty.call(values, record.itemKey);
        if (record.isDeleted) {
          if (existed) { delete values[record.itemKey]; changed = true; }
          bucket(meta.tombstones, storageKey)[record.itemKey] = record.updatedAt;
        } else {
          if (!existed || JSON.stringify(values[record.itemKey]) !== JSON.stringify(record.value)) changed = true;
          values[record.itemKey] = record.value;
          delete bucket(meta.tombstones, storageKey)[record.itemKey];
        }
        bucket(meta.stamps, storageKey)[record.itemKey] = record.updatedAt;
      });

      var valueKeys = Object.keys(values);
      if (!valueKeys.length) {
        if (storage.getItem(storageKey) !== null) storage.removeItem(storageKey);
      } else {
        var serialized = JSON.stringify(values);
        if (storage.getItem(storageKey) !== serialized) storage.setItem(storageKey, serialized);
      }
    });
    return { changed: changed, meta: meta };
  }

  global.QuizSiteProgressSync = {
    createMeta: createMeta,
    readMeta: readMeta,
    writeMeta: writeMeta,
    trackChange: trackChange,
    collectSnapshot: collectSnapshot,
    collectPending: collectPending,
    settle: settle,
    applyMergedRecords: applyMergedRecords,
  };
})(window);
