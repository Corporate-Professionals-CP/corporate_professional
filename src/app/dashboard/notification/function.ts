import httprequest from "@/utils/httpRequest";

export const fetchNotification = (url: string) => {
  return httprequest
    .get(url)
    .then((res) => res.data)
    .catch(() => []);
};
