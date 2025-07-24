import httprequest from "@/utils/httpRequest";
import { TNotification } from "./type";

type TsetNotification = {
  notifications: TNotification[];
  unread_count: number;
};

export const fetchNotification = (url: string) => {
  return httprequest
    .get(url)
    .then((res) => res.data as TsetNotification)
    .catch(() => {
      return { notifications: [], unread_count: 0 };
    });
};
