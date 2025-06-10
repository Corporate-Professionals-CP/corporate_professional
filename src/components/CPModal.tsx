// "use client";
// import { BackIcon } from "@/imagecomponents";
// import React, { ReactNode, useEffect, useRef } from "react";

// function CPModal({
//   children,
//   width = 840,
//   height,
//   minHeight,
//   backgroundAction = () => {},
//   mobileTitle,
//   mobileBackAction = () => {},
// }: {
//   children: ReactNode;
//   width?: number;
//   height?: number;
//   minHeight?: number;
//   backgroundAction?: () => void;
//   mobileTitle?: string;
//   mobileBackAction?: () => void;
// }) {
//   const modalRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(event.target as Node)
//       ) {
//         backgroundAction();
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//
//   return (
//     <div
//       className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen p-6  z-50"
//       style={{ backdropFilter: "blur(12px)" }}
//     >
//       <div
//         ref={modalRef}
//         className={`flex flex-col gap-2 w-[${width}px] max-w-full max-h-[80%]`}
//         style={{
//           width: width,
//           height: height ? height : "auto",
//           minHeight: minHeight ? minHeight : "unset",
//         }}
//       >
//         {mobileTitle && (
//           <div className="bg-white w-full p-3.5 careershadow  rounded-2xl hidden max-sm:block">
//             <button
//               onClick={mobileBackAction}
//               className="flex gap-2 items-center"
//             >
//               <BackIcon />
//               <span className="text-[#050505] font-bold capitalize">
//                 {mobileTitle}
//               </span>
//             </button>
//           </div>
//         )}
//         <div
//           className={`bg-white border border-[#F1F5F9]  max-w-full rounded-2xl  overflow-y-scroll careershadow flex-1`}
//         >
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CPModal;

"use client";
import { BackIcon } from "@/imagecomponents";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface CPModalProps {
  children: ReactNode;
  isOpen?: boolean;
  backgroundAction?: () => void;
  width?: number;
  height?: number;
  minHeight?: number;
  mobileTitle?: string;
  mobileBackAction?: () => void;
}

function CPModal({
  children,
  isOpen = true,
  backgroundAction = () => {},
  width = 840,
  height,
  minHeight,
  mobileTitle,
  mobileBackAction = backgroundAction,
}: CPModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle click outside
  useEffect(() => {
    if (!isOpen || !isMounted) return;

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
  }, [isOpen, backgroundAction, isMounted]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !isMounted) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        backgroundAction();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, backgroundAction, isMounted]);

  // Handle body scroll and focus management
  useEffect(() => {
    if (!isOpen || !isMounted) return;

    // Store the currently focused element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Prevent body scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // Focus the modal
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      // Restore body scroll
      document.body.style.overflow = originalStyle;

      // Restore focus
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, isMounted]);

  // Don't render anything on server side or when not open
  if (!isMounted || !isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 flex justify-center items-center p-6 z-50"
      style={{
        backdropFilter: "blur(12px)",
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={mobileTitle ? "modal-title" : undefined}
    >
      <div
        ref={modalRef}
        className="flex flex-col gap-2 max-w-full max-h-[80vh] focus:outline-none"
        style={{
          width: width,
          height: height ? height : "auto",
          minHeight: minHeight ? minHeight : "400px", // Set a minimum height
        }}
        tabIndex={-1}
      >
        {mobileTitle && (
          <div className="bg-white w-full p-3.5 careershadow rounded-2xl block sm:hidden flex-shrink-0">
            <button
              onClick={mobileBackAction}
              className="flex gap-2 items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              <BackIcon />
              <span
                id="modal-title"
                className="text-[#050505] font-bold capitalize"
              >
                {mobileTitle}
              </span>
            </button>
          </div>
        )}
        <div className="bg-white border border-[#F1F5F9] max-w-full rounded-2xl careershadow flex-1 flex flex-col min-h-0">
          {children}
        </div>
      </div>
    </div>
  );

  // Use portal to render modal at document body level (only on client side)
  return createPortal(modalContent, document.body);
}

export default CPModal;
