"use client";
import React, { useState } from "react";
import CPprofileImg from "./CPprofileImg";
import CPpostCardHeader from "./CPpostCardHeader";
import CPpostCardBody from "./CPpostCardBody";
import CPpostCardFooter from "./CPpostCardFooter";
import { CommentSchema, TComment, TCommentSchema, TPost } from "@/app/type";
import useSWR, { mutate } from "swr";
import { fetchPostComments, submitComment } from "@/app/dashboard/functions";
import CPspinnerLoader from "./CPspinnerLoader";
import useSWRMutation from "swr/mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CPsmallButton from "./CPsmallButton";
import { errorMessage } from "@/utils/toastalert";
import CPrepostModal from "./CPrepostModal";
// import CPInput from "./CPInput";

function CPpostCard({ post }: { post: TPost }) {
  // display different UI for a repost

  const [showComments, setShowComments] = useState(false);
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
            job_title={post.job_title}
            created_at={post.created_at}
          />
          <CPpostCardBody post={post} />
          <CPpostCardFooter
            total_comments={post.total_comments}
            total_reactions={post.total_reactions}
            is_bookmarked={post.is_bookmarked}
            // is_liked = {}
            setOpenRepost={setOpenRepost}
            setShowComments={setShowComments}
            post_id={post.id}
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

const CPpostCommentBody = ({ post_id }: { post_id: string }) => {
  const { data, isLoading } = useSWR(
    `/comments/post/${post_id}`,
    fetchPostComments
  );

  const { trigger, isMutating } = useSWRMutation("/comments/", submitComment);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TCommentSchema>({
    resolver: zodResolver(CommentSchema),
  });
  const onSubmit = async (data: TCommentSchema) => {
    try {
      const response = await trigger({ ...data, post_id });
      mutate(
        `/comments/post/${post_id}`,
        (current: TComment[] = []) => [
          ...current,
          {
            ...response,
          },
        ],
        true
      );
    } catch (err) {
      errorMessage(err);
    }
  };
  return isLoading ? (
    <CPspinnerLoader />
  ) : (
    <div className="px-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center gap-2 mb-2">
          <CPprofileImg size={35} />
          <textarea
            className="flex-1 min-h-[30] h-[30] py-1 bg-[#F8FAFC] "
            {...register("comment")}
          ></textarea>
        </div>
        {errors.comment?.message && (
          <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">
            {errors.comment?.message}
          </p>
        )}
        <CPsmallButton loading={isMutating} type="submit">
          comment
        </CPsmallButton>
      </form>
      {data?.map((comment) => (
        <CPpostComment key={comment.created_at} comment={comment} />
      ))}
    </div>
  );
};
const CPpostComment = ({ comment }: { comment: TComment }) => {
  return (
    <div className="flex items-start gap-3 mb-3">
      <CPprofileImg size={35} />
      <div className="flex-1">
        <p className="font-medium text-sm text-slate">
          {comment.user.full_name}
        </p>
        <p className="text-[#64748B] text-sm ">{comment.user.job_title}</p>
        <p className=" text-slate text-sm leading-5  mt-1">{comment.content}</p>
      </div>
    </div>
  );
};

export default CPpostCard;
