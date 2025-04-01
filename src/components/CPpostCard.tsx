import React from "react";
import CPprofileImg from "./CPprofileImg";
import CPpostCardHeader from "./CPpostCardHeader";
import CPpostCardBody from "./CPpostCardBody";
import CPpostCardFooter from "./CPpostCardFooter";

function CPpostCard() {
  return (
    <div className="border-b border-[#E2E8F0] p-6 flex gap-4 items-start">
      <CPprofileImg />
      <div className="flex-1">
        <CPpostCardHeader />
        <CPpostCardBody />
        <CPpostCardFooter />
      </div>
    </div>
  );
}

export default CPpostCard;
