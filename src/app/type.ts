import { z } from "zod";
import {
  TContact,
  TEducation,
  TSkill,
  TWorkExperience,
} from "./dashboard/profile/type";

export interface TFeedPage {
  main_posts: TPost[];
  fresh_posts: TPost[]; // if this really can be empty, it should still be TPost[]
  next_cursor: string;
}

export type TSection = {
  completed: boolean;
  weight: number;
  type: "required" | "optional";
};
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
  media_urls: string[];
  media_type: string;
  id: string;
  user: TUser | null;
  username: null;
  is_active: boolean;
  is_liked: boolean;
  created_at: string;
  updated_at: string;
  published_at: string;
  total_comments: number;
  total_reactions: number;
  total_reposts: number;
  is_bookmarked: boolean;
  reactions_breakdown: TReaction;
  is_repost: boolean;
  original_post_id: string;
};

export type TReaction = {
  like: { count: number; has_reacted: boolean };
  love: { count: number; has_reacted: boolean };
  insightful: { count: number; has_reacted: boolean };
  funny: { count: number; has_reacted: boolean };
  congratulations: { count: number; has_reacted: boolean };
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
  topics: string[];
  recruiter_tag: boolean;
  id: string;
  age: string | undefined;
  work_experience: TWorkExperience[];
  education: TEducation[];
  contact: TContact[];
  skills: TSkill[];
  linkedin_profile: string;
  sections: {
    full_name: TSection;
    email: TSection;
    industry: TSection;
    location: TSection;
    working_experinece: TSection;
    job_title: TSection;
    skills: TSection;
    educations: TSection;
    years_of_experience: TSection;
    certifications: TSection;
    bio: TSection;
    linkedin_profile: TSection;
  };
  missing_fields: string[];
  profile_completion: number;
  created_at: string;
  is_active: boolean;
  is_verified: boolean;
  is_admin: boolean;
  updated_at: string;
  sex: string | undefined;
  profile_image_url: string;
  cv_url: null;
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
  comment: z.string().min(1, "comment is required"),
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

export const ReportSchema = z.object({
  reported_user_id: z.string({ required_error: "User Id is required" }),
  content_type: z.string({ required_error: "Content type is required" }),
  content_id: z.string({ required_error: "Content Id is required" }),
  content_url: z.string({ required_error: "Content Url is required" }),
  report_type: z.string({ required_error: "Report is required" }),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(5, "Description must be at least 5 characters"),
});

export type TReportSchema = z.infer<typeof ReportSchema>;
