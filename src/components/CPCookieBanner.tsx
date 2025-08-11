// components/CookieBanner.tsx
"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="site_cookie_pref"
      style={{ background: "#7074ff" }}
      buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
      declineButtonStyle={{
        color: "#fff",
        background: "#888",
        fontSize: "14px",
      }}
      onAccept={() => {
        /* load analytics */
      }}
      onDecline={() => {
        /* skip analytics */
      }}
    >
      We use cookies to improve your experience.{" "}
      <a href="/cookies" className="underline">
        Learn more
      </a>
    </CookieConsent>
  );
}
