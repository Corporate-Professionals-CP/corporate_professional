"use client";

import CPpostCard from "@/components/CPpostCard";
import { LeftArrow, SearchIcon } from "@/imagecomponents";
import useSWR from "swr";

import { fetchBookmarkdata } from "./functions";
import { CPspinnerLoader } from "@/components";
import MIddleSectionContainer from "../MIddleSectionContainer";

function MiddleSection() {
  const { data, isLoading } = useSWR("/bookmarks/bookmarks", fetchBookmarkdata);

  return (
    <MIddleSectionContainer>
      <div className="mb-[18] px-6 py-5  border-b border-[#E2E8F0] text-slate font-medium flex items-center gap-6">
        <LeftArrow />
        <span>Bookmarks</span>
      </div>
      <div className="p-[18]">
        <div className="flex items-center gap-[11] py-3 mb-4 border border-slate rounded-full p-3">
          <SearchIcon size={20} />
          <input
            placeholder="Search by name, job title, company, or industry..."
            className="text-sm flex-1"
          />
        </div>
      </div>
      <div>
        {isLoading ? (
          <CPspinnerLoader />
        ) : (
          data?.map((bookmark) => (
            <CPpostCard key={bookmark.id} post={bookmark} />
          ))
        )}
      </div>
    </MIddleSectionContainer>
  );
}

export default MiddleSection;
