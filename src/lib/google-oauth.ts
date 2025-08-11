// lib/googleImplicit.ts
function b64url(bytes: Uint8Array) {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function randomUrlSafe(len = 16) {
  const a = new Uint8Array(len);
  crypto.getRandomValues(a);
  return b64url(a);
}

export function buildGoogleImplicitUrl({
  clientId,
  redirectUri,
  scope = "openid email profile",
  prompt = "select_account",
}: {
  clientId: string;
  redirectUri: string;
  scope?: string;
  prompt?: "none" | "consent" | "select_account";
}) {
  const state = randomUrlSafe(16);
  const nonce = randomUrlSafe(16);

  sessionStorage.setItem("g_state", state);
  sessionStorage.setItem("g_nonce", nonce);

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "id_token",
    scope,
    nonce,
    state,
    prompt,
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

// Optional: decode payload to quickly inspect "nonce" before sending to backend
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function decodeJwtPayload<T = any>(jwt: string): T | null {
  const [, payload] = jwt.split(".");
  if (!payload) return null;
  const b64 = payload.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64 + "=".repeat((4 - (b64.length % 4)) % 4);
  try {
    return JSON.parse(atob(padded)) as T;
  } catch {
    return null;
  }
}
