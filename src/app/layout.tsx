import type { Metadata } from "next";
import "./globals.css";
import { helvneue } from "./font";
import { ToastContainer } from "react-toastify";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${helvneue.className}  antialiased`}>
        {children}

        <ToastContainer />
      </body>
    </html>
  );
}
