/** Public link syntax shared by the landing page and association documents. */
export const SHARE_KINDS = ["review", "profile", "restaurant", "dish"] as const;
export type ShareKind = (typeof SHARE_KINDS)[number];
export type ShareDestination = { kind: ShareKind; token: string };

export const SHARE_PATHS = SHARE_KINDS.map((kind) => `/s/${kind}/*`);

/** Next has already decoded route parameters; never decode a token a second time. */
export function parseShareDestination(
  kind: string,
  token: string,
): ShareDestination | null {
  if (
    !SHARE_KINDS.includes(kind as ShareKind) ||
    !/^[A-Za-z0-9_-]{1,64}$/.test(token)
  ) {
    return null;
  }
  return { kind: kind as ShareKind, token };
}

export function buildAppShareUrl(
  scheme: "srvn" | "srvn-dev",
  destination: ShareDestination,
): string {
  return `${scheme}://s/${destination.kind}/${destination.token}`;
}
