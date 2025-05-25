import { TPost } from "@/app/type";
import React from "react";

function CPpostCardBody({ post }: { post: TPost }) {
  return (
    <div className="mb-[36]">
      {post.title && (
        <h1 className="text-[#020617] text-[20px] mb-3 font-medium">
          {post.title}
        </h1>
      )}
      <p className=" text-[#020617] text-sm leading-5">{post.content}</p>
    </div>
  );
}

export default CPpostCardBody;
