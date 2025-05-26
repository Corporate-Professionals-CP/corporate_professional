import { toast } from "react-toastify";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const errorMessage = (err: any, message?: string) => {
  console.log(err);
  if (message) {
    return toast(message, { type: "error" });
  }
  const msg = err?.response?.data.detail || "an errorOccured";
  toast(msg, { type: "error" });
};

export const successMessage = (message: string) => {
  toast(message, { type: "success" });
};
