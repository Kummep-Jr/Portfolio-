/**
 * Helpers for reading admin-edited JSON. The admin omits empty fields, so
 * every value is treated as optional and given a safe default here — this
 * keeps the build from breaking whatever is (or isn't) filled in.
 */
export type Loose<T> = { [K in keyof T]?: T[K] | null };

export const str = (value: unknown, fallback = ""): string =>
  typeof value === "string" ? value : fallback;

export const bool = (value: unknown): boolean => value === true;

export const list = <T = unknown>(value: unknown): T[] => (Array.isArray(value) ? (value as T[]) : []);

export const strList = (value: unknown): string[] =>
  list(value).filter((item): item is string => typeof item === "string" && item.trim() !== "");

export const obj = (value: unknown): Record<string, unknown> =>
  value && typeof value === "object" ? (value as Record<string, unknown>) : {};
