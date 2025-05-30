import httprequest from "@/utils/httpRequest";

export const ReactToPost = async (post_id: string, type = "like") => {
  await httprequest.post("/reactions/", {
    post_id: post_id,
    type: type,
  });
};

export const RemoveReactToPost = async (post_id: string) => {
  await httprequest.delete(`/reactions/${post_id}`);
};

export const bookmarkToPost = async (post_id: string) => {
  await httprequest.post("/bookmarks/", {
    post_id: post_id,
  });
};

export const removeBookmarkToPost = async (post_id: string) => {
  await httprequest.delete(`/bookmarks/${post_id}`);
};

export const repostPost = async (
  url: string,
  { arg }: { arg: { quote: string } }
) => {
  const response = await httprequest.post(url, {
    quote: arg.quote,
  });
  return response.data;
};
