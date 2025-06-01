"use client";
import React from "react";
import MIddleSectionContainer from "../../MIddleSectionContainer";
import { CPcommentSkeleton, CPdashboardBack, CPpostCard } from "@/components";
import useSWR from "swr";
import { useParams } from "next/navigation"; // for App Router (Next.js 13+)
import { getUserPost } from "./functions";
import CPpostCardSkeleton from "@/components/CPpostCardSkeleton";

function MiddleSection() {
  const params = useParams();
  const postId = params?.postId as string;
  const { data, isLoading } = useSWR(`/posts/${postId}`, getUserPost);

  if (isLoading || !data) {
    return (
      <MIddleSectionContainer>
        <div>
          <CPdashboardBack className="m-0" style={{ marginBottom: 0 }} />
          <PostSkeleton />
        </div>
      </MIddleSectionContainer>
    );
  }

  return (
    <MIddleSectionContainer>
      <div>
        <CPdashboardBack className="m-0" style={{ marginBottom: 0 }} />
        <div className="p-6">
          <CPpostCard post={data} showComment={true} />
        </div>
      </div>
    </MIddleSectionContainer>
  );
}

const PostSkeleton = () => {
  return (
    <div>
      <CPpostCardSkeleton />
      <div className="p-6 flex flex-col gap-3">
        <CPcommentSkeleton />
        <CPcommentSkeleton />
        <CPcommentSkeleton />
        <CPcommentSkeleton />
        <CPcommentSkeleton />
        <CPcommentSkeleton />
      </div>
    </div>
  );
};

export default MiddleSection;
