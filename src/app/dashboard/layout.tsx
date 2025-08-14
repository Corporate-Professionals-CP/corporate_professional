import React, { Suspense } from "react";
import LeftSection from "./LeftSection";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen overflow-hidden justify-center">
      <Suspense fallback={null}>
        <LeftSection />
      </Suspense>
      {children}
    </main>
  );
}

export default Layout;
