import { TPost } from "@/app/type";
import React from "react";

const videoFormats: string[] = [".mp4", ".mov", ".gif"];

function CPpostCardBody({ post }: { post: TPost }) {
  return (
    <div className="mb-[36]">
      {post.title && (
        <h1 className="text-slate text-[20px] mb-3 font-medium">
          {post.title}
        </h1>
      )}
      <p className=" text-slate text-sm leading-5">{post.content}</p>
      {post?.media_urls?.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-4 justify-center">
          {post.media_urls.map((media) => {
            const isVideo = videoFormats.some((ext) =>
              media.toLowerCase().endsWith(ext)
            );
            return (
              <div key={media}>
                {isVideo ? (
                  <video
                    key={media}
                    src={media}
                    controls
                    className="w-full h-auto max-h-60"
                  />
                ) : (
                  <img
                    src={media}
                    alt="Preview"
                    className="w-full h-auto max-h-60 object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center mt-4">
          {post.tags.map((tag, i) => (
            <div
              className="text-xs py-2 px-3 gap-2 bg-[#F8FAFC] rounded-full w-max flex items-center"
              key={i}
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CPpostCardBody;
