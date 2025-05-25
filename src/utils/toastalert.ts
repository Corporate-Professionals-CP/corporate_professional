import { toast } from "react-toastify";

export const errorMessage = (err: unknown, message?: string) => {
  console.log(err);
  if (message) {
    return toast(message, { type: "error" });
  }
  toast("an errorOccured", { type: "error" });
};

export const successMessage = (message: string) => {
  toast(message, { type: "success" });
};
