import httprequest from "@/utils/httpRequest";
import { TSearchParams } from "./type";
import { TPost, TUserProfile } from "@/app/type";

export const searchDirectory = async (
  url: string,
  { arg }: { arg: TSearchParams }
) => {
  const response = await httprequest.post(url, {
    q: arg.search,
    industry: arg.industry,
    experience: arg.experince,
    location: {
      country: arg.location,
      state: arg.location,
    },
    skill: arg.skill,
    //   recruiter_only: true,
    //   job_title: UX Designer
  });
  return response.data as (TPost & TUserProfile)[];
};
