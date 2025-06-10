"use client";
import {
  CPInput,
  CPModal,
  CPprofileImg,
  CPselect,
  CPsmallButton,
  CPspinnerLoader,
} from "@/components";
import { errorMessage, successMessage } from "@/utils/toastalert";
import React, { Dispatch, SetStateAction, useState } from "react";
import { PostSchema, TPostSchema } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import { addpost, uploadMedia } from "./functions";
import CPpillet from "@/components/CPpillet";
import { mutate } from "swr";
import useUser from "@/statestore/useUser";
import { CloseIcon, PlusIcon } from "@/imagecomponents";
import { convertImage } from "@/utils/convertHEICtoJPEG";

type TMediaURL = { key: string; val: string };
const CreatePostModal = ({
  setCreatemodal,
}: {
  setCreatemodal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [mediaurl, setMediaurl] = useState<TMediaURL[]>([]);
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
  const tag = watch("tag");

  const handleSubmit = async () => {
    try {
      const valid = await trigger(["content", "post_type"]);
      if (valid) {
        const values = getValues();
        const media_urls = mediaurl.map((data) => data.val);
        await submit({ ...values, media_urls: media_urls });
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
      <div className="p-2 flex flex-col h-full min-h-0">
        {/* Header - fixed height */}
        <div className="flex gap-2 border-b border-[#E2E8F0] p-4 flex-shrink-0">
          <CPprofileImg />
          <div className="">
            <p className="text-[#050505]">{user?.full_name}</p>
            <p className="text-[#64748B] text-sm">{user?.job_title}</p>
          </div>
        </div>

        {/* Scrollable content area - grows to fill space */}
        <div className="p-4 overflow-y-auto flex-1 min-h-0">
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
              className="h-[100px]"
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
            <div className="flex items-center gap-2 bg-[#F8FAFC] pr-[5px]">
              <CPInput placeholder="#tags" {...register("tag")} />
              <button
                className={`bg-[#FFFFFF] rounded-[6px] py-[10px] px-[15px] font-medium ${
                  !tag ? "text-[#CBD5E1]" : "text-primary"
                }  text-sm`}
                onClick={handleAddTag}
              >
                Add
              </button>
            </div>
          </div>
          <Mediaattach mediaurl={mediaurl} setMediaurl={setMediaurl} />
        </div>

        {/* Footer - fixed height */}
        <div className="p-4 flex-shrink-0">
          <div className="flex items-center gap-2">
            <label
              htmlFor="media"
              className="text-primary font-medium text-xs flex items-center gap-0.5 mb-1 mr-auto p-2 "
            >
              <span>Attach media</span>
              <PlusIcon />
            </label>

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
// h-[600px] max-sm:h-[550px]
function Mediaattach({
  mediaurl,
  setMediaurl,
}: {
  mediaurl: TMediaURL[];
  setMediaurl: Dispatch<SetStateAction<TMediaURL[]>>;
}) {
  const [mediaPreview, setMediaPreview] = useState<
    { media: string; loading: boolean }[]
  >([]);

  // handle media upload
  const handleMediaChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files?.[0];
    if (!file) return;
    if (file.type === "image/heic" || file.name.endsWith(".heic")) {
      file = await convertImage(file);
      if (!file) return;
    }
    let previewUrl = null;
    if (typeof window !== "undefined") {
      previewUrl = URL.createObjectURL(file);
    }
    if (!previewUrl) return;
    setMediaPreview((s) => [...s, { media: previewUrl, loading: true }]);

    try {
      const uploadedUrl = await uploadMedia(file); // upload to S3
      setMediaurl((s) => [...s, { key: previewUrl, val: uploadedUrl }]); // store in form
      setMediaPreview((prev) =>
        prev.map((media) => {
          if (media.media === previewUrl) {
            return { media: previewUrl, loading: false };
          }
          return media;
        })
      );
    } catch (err) {
      onDelete(previewUrl);
      errorMessage(err, "Upload failed");
    } finally {
    }
  };
  const onDelete = (media: string) => {
    setMediaPreview(mediaPreview.filter((val) => val.media != media));
    setMediaurl(mediaurl.filter((item) => item.key != media));
  };
  return (
    <div className="my-4">
      <input
        id="media"
        type="file"
        className="hidden"
        accept="image/*,video/*"
        onChange={handleMediaChange}
      />

      <div className="flex gap-2 flex-wrap">
        {mediaPreview.length > 0 &&
          mediaPreview.map((media) => {
            return (
              <PostImage
                key={media.media}
                media={media.media}
                loading={media.loading}
                deleteMedia={() => onDelete(media.media)}
              />
            );
          })}
      </div>
    </div>
  );
}

const videoFormats: string[] = [".mp4", ".mov", ".gif"];

function PostImage({
  media,
  loading = false,
  deleteMedia,
}: {
  media: string;
  loading: boolean;
  deleteMedia: () => void;
}) {
  const isVideo = videoFormats.some((ext) => media.toLowerCase().endsWith(ext));
  return (
    <div key={media} className="mt-2 max-w-[400] relative">
      <button
        onClick={deleteMedia}
        className=" bg-white w-5 h-5 rounded-full grid place-content-center absolute top-1.5 right-1.5"
      >
        <CloseIcon />
      </button>
      {loading && (
        <div className="w-full h-full absolute bg-[#ffffff91] grid place-content-center">
          <CPspinnerLoader size={30} />
        </div>
      )}
      {isVideo ? (
        <video src={media} controls className="w-full h-auto max-h-60" />
      ) : (
        <img
          src={media}
          alt="Preview"
          className="w-full h-auto max-h-60 object-cover"
        />
      )}
    </div>
  );
}
export default CreatePostModal;
