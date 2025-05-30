import React, { ReactNode } from "react";

function MIddleSectionContainer({ ...props }: { children: ReactNode }) {
  return (
    <section className="w-[600] border border-[#E2E8F0]  shrink-0 max-lg:shrink">
      {props.children}
    </section>
  );
}

export default MIddleSectionContainer;
