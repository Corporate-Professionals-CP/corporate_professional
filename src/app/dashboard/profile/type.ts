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
