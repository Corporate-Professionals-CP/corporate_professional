import { z } from "zod";

export const OnboardSchema = z.object({
  fullName: z.string().min(5, "Fullname must contain at least 5 character(s)"),
  email: z.string().email(),
  phone: z.string().min(5, "Phone must contain at least 5 character(s)"),
  profession_journey: z
    .string()
    .min(10, "Profession journey must contain at least 5 character(s)"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/\d/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least one special character",
    }),
  role: z.string().min(1, "Role is required"),
  industry: z.string().min(1, "Industry is required"),
  experience: z.string().min(1, "Experience is required"),
  profile: z.string().min(1, "Profile is required"),
  recruiter: z.string().min(1, "Field is required"),
  interests: z.array(z.string()),
  skills: z.array(z.string()),
  cvfile: z.custom<File>((val) => val instanceof File && val.size > 0, {
    message: "A valid file is required",
  }),
});

export type TOnboardSchema = z.infer<typeof OnboardSchema>;

export const VerifyEmail = z.object({
  otp: z.string().min(2, "OTP is required"),
});

export type TVerifyEmail = z.infer<typeof VerifyEmail>;
