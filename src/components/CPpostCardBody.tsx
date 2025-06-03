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
        <div className="flex gap-2 flex-wrap mt-4">
          {post.media_urls.map((media) => {
            const isVideo = videoFormats.some((ext) =>
              media.toLowerCase().endsWith(ext)
            );
            return (
              <div key={media}>
                {isVideo ? (
                  <video
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
    </div>
  );
}

export default CPpostCardBody;
