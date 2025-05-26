import httprequest from "@/utils/httpRequest";
import { TNotification } from "./type";

export const fetchNotification = (url: string) => {
  return httprequest
    .get(url)
    .then((res) => res.data as TNotification[])
    .catch(() => []);
};
