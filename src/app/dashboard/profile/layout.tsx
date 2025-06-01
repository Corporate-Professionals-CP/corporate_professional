import React from "react";
import MiddleSection from "../MiddleSection";
import RightSection from "../RightSection";
import ProfileModal from "./ProfileModal";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MiddleSection />
      <RightSection />
      <ProfileModal>{children}</ProfileModal>
    </>
  );
}

export default Layout;
