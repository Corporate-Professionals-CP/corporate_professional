export type TNotification = {
  id: string;
  type:
    | "post_reaction"
    | "connection_request"
    | "connection_accept"
    | "post_comment";
  message: string;
  is_read: boolean;
  created_at: string;
  actor: {
    id: string;
    full_name: string;
    profile_image_url: string;
    avatar: {
      initials: string;
      color: string;
    };
  };
  post: { id: string; content: string } | null;
};
