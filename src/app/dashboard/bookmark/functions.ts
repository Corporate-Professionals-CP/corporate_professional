import httprequest from "@/utils/httpRequest";
import { TBookmark } from "./type";

export const fetchBookmarkdata = () => {
  return httprequest
    .get("/bookmarks/bookmarks")
    .then((res) => res.data as TBookmark[])
    .catch(() => []);
};
