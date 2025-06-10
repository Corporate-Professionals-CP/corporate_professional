"use client";
import { BackIcon } from "@/imagecomponents";
import React, { ReactNode, useEffect, useRef } from "react";

function CPModal({
  children,
  width = 840,
  height,
  minHeight,
  backgroundAction = () => {},
  mobileTitle,
  mobileBackAction = () => {},
}: {
  children: ReactNode;
  width?: number;
  height?: number;
  minHeight?: number;
  backgroundAction?: () => void;
  mobileTitle?: string;
  mobileBackAction?: () => void;
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
      className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen p-6  z-50"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div
        ref={modalRef}
        className={`flex flex-col gap-2 w-[${width}px] max-w-full max-h-[80%]`}
        style={{
          width: width,
          height: height ? height : "auto",
          minHeight: minHeight ? minHeight : "unset",
        }}
      >
        {mobileTitle && (
          <div className="bg-white w-full p-3.5 careershadow  rounded-2xl hidden max-sm:block">
            <button
              onClick={mobileBackAction}
              className="flex gap-2 items-center"
            >
              <BackIcon />
              <span className="text-[#050505] font-bold capitalize">
                {mobileTitle}
              </span>
            </button>
          </div>
        )}
        <div
          className={`bg-white border border-[#F1F5F9]  max-w-full rounded-2xl  overflow-y-scroll careershadow flex-1`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default CPModal;
