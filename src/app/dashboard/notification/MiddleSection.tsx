"use client";

import CPpostCard from "@/components/CPpostCard";
import { LeftArrow } from "@/imagecomponents";

function MiddleSection() {
  return (
    <section className="w-[600] border border-[#E2E8F0] h-screen">
      <div className="mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-[#020617] font-medium flex items-center gap-6">
        <LeftArrow />
        <span>Notifications</span>
      </div>

      <div>
        <CPpostCard />
      </div>
    </section>
  );
}

export default MiddleSection;
