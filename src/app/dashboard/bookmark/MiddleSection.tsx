"use client";

import CPpostCard from "@/components/CPpostCard";
import { LeftArrow, SearchIcon } from "@/imagecomponents";

function MiddleSection() {
  return (
    <section className="w-[600] border border-[#E2E8F0] ">
      <div className="mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-[#020617] font-medium flex items-center gap-6">
        <LeftArrow />
        <span>Bookmarks</span>
      </div>
      <div className="p-[18]">
        <div className="flex items-center gap-[11] py-3 mb-4 border border-[#E2E8F0] rounded-full p-3">
          <SearchIcon size={20} />
          <input
            placeholder="Search by name, job title, company, or industry..."
            className="text-sm flex-1"
          />
        </div>
      </div>
      <div>
        <CPpostCard />
        <CPpostCard />
        <CPpostCard />
        <CPpostCard />
      </div>
    </section>
  );
}

export default MiddleSection;
