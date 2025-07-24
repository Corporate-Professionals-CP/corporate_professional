import { TNotification } from "@/app/dashboard/notification/type";
import { create } from "zustand";

type TsetNotification = {
  notifications: TNotification[];
  unread_count: number;
};
type UserState = {
  notification: TNotification[] | [];
  unread_count: number;
  setNotification: (data: TsetNotification) => void;
};

const useNotificationState = create<UserState>((set) => ({
  notification: [],
  setNotification: (data: TsetNotification) =>
    set({ notification: data.notifications, unread_count: data.unread_count }),
  unread_count: 0,
}));

export default useNotificationState;
