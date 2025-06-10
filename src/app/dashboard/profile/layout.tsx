import React from "react";
import MiddleSection from "../MiddleSection";
import RightSection from "../RightSection";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MiddleSection />
      <RightSection />
      {children}
    </>
  );
}

export default Layout;
