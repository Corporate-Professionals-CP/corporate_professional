import httprequest from "@/utils/httpRequest";
import { TPost } from "@/app/type";

export const fetchBookmarkdata = () => {
  return httprequest
    .get("/bookmarks/bookmarks")
    .then((res) => res.data as TPost[])
    .catch(() => []);
};
