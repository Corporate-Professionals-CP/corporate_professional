"use client";
import {
  bookmarkToPost,
  ReactToPost,
  removeBookmarkToPost,
  RemoveToPost,
} from "@/app/functions";
import { BookmarkIcon } from "@/imagecomponents";
import CommentIcon from "@/imagecomponents/CommentIcon";
import LoveIcon from "@/imagecomponents/LoveIcon";
import RetweetIcon from "@/imagecomponents/RetweetIcon";
import ShareIcon from "@/imagecomponents/ShareIcon";
import { errorMessage } from "@/utils/toastalert";

import React, { useState } from "react";

type TCPpostCardFooter = {
  total_comments: number;
  total_reactions: number;
  is_bookmarked: boolean;
  // reactions_breakdown:{like:number, love:number: insightful:number, funny:number, congratulations: number};
  // is_repost: boolean;
  post_id: string;
  is_liked?: boolean;
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
};

function CPpostCardFooter({
  total_comments,
  total_reactions,
  is_bookmarked,
  post_id,
  is_liked = false,
  setShowComments = () => {},
}: // reactions_breakdown,
// is_repost,

TCPpostCardFooter) {
  const [heart, setHeart] = useState(is_liked);
  const [bookmark, setBookMark] = useState(is_bookmarked);
  const onClickLike = async () => {
    const prevHeart = heart;
    setHeart((s) => !s);
    try {
      if (prevHeart) {
        await RemoveToPost(post_id);
      } else {
        await ReactToPost(post_id);
      }
    } catch (err) {
      errorMessage(err, "React to post failed");
      setHeart((s) => !s);
    }
  };
  const onClickBookMark = async () => {
    const prevBook = bookmark;
    setBookMark((s) => !s);
    try {
      if (prevBook) {
        await removeBookmarkToPost(post_id);
      } else {
        await bookmarkToPost(post_id);
      }
    } catch (err) {
      errorMessage(err, "Bookmark failed");
      setBookMark((s) => !s);
    }
  };
  return (
    <div className="flex items-center">
      <div className="flex items-center flex-1 gap-[18]">
        <div className="flex items-center gap-2">
          <button onClick={onClickLike}>
            <LoveIcon active={heart} />
          </button>
          <span className="text-slate text-xs">{total_reactions}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowComments((s) => !s)}>
            <CommentIcon />
          </button>
          <span className="text-slate text-xs">{total_comments}</span>
        </div>
        <div className="flex items-center gap-2">
          <RetweetIcon />
          <span className="text-slate text-xs">10K</span>
        </div>
      </div>
      <div className="flex items-center gap-[18]">
        <button onClick={onClickBookMark}>
          <BookmarkIcon size="20" active={bookmark} />
        </button>
        <ShareIcon />
      </div>
    </div>
  );
}

export default CPpostCardFooter;
