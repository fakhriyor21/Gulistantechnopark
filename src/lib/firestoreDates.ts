import type { Timestamp } from "firebase/firestore";

export function timestampToIsoString(ts: Timestamp | undefined | null): string {
  if (!ts || typeof ts.toDate !== "function") return "";
  try {
    return ts.toDate().toISOString();
  } catch {
    return "";
  }
}
