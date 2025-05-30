import { TUser } from "@/app/type";
import httprequest from "@/utils/httpRequest";

export const getUserProfile = async (url: string) => {
  const response = await httprequest.get(url);
  return response.data as TUser;
};
