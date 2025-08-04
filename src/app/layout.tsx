import type { Metadata } from "next";
import "./globals.css";
import { helvneue } from "./font";
import { ToastContainer } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";

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
        {children}

        <ToastContainer />
      </body>
    </html>
  );
}
