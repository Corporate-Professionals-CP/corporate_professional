import { TPost, TUser } from "@/app/type";

export type TNotification = {
  id: string;
  type: string;
  message: string;
  is_read: true;
  created_at: string;
  actor: TUser;
  post: TPost;
};
