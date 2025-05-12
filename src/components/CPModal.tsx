import React, { ReactNode } from "react";

function CPModal({
  children,
  width = 840,
}: {
  children: ReactNode;
  width?: number;
}) {
  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div
        className={`bg-white border border-[#F1F5F9] w-[${width}px] max-w-full rounded-2xl max-h-[80%] overflow-y-scroll `}
        style={{
          width: width,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default CPModal;
