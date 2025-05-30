import httprequest from "@/utils/httpRequest";
import {
  TForgotPasswordPasswordSchema,
  TForgotPasswordSchema,
  TLoginSchema,
} from "./type";
import { storeData } from "@/utils/storage";

export const loginUser = async (
  url: string,
  { arg }: { arg: TLoginSchema }
) => {
  const urlencoded = new URLSearchParams();
  urlencoded.append("username", arg.email);
  urlencoded.append("password", arg.password);
  const response = await httprequest.post("auth/login", urlencoded, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  httprequest.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${response.data.access_token}`;
  storeData("access_token", response.data.access_token);
  storeData("refresh_token", response.data.refresh_token);
  // return response.data.user;
  return response.data;
};

export const forgetPassword = async (
  url: string,
  { arg }: { arg: TForgotPasswordSchema }
) => {
  await httprequest.post(url, {
    email: arg.email,
  });
};

export const resetPassword = async (
  url: string,
  { arg }: { arg: TForgotPasswordPasswordSchema & { email: string } }
) => {
  await httprequest.post(url, {
    otp: arg.otp,
    new_password: arg.password,
    email: arg.email,
  });
};
