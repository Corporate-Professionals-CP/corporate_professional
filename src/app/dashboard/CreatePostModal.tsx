import {
  CPInput,
  CPModal,
  CPprofileImg,
  CPselect,
  CPsmallButton,
} from "@/components";
import { errorMessage, successMessage } from "@/utils/toastalert";
import React, { Dispatch, SetStateAction } from "react";
import { PostSchema, TPostSchema } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { addpost } from "./functions";
import CPpillet from "@/components/CPpillet";
import { mutate } from "swr";
import useUser from "@/statestore/useUser";

const CreatePostModal = ({
  setCreatemodal,
}: {
  setCreatemodal: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    trigger,
    formState: { errors },
    watch,
    getValues,
    setValue,
  } = useForm<TPostSchema>({
    resolver: zodResolver(PostSchema),
  });
  const user = useUser((state) => state.user);
  const { isMutating, trigger: submit } = useSWRMutation("/posts/", addpost);

  const handleCloseModal = () => {
    setCreatemodal(false);
  };
  const handleAddTag = async () => {
    const valid = await trigger("tag");
    const tags = getValues("tags") || [];
    const tag = getValues("tag");
    if (tags.find((t) => t == tag)) return;
    if (valid) {
      setValue("tags", [...tags, tag]);
      setValue("tag", "");
    }
  };

  const handleCancleTag = async (tag: string) => {
    const tags = getValues("tags") || [];

    const remainTags = tags.filter((t) => t != tag);
    setValue("tags", remainTags);
  };
  const tags = watch("tags");

  const handleSubmit = async () => {
    try {
      const valid = await trigger(["content", "post_type"]);
      if (valid) {
        const values = getValues();
        await submit(values);
        successMessage("Post added succesfully");
      }
      mutate("/feed/");
      mutate("/feed/network/");
      handleCloseModal();
    } catch (err) {
      errorMessage(err);
    }
  };
  return (
    <CPModal backgroundAction={handleCloseModal} width={600}>
      <div className="p-2 flex flex-col h-[620]">
        <div className="flex gap-2 border-b border-[#E2E8F0] p-4">
          <CPprofileImg />
          <div className="">
            <p className="text-[#050505]">{user?.full_name}</p>
            <p className="text-[#64748B] text-sm">{user?.job_title}</p>
          </div>
        </div>
        <div className="p-4 overflow-y-scroll flex-1">
          <div>
            <label className="text-[#475569] text-sm">Post Title</label>
            <CPInput
              placeholder="Give your post a compelling title"
              {...register("title")}
            />
          </div>
          <div className="mb-2">
            <label className="text-[#475569] text-sm">Post Type</label>
            <CPselect
              items={[
                { text: "Job Opportunity", val: "Job Opportunity" },
                { text: "Industry News", val: "Industry News" },
                { text: "Professional Update", val: "Professional Update" },
                { text: "Question", val: "Question" },
                { text: "Discussion", val: "Discussion" },
                { text: "Other", val: "Other" },
              ]}
              onChange={(val: string) => setValue("post_type", val)}
              value={watch("post_type")}
              error={errors.post_type?.message}
            />
          </div>
          <div>
            <label className="text-[#475569] text-sm">
              What do you want to talk about?
            </label>
            <CPInput
              type="textarea"
              placeholder="Share your thoughts insights or updates with your network "
              className="h-[100]"
              {...register("content")}
            />
          </div>
          <div>
            <label className="text-[#475569] text-sm"> Tags</label>

            {tags?.length > 0 && (
              <div className="mb-2 flex gap-2 flex-wrap">
                {tags.map((tag) => {
                  return (
                    <CPpillet
                      name={tag}
                      key={tag}
                      action={() => handleCancleTag(tag)}
                    />
                  );
                })}
              </div>
            )}
            <div className="flex items-center gap-2">
              <CPInput placeholder="#tags" {...register("tag")} />
              <CPsmallButton onClick={handleAddTag}>Add</CPsmallButton>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-end gap-2">
            <button className="p-3" onClick={() => setCreatemodal(false)}>
              Back
            </button>
            <CPsmallButton
              text="Next"
              onClick={handleSubmit}
              loading={isMutating}
            />
          </div>
        </div>
      </div>
    </CPModal>
  );
};

export default CreatePostModal;
