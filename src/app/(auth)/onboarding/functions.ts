import httprequest from "@/utils/httpRequest";

import { TOnboardSchema } from "./type";
// import { storeData } from "@/utils/storage";

export const signupUser = async (
  url: string,
  { arg }: { arg: TOnboardSchema }
) => {
  const data = {
    full_name: arg.fullName,
    email: arg.email,
    phone: arg.phone,
    job_title: arg.role,
    industry: arg.industry,
    years_of_experience: arg.experience,
    recruiter_tag: arg.recruiter == "true",
    password: arg.password,
    password_confirmation: arg.password,
    visibility: arg.profile,
    bio: arg.profession_journey,
    skills: arg.skills,
    topics: arg.interests,
  };
  console.log(data);
  const response = await httprequest.post("/auth/signup", data);
  // [[ALSO UPLOAD THE RESUMES UPLOADED TOO]]
  try {
    if (arg.cvfile) {
      const formdata = new FormData();
      formdata.append("file", arg.cvfile);
      httprequest.post(`/api/profiles/${response.data.user_id}/cv`, formdata, {
        headers: { Authorization: `Bearer ${response.data.access_token}` },
      });
    }
  } catch (err) {
    console.log(err);
    // errorMessage(err);
  }
  return response.data;
};

export const verifyEmail = async (
  url: string,
  { arg }: { arg: { otp: string; email: string; token: string } }
) => {
  const response = await httprequest.post(url, {
    otp: arg.otp,
    email: arg.email,
    token: arg.email,
  });
  // storeData("access_token", response.data.access_token);
  // storeData("refresh_token", response.data.refresh_token);
  // return response.data.user;
  return response.data;
};

export const resendVerifyEmail = async (
  url: string,
  { arg }: { arg: { email: string; token: string } }
) => {
  const response = await httprequest.post(url, {
    email: arg.email,
    token: arg.email,
  });
  return response.data;
};
