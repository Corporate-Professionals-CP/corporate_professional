import React, { Suspense } from "react";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";

function page() {
  return (
    <Suspense fallback={null}>
      <MiddleSection />
      <RightSection />
    </Suspense>
  );
}

export default page;
