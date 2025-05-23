import { z } from "zod";

// PROFILE SCHEMA
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

// CONTACT SCHEMA
export const ContactSchema = z.object({
  type: z.string().min(2),
  url: z.string().min(2),
  username: z.string().min(2),
  // platform_name: z.string().min(0),
});

export type TContactSchema = z.infer<typeof ContactSchema>;

// WORK-EXPERIENCE SCHEMA
export const WorkExperienceSchema = z.object({
  from: z.string(),
  to: z.string(),
  title: z.string().min(1),
  company: z.string().min(1),
  location: z.string().min(1),
  url: z.string().min(0),
  description: z.string().min(10),
});

export type TWorkExperienceSchema = z.infer<typeof WorkExperienceSchema>;

// VOLUNTEERING SCHEMA
export const VolunteerSchema = z.object({
  start_date: z.string({ required_error: "Issue date is required" }),
  end_date: z.string({ required_error: "Expiry date is required" }),
  role: z.string().min(1, "Name is required"),
  organization: z.string().min(1, "Organization is required"),
  organization_url: z.string().min(0),
  description: z.string().min(10, "Description is required"),
  location: z.string().min(1),
  // currently_volunteering: z.boolean().default(false),
});

export type TVolunteerSchema = z.infer<typeof VolunteerSchema>;

// CERTIFICATION SCHEMA
export const CertificationSchema = z.object({
  issued_date: z.string({ required_error: "Issue date is required" }),
  expiration_date: z.string({ required_error: "Expiry date is required" }),
  name: z.string().min(1, "Name is required"),
  organization: z.string().min(1, "Organization is required"),
  url: z.string().min(0),
  description: z.string().min(10, "Description is required"),
});

export type TCertificationSchema = z.infer<typeof CertificationSchema>;

// EDUCATION SCHEMA
export const EducationSchema = z.object({
  from_date: z.string({ required_error: "Issue date is required" }),
  to_date: z.string({ required_error: "Expiry date is required" }),
  degree: z.string().min(1, "Name is required"),
  school: z.string().min(1, "Organization is required"),
  location: z.string().min(1, "Organization is required"),
  url: z.string().min(0),
  description: z.string().min(10, "Description is required"),
});

export type TEducationSchema = z.infer<typeof EducationSchema>;

// SKILLS SCHEMA
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
