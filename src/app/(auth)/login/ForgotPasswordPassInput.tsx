import React, { Dispatch, SetStateAction } from "react";
import {
  ForgotPasswordPasswordSchema,
  TForgotPasswordPasswordSchema,
} from "./type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import { forgetPassword, resetPassword } from "./functions";
import { errorMessage } from "@/utils/toastalert";
import { CPInput, CPsmallButton } from "@/components";
import CPpasswordStrength from "@/components/CPpasswordStrength";

function ForgotPasswordPassInput({
  setStep,
  email,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  email: string;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TForgotPasswordPasswordSchema>({
    resolver: zodResolver(ForgotPasswordPasswordSchema),
  });
  const { trigger, isMutating } = useSWRMutation(
    "/auth/reset-password",
    resetPassword
  );
  const { trigger: triggerReset, isMutating: loadingResend } = useSWRMutation(
    "/auth/request-password-reset",
    forgetPassword
  );

  const onSubmit = async (data: TForgotPasswordPasswordSchema) => {
    try {
      await trigger({ ...data, email });
      setStep(4);
    } catch (err) {
      errorMessage(err);
    }
  };
  const onResendOTP = () => {
    triggerReset({ email });
  };
  return (
    <form className="p-[18]" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="mb-4 text-lg font-medium">Create new password 🛡️</h3>
      <p className="mb-6 text-[#64748B]">
        Your new password must be different from your previously used passwords
      </p>
      <div>
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2 text-slate text-sm">
            <p>Otp from your email</p>
          </div>
          <CPInput
            {...register("otp")}
            error={errors.otp?.message}
            placeholder="OTP"
          />
        </div>
        <div className="flex justify-between items-center mb-2 text-slate text-sm">
          <p>Create new password</p>
          <CPpasswordStrength password={watch("password")} />
        </div>
        <CPInput
          error={errors.password?.message}
          {...register("password")}
          type="password"
          placeholder="New password"
        />
      </div>
      <div className="flex justify-end gap-2 mt-12">
        <button
          className="p-3"
          type="button"
          onClick={onResendOTP}
          disabled={loadingResend}
        >
          {loadingResend ? "loading" : "Resend OTP"}
        </button>
        <CPsmallButton type="submit" text="Done" loading={isMutating} />
      </div>
    </form>
  );
}

export default ForgotPasswordPassInput;
