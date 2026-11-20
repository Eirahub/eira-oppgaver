// Checklist progress in the URL fragment, so the QR code and the link carry it to another device.
// Format: #fremdrift=<base36 bitset>, bit i set = checkbox i (in page order) is checked.
// shortcut: a one-time snapshot when the link is made, not continuous sync. Upgrade to accounts and a server if devices must stay in sync.
export const PARAM = 'fremdrift';

// checked: array of booleans in page order. Returns '' when nothing is checked.
export function encode(checked) {
  let bits = 0n;
  checked.forEach((on, i) => { if (on) bits |= 1n << BigInt(i); });
  return bits ? bits.toString(36) : '';
}

// hash: location.hash. count: number of checkboxes on the page.
// Returns the checked indices, or null for anything that is not valid progress for this page.
export function decode(hash, count) {
  const m = /^#fremdrift=([0-9a-z]{1,64})$/.exec(hash || '');
  if (!m || !Number.isInteger(count) || count < 1) return null;
  let bits = 0n;
  for (const ch of m[1]) bits = bits * 36n + BigInt(parseInt(ch, 36));
  if (bits === 0n || bits >> BigInt(count)) return null; // empty, or a box this page does not have
  const indices = [];
  for (let i = 0; i < count; i++) if ((bits >> BigInt(i)) & 1n) indices.push(i);
  return indices;
}

// Union: checked on either device stays checked. state is { label: true }.
export function merge(state, labels) {
  const next = { ...state };
  for (const label of labels) next[label] = true;
  return next;
}
