import httprequest from "@/utils/httpRequest";
import { TComment, TCommentSchema, TPost } from "../type";
import { TPostSchema } from "./type";

export const fetchFeeds = async (url: string) => {
  return httprequest
    .get(url)
    .then((res) => res.data.main_posts as TPost[])
    .catch(() => []);
};

export const fetchFeedsNetwork = async () => {
  return httprequest
    .get("/feed/network")
    .then((res) => res.data.main_posts as TPost[])
    .catch(() => []);
};

export const fetchPostComments = async (url: string) => {
  return httprequest
    .get(url)
    .then((res) => res.data as TComment[])
    .catch(() => []);
};

export const submitComment = async (
  url: string,
  { arg }: { arg: TCommentSchema & { post_id: string } }
) => {
  const response = await httprequest.post("/comments/", {
    post_id: arg.post_id,
    content: arg.comment,
  });
  return response.data as TComment;
};

export const addpost = async (url: string, { arg }: { arg: TPostSchema }) => {
  const response = await httprequest.post("/posts/", {
    title: arg.title,
    content: arg.content,
    post_type: arg.post_type,
    // visibility: public,
    tags: arg.tags,
  });
  return response.data;
};
