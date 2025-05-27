import React, { ReactNode } from "react";

function RightSectionContainer({ ...props }: { children: ReactNode }) {
  return <section className="w-[420]  p-4 h-screen">{props.children}</section>;
}

export default RightSectionContainer;
