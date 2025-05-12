import { z } from "zod";

export const OnboardSchema = z.object({
  fullName: z.string().min(5, "Fullname must contain at least 5 character(s)"),
  email: z.string().email(),
  phone: z.string().min(5, "phone must contain at least 5 character(s)"),
  profession_journey: z.string().min(10),
  password: z.string().min(5),
  role: z.string().min(1),
  industry: z.string().min(1, "Industry is required"),
  experience: z.string().min(1, "Experience is required"),
  profile: z.string().min(1, "Profile is required"),
  recruiter: z.string().min(1, "Field is required"),
  interests: z.array(z.string()),
});

export type TOnboardSchema = z.infer<typeof OnboardSchema>;
