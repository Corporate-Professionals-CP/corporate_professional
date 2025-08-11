"use client";
import {
  fetchNotification,
  readNotification,
} from "@/app/dashboard/notification/function";
import useNotificationState from "@/statestore/useNotificationState";
import { useEffect } from "react";
import useSWRMutation from "swr/mutation";

function useNotification() {
  const { unread_count, notification, setNotification } =
    useNotificationState();
  const { isMutating, trigger } = useSWRMutation(
    "/notifications/",
    fetchNotification
  );
  const { trigger: markNotification } = useSWRMutation(
    "/notifications/",
    readNotification
  );

  useEffect(() => {
    triggerFetchNotification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const triggerFetchNotification = async () => {
    const data = await trigger();
    setNotification(data);
  };

  return {
    notification,
    isLoading: isMutating,
    triggerFetchNotification,
    notificationUnreadCount: unread_count,
    markNotification,
  };
}

export default useNotification;
