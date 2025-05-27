import { CPsmallButton } from "@/components";
import React from "react";

const SuccessModal = () => {
  return (
    <div className="p-[18]">
      <h3 className="mb-4 text-lg font-medium text-[#050505]">
        You&apos;re all set! Here’s what’s next ✨
      </h3>
      <p className="mb-6 text-[#64748B]">
        You can complete your profile later to unlock more opportunities.
      </p>
      <div className="flex justify-end gap-2 mt-12">
        {/* <button className="p-3">Back</button> */}
        <CPsmallButton text="Preview profile" isLink="/dashboard" />
      </div>
    </div>
  );
};

export default SuccessModal;
