import httprequest from "@/utils/httpRequest";
import { errorMessage } from "@/utils/toastalert";
import { TOnboardSchema } from "./type";

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
    topics: arg.interests,
  };
  console.log(data);
  return await httprequest.post("/auth/signup", data);
  // [[ALSO UPLOAD THE RESUMES UPLOADED TOO]]
  try {
    const formdata = new FormData();
    formdata.append("file", arg.cvfile);
    await httprequest.post("/api/profiles/user_id/cv", formdata);
  } catch (err) {
    errorMessage(err);
  }
};
