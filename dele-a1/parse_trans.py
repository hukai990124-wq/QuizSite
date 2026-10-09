# -*- coding: utf-8 -*-
"""把官方听力原文（transcripción）解析成「按题分段、按说话人分行」的结构，
供 edge-tts 合成音频用。

原文特点：
  · 页眉页脚混在正文里（DELE – Nivel A1 / PRUEBA DE … / TRANSCRIPCIÓN / 页码）
  · 每段会重复 2-3 遍（模拟考场），需要去重
  · 停顿写成「5 segundos」/「10 segundos」，合成时插对应静音
"""
import re
import sys

# 页眉/页脚/噪声行
NOISE = [
    "PRUEBA DE COMPRENSIÓN AUDITIVA", "TRANSCRIPCIÓN", "DELE – Nivel A1",
    "NIVEL A1", "DELE", "Nivel   A1",
    "Esta transcripción solo debe utilizarse", "reproducción de audio.",
    "respetando todos los tiempos", "La duración aproximada",
    "las pausas.", "NB: Todos los textos", "necesarias para la grabación",
    "El Instituto Cervantes es miembro de:", "© Instituto Cervantes",
    "Examen 00", "Versión 1", "DIPLOMA DE ESPAÑOL", "Viernes, 20 de mayo de 2011",
    "PRUEBA 2", "COMPRENSIÓN AUDITIVA",
]

SPEAKER_RE = re.compile(r"^([A-ZÁÉÍÓÚÜÑ][A-ZÁÉÍÓÚÜÑ\s\.]{1,28}?)\s*:\s*(.*)$")
PAUSE_RE = re.compile(r"^\(?(\d+)\s*segundos?\)?$", re.I)
TAREA_RE = re.compile(r"^Tarea\s+(\d)\b", re.I)
# 分段标记
DIALOG_RE = re.compile(r"^(?:Diálogo\s+Número|Conversación)\s+(\d+)\s*:?\s*$", re.I)
MENSAJE_RE = re.compile(
    r"^(?:MENSAJE|Mensaje|Aviso)\s+(\d+)\s*(?:\[[^\]]*\]\s*)?:?\s*(.*)$")
INSTR_RE = re.compile(r"^(Instrucciones|INSTRUCCIONES|Escuche ahora|Ahora va a escuchar)", re.I)
EXAMPLE_RE = re.compile(r"^Ejemplo\s*:?\s*$", re.I)
SKIP_RE = re.compile(
    r"^(Elija la letra correcta|Como .* debe marcar|La opción correcta|"
    r"Seleccione|Conteste ahora|Complete ahora|Ahora tiene \d+|"
    r"Tiene que marcar|Marque|Escriba|Hay \w+ letras)", re.I)


def clean_lines(text):
    """拆行 → 去噪 → 合并被折行打断的句子。"""
    out = []
    for raw in text.splitlines():
        t = raw.strip()
        if not t or t.startswith("#####"):
            continue
        if t.isdigit() and len(t) <= 3:
            continue
        if any(t.startswith(n) for n in NOISE):
            continue
        out.append(t)
    # 合并：上一行不是说话人/标记/停顿，且不以句末标点结尾 → 视为折行续接
    merged = []
    for t in out:
        if merged:
            prev = merged[-1]
            head = SPEAKER_RE.match(prev) or MENSAJE_RE.match(prev) or DIALOG_RE.match(prev)
            cont = (not SPEAKER_RE.match(t) and not PAUSE_RE.match(t)
                    and not TAREA_RE.match(t) and not DIALOG_RE.match(t)
                    and not MENSAJE_RE.match(t) and not INSTR_RE.match(t)
                    and not EXAMPLE_RE.match(t)
                    and not prev.endswith(('.', '?', '!', ':'))
                    and head)
            if cont:
                merged[-1] = prev + " " + t
                continue
        merged.append(t)
    return merged


def _norm(s):
    return re.sub(r"\s+", " ", s).strip().lower()


def dedup_adjacent(lines):
    """压掉相邻重复行（原文有时写成 [a,a,b,b] 而非 [a,b,a,b]）。
    长句取前 80 字符比较 —— 原文同一遍在不同位置断行，尾部偶有细微差异。"""
    out = []
    for w, b in lines:
        if out and out[-1][0] == w and _norm(out[-1][1])[:80] == _norm(b)[:80]:
            continue
        out.append((w, b))
    return out


def dedup_cycle(lines):
    """原文每段会整段重复 2-3 遍（模拟考场），这里压掉周期重复。
    [a,b,a,b,a,b] → [a,b]；[a,a] → [a]。按空白归一化后比较，
    避免「双空格」「断行位置不同」导致同一遍被判成两遍。"""
    n = len(lines)
    norm = [(w, _norm(b)) for w, b in lines]
    for p in range(1, n // 2 + 1):
        if n % p:
            continue
        if all(norm[i] == norm[i % p] for i in range(n)):
            return lines[:p]
    return lines


def parse(text):
    """→ [{'tarea':1, 'tag':'q1', 'lines':[(说话人, 文本), …]}, …]"""
    lines = clean_lines(text)
    out = []
    tarea = 0
    cur = None           # 当前分段
    mode = None          # 'dialog' / 'mensaje' / 'block'
    pending_ex = False   # 「示例」后紧跟的段落

    def flush():
        if cur and cur["lines"]:
            out.append(cur)

    def open_seg(tag):
        return {"tarea": tarea, "tag": tag, "lines": []}

    for t in lines:
        m = TAREA_RE.match(t)
        if m:
            flush(); cur = None; pending_ex = False
            tarea = int(m.group(1))
            mode = {"1": "dialog", "2": "mensaje", "3": "block", "4": "block"}.get(str(tarea), "block")
            continue
        if not tarea:
            continue
        if EXAMPLE_RE.match(t) or INSTR_RE.match(t):
            flush(); cur = None
            if EXAMPLE_RE.match(t) or re.search(r"ejemplo", t, re.I):
                pending_ex = True
            continue
        if SKIP_RE.match(t):
            flush(); cur = None
            continue
        if PAUSE_RE.match(t):
            continue
        d = DIALOG_RE.match(t)
        if d:
            flush()
            cur = open_seg("ex0" if pending_ex else "q%s" % d.group(1))
            pending_ex = False
            continue
        mm = MENSAJE_RE.match(t)
        if mm:
            flush()
            num = int(mm.group(1))
            if num == 0:                      # MENSAJE 0 是示例，跳过
                cur = None
                continue
            cur = open_seg("q%s" % num)
            if mm.group(2):
                cur["lines"].append(("NARRADOR", mm.group(2)))
            continue
        sp = SPEAKER_RE.match(t)
        if sp:
            who, body = sp.group(1).strip().upper(), sp.group(2).strip()
            if cur is None:
                cur = open_seg("ex0" if pending_ex else "q1")
                pending_ex = False
            cur["lines"].append((who, body))
            continue
        # Tarea 2 的正文常另起一行（如「MENSAJE 1 […]：」下一行才是内容），
        # 折行时继续并入上一行
        if mode == "mensaje" and cur is not None:
            if cur["lines"] and cur["lines"][-1][0] in ("NARRADOR", "MENSAJE"):
                w, b = cur["lines"][-1]
                cur["lines"][-1] = (w, (b + " " + t).strip())
            else:
                cur["lines"].append(("NARRADOR", t))
            continue
    flush()

    # 段内去重：先压相邻重复，再压周期重复
    for seg in out:
        seg["lines"] = dedup_cycle(dedup_adjacent(seg["lines"]))

    # 段间去重：同 tarea 内首行文本相同 → 视为重复播放，丢弃
    seen, uniq = set(), []
    for seg in out:
        key = (seg["tarea"], _norm(seg["lines"][0][1])[:80] if seg["lines"] else "")
        if key in seen:
            continue
        seen.add(key)
        uniq.append(seg)

    # block 模式（Tarea 3/4）各段都叫 q1，改成顺序编号
    counters = {}
    for seg in uniq:
        if seg["tarea"] in (3, 4) and seg["tag"].startswith("q"):
            c = counters.get(seg["tarea"], 0) + 1
            counters[seg["tarea"]] = c
            seg["tag"] = "q%d" % c
    return uniq


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    for f in sys.argv[1:]:
        txt = open(f, encoding="utf-8").read()
        segs = parse(txt)
        print("#" * 74)
        print("###", f, "→", len(segs), "段")
        for s in segs:
            print("  [T%d %s] %d 行" % (s["tarea"], s["tag"], len(s["lines"])))
            for who, body in s["lines"]:
                print("      %-18s %s" % (who, body[:88]))
