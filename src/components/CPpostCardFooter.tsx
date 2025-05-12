import { BookmarkIcon } from "@/imagecomponents";
import CommentIcon from "@/imagecomponents/CommentIcon";
import LoveIcon from "@/imagecomponents/LoveIcon";
import RetweetIcon from "@/imagecomponents/RetweetIcon";
import ShareIcon from "@/imagecomponents/ShareIcon";

import React from "react";

function CPpostCardFooter() {
  return (
    <div className="flex items-center">
      <div className="flex items-center flex-1 gap-[18]">
        <div className="flex items-center gap-2">
          <LoveIcon />
          <span className="text-[#020617] text-xs">10K</span>
        </div>
        <div className="flex items-center gap-2">
          <CommentIcon />
          <span className="text-[#020617] text-xs">10K</span>
        </div>
        <div className="flex items-center gap-2">
          <RetweetIcon />
          <span className="text-[#020617] text-xs">10K</span>
        </div>
      </div>
      <div className="flex items-center gap-[18]">
        <BookmarkIcon size="20" />
        <ShareIcon />
      </div>
    </div>
  );
}

export default CPpostCardFooter;
