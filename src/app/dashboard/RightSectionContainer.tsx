import React, { ReactNode } from "react";

function RightSectionContainer({ ...props }: { children: ReactNode }) {
  return (
    <section className="w-[420]  p-4 h-screen shrink-0 max-lg:shrink max-md:hidden">
      {props.children}
    </section>
  );
}

export default RightSectionContainer;
