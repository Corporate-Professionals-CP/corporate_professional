import { toast } from "react-toastify";

export const errorMessage = (err: unknown) => {
  console.log(err);
  toast("an errorOccured", { type: "error" });
};

export const successMessage = (message: string) => {
  toast(message, { type: "success" });
};
