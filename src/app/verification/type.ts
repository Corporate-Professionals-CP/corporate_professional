import { z } from "zod";

export const VerificationSchema = z.object({
  verificationcode: z.string().min(5),
});

export type TVerificationSchema = z.infer<typeof VerificationSchema>;

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});
