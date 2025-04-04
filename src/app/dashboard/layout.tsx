import React from "react";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen">
      <LeftSection />
      <MiddleSection />
      <RightSection />
      {children}
    </main>
  );
}

export default Layout;
