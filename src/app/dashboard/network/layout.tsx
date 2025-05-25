import React from "react";
import RightSection from "./RightSection";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="w-[600] border border-[#E2E8F0] ">{children}</section>
      <RightSection />
    </>
  );
}

export default Layout;
