import { TNetwork, TSuggestedNetwork } from "@/app/type";
import httprequest from "@/utils/httpRequest";
import { errorMessage, successMessage } from "@/utils/toastalert";
import { mutate } from "swr";

export const fetchConnections = async (url: string) => {
  const response = await httprequest.get(url);
  return response.data.connections as TNetwork[];
};

export const fetchPendingNetwork = async (url: string) => {
  const response = await httprequest.get(url);
  return response.data as TNetwork[];
};

export const fetchSentPendingNetwork = async (url: string) => {
  const response = await httprequest.get(url);
  return response.data as TNetwork[];
};

export const fetSuggestedConnection = async (url: string) => {
  const response = await httprequest.get(url);
  return response.data as {
    total_connections: number;
    pending_requests: number;
    suggestions: TSuggestedNetwork[];
  };
};

export const nudgeConnection = async (url: string) => {
  try {
    await httprequest.post(url);
    successMessage("Connection Request Withdrawn");
  } catch (err) {
    errorMessage(err, "unable to withdraw connection");
  }
};
export const withdrawConnection = async (
  url: string,
  { arg }: { arg: { connect_id: string } }
) => {
  try {
    await httprequest.delete(url);
    mutate(
      "/network/sent-pending",
      (current: TNetwork[] = []) =>
        current.filter((item) => item.id != arg.connect_id),
      true
    );
    successMessage("Connection Request Withdrawn");
  } catch (err) {
    errorMessage(err, "unable to withdraw connection");
  }
};
export const acceptConnection = async (
  url: string,
  { arg }: { arg: { connect_id: string } }
) => {
  try {
    await httprequest.put(url, {
      status: "accepted", //rejected
    });
    // remove from suggetd
    mutate(
      "/network/pending",
      (current: TNetwork[] = []) =>
        current.filter((item) => item.id != arg.connect_id),
      true
    );
    successMessage("Connection Accepted");
  } catch (err) {
    errorMessage(err, "unable to make accept connection");
  }
};
export const ignoreConnection = async (
  url: string,
  { arg }: { arg: { connect_id: string } }
) => {
  try {
    await httprequest.put(url, {
      status: "rejected",
    });
    // remove from suggetd
    mutate(
      "/network/pending",
      (current: TNetwork[] = []) =>
        current.filter((item) => item.id != arg.connect_id),
      true
    );
    successMessage("Connection Reject");
  } catch (err) {
    errorMessage(err, "unable to make reject connection");
  }
};

export const makeConnection = async (
  url: string,
  { arg }: { arg: { user_id: string } }
) => {
  try {
    await httprequest.post(url, {
      receiver_id: arg.user_id,
    });

    mutate<{ suggestions: TSuggestedNetwork[] }>(
      "/network/suggestions",
      (current) => ({
        suggestions:
          current?.suggestions.filter((item) => item.id !== arg.user_id) ?? [],
      }),
      true
    );

    successMessage("Connection made here");
  } catch (err) {
    errorMessage(err, "unable to make conneciton");
  }
};
