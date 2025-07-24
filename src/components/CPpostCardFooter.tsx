"use client";
import {
  bookmarkToPost,
  ReactToPost,
  removeBookmarkToPost,
  RemoveReactToPost,
} from "@/app/functions";
import { BookmarkIcon } from "@/imagecomponents";
import CommentIcon from "@/imagecomponents/CommentIcon";
import LoveIcon from "@/imagecomponents/LoveIcon";
import RetweetIcon from "@/imagecomponents/RetweetIcon";

import { errorMessage } from "@/utils/toastalert";

import React, { useEffect, useState } from "react";
import CPsharePost from "./CPsharePost";
import { TReaction } from "@/app/type";

type TCPpostCardFooter = {
  total_comments: number;
  total_reactions: number;
  is_bookmarked: boolean;
  total_reposts: number;
  reactions_breakdown: TReaction;
  is_repost: boolean;
  post_id: string;

  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenRepost: React.Dispatch<React.SetStateAction<boolean>>;
};

function CPpostCardFooter({
  total_comments,
  total_reactions,
  total_reposts,
  is_bookmarked,
  post_id,

  setShowComments = () => {},
  setOpenRepost = () => {},
  reactions_breakdown,
}: // is_repost
// reactions_breakdown,
// is_repost,

TCPpostCardFooter) {
  const [heart, setHeart] = useState(false);
  const [bookmark, setBookMark] = useState(is_bookmarked);

  const [addLike, setaddLike] = useState(0);

  useEffect(() => {
    const val =
      reactions_breakdown.congratulations?.has_reacted ||
      reactions_breakdown.funny?.has_reacted ||
      reactions_breakdown.insightful?.has_reacted ||
      reactions_breakdown.like?.has_reacted ||
      reactions_breakdown.love?.has_reacted;

    setHeart(val);
  }, [reactions_breakdown]);

  const onClickLike = async () => {
    const prevHeart = heart;
    setHeart((s) => !s);
    try {
      if (prevHeart) {
        setaddLike(0);
        await RemoveReactToPost(post_id);
      } else {
        setaddLike(1);
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

  // Repost
  return (
    <div className="flex items-center">
      <div className="flex items-center flex-1 gap-[18]">
        <div className="flex items-center gap-2">
          <button onClick={onClickLike}>
            <LoveIcon active={heart} />
          </button>
          <span className="text-slate text-xs">
            {total_reactions + addLike}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowComments((s) => !s)}>
            <CommentIcon />
          </button>
          <span className="text-slate text-xs">{total_comments}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpenRepost(true)}>
            <RetweetIcon />
          </button>
          <span className="text-slate text-xs">{total_reposts}</span>
        </div>
      </div>
      <div className="flex items-center gap-[18]">
        <button onClick={onClickBookMark}>
          <BookmarkIcon size="20" active={bookmark} />
        </button>
        <div className="relative">
          <CPsharePost
            url={`${window.location.origin}/dashboard/post/${post_id}`}
          />
        </div>
      </div>
    </div>
  );
}

export default CPpostCardFooter;
