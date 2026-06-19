export function getSessionToken(): string | undefined {
  // BigBlueButton 3.0.30 (bigbluebutton/bigbluebutton#25219, "Hide sessionToken
  // from URL bar") removes `sessionToken` from window.location during client
  // startup and stores it in sessionStorage under the key `BBB_sessionToken`
  // (ObservableStorage 'BBB_' prefix + 'sessionToken'). Plugins mount after that
  // bootstrap, so reading only the URL returns undefined on 3.0.30+.
  //
  // Read the URL first (older cores, and the brief window before the strip),
  // then fall back to sessionStorage so the token resolves on 3.0.30+ too.
  const fromUrl = new URLSearchParams(window.location.search).get('sessionToken');
  if (fromUrl) return fromUrl;
  try {
    return window.sessionStorage.getItem('BBB_sessionToken') || undefined;
  } catch {
    return undefined;
  }
}
