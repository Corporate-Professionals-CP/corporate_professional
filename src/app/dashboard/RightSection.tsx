"use client";
import AccountSetup from "./AccountSetup";
import RightSectionContainer from "./RightSectionContainer";

function RightSection() {
  return (
    <RightSectionContainer>
      <div className="p-4 rounded-2xl shadow-[0px_12px_16px_-4px_#1018280A,0px_4px_6px_-2px_#10182808]">
        <AccountSetup />
      </div>
    </RightSectionContainer>
  );
}

export default RightSection;
