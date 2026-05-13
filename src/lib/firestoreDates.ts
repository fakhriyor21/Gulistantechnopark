/** Eski Firestore Timestamp o‘rniga — har qanday sana qiymatini ISO qatorga */
export function timestampToIsoString(ts: unknown): string {
  if (ts == null) return "";
  if (typeof ts === "string") return ts;
  if (ts instanceof Date) return ts.toISOString();
  if (typeof ts === "object" && "toDate" in (ts as object)) {
    const fn = (ts as { toDate?: () => Date }).toDate;
    if (typeof fn === "function") {
      try {
        return fn.call(ts).toISOString();
      } catch {
        return "";
      }
    }
  }
  return "";
}
