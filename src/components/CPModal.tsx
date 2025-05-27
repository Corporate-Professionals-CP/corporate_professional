"use client";
import React, { ReactNode, useEffect, useRef } from "react";

function CPModal({
  children,
  width = 840,
  height,
  minHeight,
  backgroundAction = () => {},
}: {
  children: ReactNode;
  width?: number;
  height?: number;
  minHeight?: number;
  backgroundAction?: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        backgroundAction();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen p-6"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div
        className={`bg-white border border-[#F1F5F9] w-[${width}px] max-w-full rounded-2xl max-h-[80%] overflow-y-scroll `}
        style={{
          width: width,
          height: height ? height : "auto",
          minHeight: minHeight ? minHeight : "unset",
        }}
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
}

export default CPModal;
