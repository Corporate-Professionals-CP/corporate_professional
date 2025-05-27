"use client";
import { CPInput, CPModal, CPsmallButton } from "@/components";
import { errorMessage, successMessage } from "@/utils/toastalert";
import { TVerifyEmail, VerifyEmail } from "./onboarding/type";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { resendVerifyEmail, verifyEmail } from "./onboarding/functions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SuccessModal from "./SuccessModal";
import useUser from "@/statestore/useUser";

const VerifyEmailModal = ({
  email,
  token,
}: {
  email: string;
  token: string;
}) => {
  const [success, setSuccess] = useState(false);
  const setUser = useUser((state) => state.setUser);
  // do everything here
  const { trigger, isMutating } = useSWRMutation(
    "/auth/verify-email",
    verifyEmail
  );
  const { trigger: triggerReset, isMutating: loadingResend } = useSWRMutation(
    "/auth/resend-verification",
    resendVerifyEmail
  );
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TVerifyEmail>({ resolver: zodResolver(VerifyEmail) });

  const onClick = async (data: TVerifyEmail) => {
    try {
      const response = await trigger({ ...data, email, token });
      setUser(response);
      setSuccess(true);
    } catch (err) {
      errorMessage(err);
    }
  };
  const onClickResend = async () => {
    try {
      await triggerReset({ email, token });
      successMessage(`otp sent to ${email}`);
    } catch (err) {
      errorMessage(err);
    }
  };

  return (
    <CPModal width={445}>
      {success ? (
        <SuccessModal />
      ) : (
        <form className="p-[18]" onSubmit={handleSubmit(onClick)}>
          <h3 className="mb-4 text-lg font-medium text-[#050505]">
            Verify your email ✨
          </h3>
          <p className="mb-6 text-[#64748B]">
            You can complete your profile later to unlock more opportunities.
          </p>
          <CPInput
            {...register("otp")}
            error={errors.otp?.message}
            placeholder="OTP"
          />
          <div className="flex justify-end gap-2 mt-12">
            <button
              className="p-3"
              type="button"
              onClick={onClickResend}
              disabled={loadingResend}
            >
              {loadingResend ? "loading" : "Resend OTP"}
            </button>
            <CPsmallButton text="Submit" loading={isMutating} />
          </div>
        </form>
      )}
    </CPModal>
  );
};

export default VerifyEmailModal;
