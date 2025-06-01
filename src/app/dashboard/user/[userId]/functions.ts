import { TUser } from "@/app/type";
import httprequest from "@/utils/httpRequest";

export async function getUserProfile(url: string) {
  const response = await httprequest.get(url);
  return response.data as TUser;
}

export async function downloadCv(url: string) {
  const response = await httprequest.get(url);
  return response.data;
}
