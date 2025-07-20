"use client";
import {
  CPInput,
  CPModal,
  CPpostCardBody,
  CPpostCardHeader,
  CPprofileImg,
  CPsmallButton,
} from "@/components";
import { errorMessage, successMessage } from "@/utils/toastalert";
import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { TPost } from "@/app/type";
import { repostPost } from "@/app/functions";
import useUser from "@/statestore/useUser";

type TRepost = { quote: string };
const CPrepostModal = ({
  setCreatemodal,
  post,
}: {
  setCreatemodal: Dispatch<SetStateAction<boolean>>;
  post: TPost;
}) => {
  const { handleSubmit, register } = useForm<TRepost>({});
  const { user } = useUser();
  const { isMutating, trigger: submit } = useSWRMutation(
    `/posts/${post.id}/repost`,
    repostPost
  );

  const handleCloseModal = () => setCreatemodal(false);

  const onSubmit = async (data: TRepost) => {
    try {
      await submit(data);
      successMessage("Repost added successfully");
      mutate("/feed/");
      mutate("/feed/network/");
      handleCloseModal();
    } catch (err) {
      errorMessage(err);
    }
  };

  return (
    <CPModal backgroundAction={handleCloseModal} width={600}>
      <div className="p-4 flex flex-col h-[620px] bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="flex gap-3 items-center border-b border-gray-200 pb-3">
          <CPprofileImg />
          <div>
            <p className="text-base font-medium text-gray-800">
              {user?.full_name}
            </p>
            <p className="text-sm text-gray-500">Reposting to your feed</p>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          <CPInput
            type="textarea"
            placeholder="Add your thoughts..."
            {...register("quote")}
            className="w-full resize-none"
          />

          <div className="border border-gray-200 rounded-lg p-3 bg-[#F9FAFB]">
            <div className="flex gap-3 items-start">
              <CPprofileImg
                url={post.user?.profile_image_url}
                full_name={post.user?.full_name}
              />
              <div className="flex-1">
                <CPpostCardHeader
                  name={post.user?.full_name}
                  job_title={post.job_title}
                  created_at={post.created_at}
                  userid={post.user?.id}
                />
                <CPpostCardBody post={post} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 flex justify-end gap-2 border-t border-gray-200">
          <button
            className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <CPsmallButton
            text="Repost"
            onClick={handleSubmit(onSubmit)}
            loading={isMutating}
            className="bg-primary hover:bg-indigo-600 transition text-white"
          />
        </div>
      </div>
    </CPModal>
  );
};

export default CPrepostModal;
