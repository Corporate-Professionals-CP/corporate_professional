import React, { ReactNode } from "react";

function CPModal({ children }: { children: ReactNode }) {
  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="bg-white border border-[#F1F5F9] w-[840] max-w-full rounded-2xl max-h-[80%] overflow-y-scroll ">
        {children}
      </div>
    </div>
  );
}

export default CPModal;
