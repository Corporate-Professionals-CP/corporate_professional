import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type TForgotPasswordSchema = z.infer<typeof ForgotPasswordSchema>;

export const ForgotPasswordPasswordSchema = z.object({
  password: z.string().min(5),
  otp: z.string().min(1),
});

export type TForgotPasswordPasswordSchema = z.infer<
  typeof ForgotPasswordPasswordSchema
>;
