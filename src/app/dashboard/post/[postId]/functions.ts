import { TPost } from "@/app/type";
import httprequest from "@/utils/httpRequest";

export async function getUserPost(url: string) {
  const response = await httprequest.get(url);
  return response.data as TPost;
}
