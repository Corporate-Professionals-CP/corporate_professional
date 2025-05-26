import { z } from "zod";
export type TPost = {
  title: string;
  content: string;
  post_type: string;
  industry: string;
  visibility: string;
  experience_level: string;
  job_title: string;
  tags: string[];
  skills: string[];
  expires_at: string;
  media_url: string;
  media_type: string;
  id: string;
  user: TUser | null;
  username: null;
  is_active: true;
  created_at: string;
  updated_at: string;
  published_at: string;
  total_comments: number;
  total_reactions: number;
  is_bookmarked: boolean;
  reactions_breakdown: null;
  is_repost: boolean;
  original_post_id: string;
};

export type TComment = {
  id: string;
  content: string;
  user_id: string;
  post_id: string;
  created_at: string;
  user: {
    id: string;
    full_name: string;
    job_title: string;
    profile_image_url: string;
  };
};

export type TUser = {
  full_name: string;
  email: string;
  phone: string;
  company: string | undefined;
  job_title: string | undefined;
  bio: string;
  status: string | undefined;
  industry: string;
  years_of_experience: string;
  location: string;
  visibility: string;
  topics: string;
  education: string;
  recruiter_tag: boolean;
  id: string;
  age: string | undefined;
  skills: {
    id: string | number;
    name: string;
  }[];
  profile_completion: number;
  created_at: string;
  is_active: boolean;
  is_verified: boolean;
  is_admin: boolean;
  updated_at: string;
  sex: string | undefined;
  profile_image_url: string;
};

export type TUserProfile = {
  id: string;
  full_name: string;
  job_title: string;
  company: string;
  industry: string;
  is_recruiter: boolean;
};
export const CommentSchema = z.object({
  comment: z.string().min(1),
});

export type TCommentSchema = z.infer<typeof CommentSchema>;

export type TSuggestedNetwork = {
  id: string;
  full_name: string;
  headline: string;
  location: string;
  pronouns: string;
  industry: string;
  years_of_experience: string;
  profile_image_url: string;
  avatar_text: string;
  recruiter_tag: boolean;
  created_at: string;
  job_title: string;
};

export type TNetwork = {
  id: string;
  sender_id: string;
  receiver_id: string;
  status: string;
  created_at: string;
  sender: {
    id: string;
    full_name: string;
    headline: string;
    location: string;
    pronouns: string;
    industry: string;
    years_of_experience: string;
    profile_image_url: string;
    avatar_text: string;
    recruiter_tag: boolean;
    created_at: string;
    job_title: string;
  };
  receiver: {
    id: string;
    full_name: string;
    headline: string;
    location: string;
    pronouns: string;
    industry: string;
    years_of_experience: string;
    profile_image_url: string;
    avatar_text: string;
    recruiter_tag: boolean;
    created_at: string;
    job_title: string;
  };
};
