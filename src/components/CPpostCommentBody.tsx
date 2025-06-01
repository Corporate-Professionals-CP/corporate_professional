import { fetchPostComments, submitComment } from "@/app/dashboard/functions";
import { CommentSchema, TComment, TCommentSchema } from "@/app/type";
import { errorMessage } from "@/utils/toastalert";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";
import useSWRMutation from "swr/mutation";
import CPprofileImg from "./CPprofileImg";
import CPsmallButton from "./CPsmallButton";
import CPcommentSkeleton from "./CPcommentSkeleton";

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
  return (
    <div className="px-3 mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <CPprofileImg size={35} />
          <textarea
            className="flex-1 min-h-[30] h-[30] p-1 bg-[#FFFF] border-b border-[#E2E8F0] "
            {...register("comment")}
          ></textarea>
        </div>
        {errors.comment?.message && (
          <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">
            {errors.comment?.message}
          </p>
        )}
        <div className="flex justify-end">
          <CPsmallButton
            style={{ padding: "6px 12px", fontSize: "14px" }}
            loading={isMutating}
            type="submit"
          >
            comment
          </CPsmallButton>
        </div>
      </form>
      {isLoading ? (
        <CPcommentSkeleton />
      ) : (
        data?.map((comment) => (
          <CPpostComment key={comment.created_at} comment={comment} />
        ))
      )}
    </div>
  );
};

const CPpostComment = ({ comment }: { comment: TComment }) => {
  return (
    <div className="flex items-start gap-3 mb-3">
      <CPprofileImg
        url={comment.user?.profile_image_url}
        full_name={comment.user?.full_name}
        size={35}
      />
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

export default CPpostCommentBody;
