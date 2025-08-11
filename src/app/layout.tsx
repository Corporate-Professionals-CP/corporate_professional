import type { Metadata } from "next";
import "./globals.css";
import { helvneue } from "./font";
import { ToastContainer } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";
import { CPCookieBanner } from "@/components";

export const metadata: Metadata = {
  title: "Corporate Professionals",
  description:
    "Connecting ambitious professionals with mentorship, networking, and job opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <body className={` ${helvneue.className}  antialiased`}>
        <div
          id="g_id_onload"
          data-client_id="YOUR_GOOGLE_CLIENT_ID"
          data-ux_mode="redirect"
          data-login_uri="https://app.yourdomain.com/auth/google/callback"
          data-auto_prompt="false"
        ></div>

        <div
          id="google-default-signin"
          className="g_id_signin"
          data-type="standard"
          data-size="large"
          style={{ display: "none" }}
        ></div>
        {children}

        <ToastContainer />
        <CPCookieBanner />
      </body>
    </html>
  );
}
