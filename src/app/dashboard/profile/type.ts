import { z } from "zod";

export const ProfileSchema = z.object({
  full_name: z.string().min(10),
  job_title: z.string().min(1),
  industry: z.string().min(1),
  location: z.string().min(1),
  pronouns: z.string().min(1),
  recruiter_tag: z.string().min(1),
  visibility: z.string().min(1),
  experience: z.string().min(1),
  bio: z.string().min(1),
});
export type TProfileSchema = z.infer<typeof ProfileSchema>;

export const ContactSchema = z.object({
  type: z.string(),
  url: z.string().min(2),
  username: z.string().min(2),
});

export type TContactSchema = z.infer<typeof ContactSchema>;

export const WorkExperienceSchema = z.object({
  from: z.date(),
  to: z.date(),
  title: z.string().min(1),
  company: z.string().min(1),
  locatiom: z.string().min(1),
  url: z.string().min(1),
  description: z.string().min(10),
});

export type TWorkExperienceSchema = z.infer<typeof WorkExperienceSchema>;

export const CertificationSchema = z.object({
  issued_date: z.string({ required_error: "Issue date is required" }),
  expiration_date: z.string({ required_error: "Expiry date is required" }),
  name: z.string().min(1, "Name is required"),
  organization: z.string().min(1, "Organization is required"),
  url: z.string().min(0),
  description: z.string().min(10, "Description is required"),
});

export type TCertificationSchema = z.infer<typeof CertificationSchema>;

export const SkillsSchema = z.object({
  skill: z.string().min(2).max(15),
});

export type TSkillsSchema = z.infer<typeof SkillsSchema>;

export type TCertification = {
  name: string;
  organization: string;
  url: string;
  description: string;
  media_url: string;
  issued_date: string;
  expiration_date: string;
  id: string;
  created_at: string;
};

export type TContact = {
  id: string;
  type: string;
  platform_name: string;
  username: string;
  url: string;
  created_at: string;
};

export type TWorkExperience = {
  title: string;
  company: string;
  company_url: string;
  location: string;
  employment_type: string;
  start_date: string;
  end_date: string;
  currently_working: boolean;
  description: string;
  achievements: string;
  id: string;
  created_at: string;
};

export type TVolunteering = {
  role: string;
  organization: string;
  organization_url: string;
  location: string;
  start_date: string;
  end_date: string;
  currently_volunteering: boolean;
  description: string;
  id: string;
  created_at: string;
};

export type TEducation = {
  degree: string;
  school: string;
  location: string;
  url: string;
  description: string;
  media_url: string;
  from_date: string;
  to_date: string;
  id: string;
  created_at: string;
};

export type TSkill = {
  id: number;
  name: string;
};
