import React from "react";
import LeftSection from "./LeftSection";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen">
      <LeftSection />
      {children}
    </main>
  );
}

export default Layout;
