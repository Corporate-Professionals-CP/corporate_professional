import React, { Dispatch, SetStateAction, useState } from "react";
import { ForgotPasswordSchema, TForgotPasswordSchema } from "./type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";
import { forgetPassword } from "./functions";
import { errorMessage } from "@/utils/toastalert";
import { CPInput, CPModal, CPsmallButton } from "@/components";
import ForgotPasswordPassInput from "./ForgotPasswordPassInput";

function FormPasswordModel({
  setModalOpen,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TForgotPasswordSchema>({
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const { trigger, isMutating } = useSWRMutation(
    "/auth/request-password-reset",
    forgetPassword
  );
  const [step, setStep] = useState(1);
  const onSubmit = async (data: TForgotPasswordSchema) => {
    try {
      await trigger(data);
      setStep(2);
    } catch (err) {
      errorMessage(err);
    }
  };
  const email = watch("email");
  return (
    <CPModal width={445}>
      {step == 1 && (
        <form className="p-[18]" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="mb-4 text-lg font-medium">Forgot password? 😢</h3>
          <p className="mb-6 text-[#64748B]">
            Enter your email and we’ll send you reset instructions
          </p>
          <CPInput
            error={errors.email?.message}
            {...register("email")}
            type="email"
            placeholder="Email address"
          />
          <div className="flex justify-end gap-2 mt-12">
            <button className="p-3" onClick={() => setModalOpen(false)}>
              Back
            </button>
            <CPsmallButton type="submit" text="Submit" loading={isMutating} />
          </div>
        </form>
      )}
      {step == 2 && (
        <div className="p-[18]">
          <h3 className="mb-4 text-lg font-medium">Check your inbox! 🍄</h3>
          <p className=" text-[#64748B] mb-24">
            Open the link sent to <span className="text-slate">{email}</span> in
            this browser.
          </p>
          <div className="flex justify-end gap-2 mt-12">
            <button className="p-3">Back</button>
            <CPsmallButton
              type="submit"
              text="Done"
              onClick={() => setStep(3)}
            />
          </div>
        </div>
      )}
      {step == 3 && (
        <ForgotPasswordPassInput setStep={setStep} email={watch("email")} />
      )}

      {step == 4 && (
        <div className="p-[18]">
          <h3 className="mb-4 text-lg font-medium">Successful ✨</h3>
          <p className=" text-[#64748B] mb-12">
            We’ve successfully reset your password!
          </p>
          <div className="flex justify-end gap-2 mt-12">
            <button className="p-3">Back</button>
            <CPsmallButton type="submit" text="Login" />
          </div>
        </div>
      )}
    </CPModal>
  );
}

export default FormPasswordModel;
