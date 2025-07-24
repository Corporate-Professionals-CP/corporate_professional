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
  linkedin: z.string().min(1),
});
export type TProfileSchema = z.infer<typeof ProfileSchema>;

// CONTACT SCHEMA
export const ContactSchema = z.object({
  type: z.string({ required_error: "Type is required" }),
  url: z.string().optional(),
  username: z.string().optional(),
  platform_name: z.string().min(1, "Platform is required"),
});

export type TContactSchema = z.infer<typeof ContactSchema>;

// WORK-EXPERIENCE SCHEMA
export const WorkExperienceSchema = z
  .object({
    from: z.string().min(1, { message: "Start date is required" }),
    to: z.string().min(1, { message: "End date is required" }),
    title: z.string().min(1, { message: "Title is required" }),
    company: z.string().min(1, { message: "Company is required" }),
    location: z.string().min(1, { message: "Location is required" }),
    url: z.string().optional(),
    description: z
      .string()
      .min(10, { message: "Description must be at least 10 characters" }),
  })
  .refine(
    (data) => {
      const fromDate = new Date(data.from);
      const toDate = new Date(data.to);
      return (
        !isNaN(fromDate.getTime()) &&
        !isNaN(toDate.getTime()) &&
        toDate >= fromDate
      );
    },
    {
      message: "End date cannot be before start date",
      path: ["to"], // This will associate the error with the `to` field
    }
  );

export type TWorkExperienceSchema = z.infer<typeof WorkExperienceSchema>;

// VOLUNTEERING SCHEMA
export const VolunteerSchema = z
  .object({
    start_date: z.string().min(1, { message: "Issue date is required" }),
    end_date: z.string().min(1, { message: "Expiry date is required" }),
    role: z.string().min(1, "Name is required"),
    organization: z.string().min(1, "Organization is required"),
    organization_url: z.string().optional(),
    description: z
      .string()
      .min(10, { message: "Description must be at least 10 characters" }),
    location: z.string().min(1, { message: "Location is required" }),
    // currently_volunteering: z.boolean().default(false),
  })
  .refine(
    (data) => {
      const fromDate = new Date(data.start_date);
      const toDate = new Date(data.end_date);
      return (
        !isNaN(fromDate.getTime()) &&
        !isNaN(toDate.getTime()) &&
        toDate >= fromDate
      );
    },
    {
      message: "End date cannot be before start date",
      path: ["end_date"],
    }
  );

export type TVolunteerSchema = z.infer<typeof VolunteerSchema>;

// CERTIFICATION SCHEMA
export const CertificationSchema = z
  .object({
    issued_date: z.string().min(1, { message: "Issue date is required" }),
    expiration_date: z.string().min(1, { message: "Expiry date is required" }),
    name: z.string().min(1, "Name is required"),
    organization: z.string().min(1, "Organization is required"),
    url: z.string().optional(),
    description: z
      .string()
      .min(10, { message: "Description must be at least 10 characters" }),
  })
  .refine(
    (data) => {
      const fromDate = new Date(data.issued_date);
      const toDate = new Date(data.expiration_date);
      return (
        !isNaN(fromDate.getTime()) &&
        !isNaN(toDate.getTime()) &&
        toDate >= fromDate
      );
    },
    {
      message: "End date cannot be before start date",
      path: ["expiration_date"],
    }
  );

export type TCertificationSchema = z.infer<typeof CertificationSchema>;

// EDUCATION SCHEMA
export const EducationSchema = z
  .object({
    from_date: z.string({ required_error: "Issue date is required" }),
    to_date: z.string({ required_error: "Expiry date is required" }),
    degree: z.string().min(1, "Name is required"),
    school: z.string().min(1, "Organization is required"),
    location: z.string().min(1, "Organization is required"),
    url: z.string().optional(),
    description: z
      .string()
      .min(10, { message: "Description must be at least 10 characters" }),
  })
  .refine(
    (data) => {
      const fromDate = new Date(data.from_date);
      const toDate = new Date(data.to_date);
      return (
        !isNaN(fromDate.getTime()) &&
        !isNaN(toDate.getTime()) &&
        toDate >= fromDate
      );
    },
    {
      message: "End date cannot be before start date",
      path: ["to_date"],
    }
  );

export type TEducationSchema = z.infer<typeof EducationSchema>;

// SKILLS SCHEMA
export const SkillsSchema = z.object({
  skill: z
    .array(z.string().min(2, "Too short"))
    .min(1, "Select at least one skill")
    .max(15, "You can select up to 15 skills"),
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
