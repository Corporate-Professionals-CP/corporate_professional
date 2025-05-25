import httprequest from "@/utils/httpRequest";

export const fetConnections = async (url: string) => {
  const response = await httprequest.get(url);
  return response.data;
};

export const fetchPendingNetwork = async (url: string) => {
  const response = await httprequest.get(url);
  return response.data;
};
