import { toast } from "react-toastify";

export const errorMessage = (err) => {
  toast("an errorOccured", { type: "error" });
};

export const successMessage = (message: string) => {
  toast(message, { type: "error" });
};
