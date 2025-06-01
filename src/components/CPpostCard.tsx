"use client";
import React, { useState } from "react";
import CPprofileImg from "./CPprofileImg";
import CPpostCardHeader from "./CPpostCardHeader";
import CPpostCardBody from "./CPpostCardBody";
import CPpostCardFooter from "./CPpostCardFooter";
import { TPost } from "@/app/type";
import CPrepostModal from "./CPrepostModal";
import CPpostCommentBody from "./CPpostCommentBody";

function CPpostCard({
  post,
  showComment = false,
}: {
  post: TPost;
  showComment?: boolean;
}) {
  // display different UI for a repost

  const [showComments, setShowComments] = useState(showComment);
  const [openRepost, setOpenRepost] = useState(false);
  return (
    <div className="border-b border-[#E2E8F0] p-6">
      <div className=" flex gap-4 items-start mb-3">
        <CPprofileImg
          url={post.user?.profile_image_url}
          full_name={post.user?.full_name}
        />
        <div className="flex-1">
          <CPpostCardHeader
            name={post.user?.full_name}
            userid={post.user?.id}
            job_title={post.job_title}
            created_at={post.created_at}
          />
          <CPpostCardBody post={post} />
          <CPpostCardFooter
            total_comments={post.total_comments}
            total_reactions={post.total_reactions}
            is_bookmarked={post.is_bookmarked}
            reactions_breakdown={post.reactions_breakdown}
            setOpenRepost={setOpenRepost}
            setShowComments={setShowComments}
            post_id={post.id}
            is_repost={post.is_repost}
            total_reposts={post.total_comments}
          />
        </div>
      </div>
      {openRepost && (
        <CPrepostModal setCreatemodal={setOpenRepost} post={post} />
      )}
      {showComments && <CPpostCommentBody post_id={post.id} />}
    </div>
  );
}

export default CPpostCard;
