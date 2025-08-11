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

export const readNotification = async (
  url: string,
  { arg }: { arg: { notif_id: string } }
) => {
  const response = await httprequest.put(`/notifications/${arg.notif_id}/read`);
  return response;
};
