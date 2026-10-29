export function installAnalytics(doc: Document = document): void {
  if (doc.querySelector('script[src^="https://static.cloudflareinsights.com/beacon.min.js"]')) return;
  const beacon = doc.createElement('script');
  beacon.type = 'module';
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.setAttribute('data-cf-beacon', JSON.stringify({ token: '51b4c2403a524bc4915ab3b3b388c13a' }));
  doc.head.appendChild(beacon);
}

if (typeof document !== 'undefined') installAnalytics();
