import React from "react";
import RightSection from "./RightSection";
import MIddleSectionContainer from "../MIddleSectionContainer";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MIddleSectionContainer>{children}</MIddleSectionContainer>
      <RightSection />
    </>
  );
}

export default Layout;
