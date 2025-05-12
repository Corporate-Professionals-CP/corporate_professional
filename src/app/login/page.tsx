"use client";
import CPbutton from "@/components/CPbutton";
import CPInput from "@/components/CPInput";
import CPsocialLoginButton from "@/components/CPsocialLoginButton";
import CPtermsAndPrivacy from "@/components/CPtermsAndPrivacy";
import bgimg from "@/assets/loginbg.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ForgotPasswordPasswordSchema,
  ForgotPasswordSchema,
  LoginSchema,
  TForgotPasswordPasswordSchema,
  TForgotPasswordSchema,
  TLoginSchema,
} from "./type";
import useSWRMutation from "swr/mutation";
import CPModal from "@/components/CPModal";
import CPsmallButton from "@/components/CPsmallButton";
import { Dispatch, SetStateAction, useState } from "react";
import httprequest from "@/utils/httpRequest";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { errorMessage, successMessage } from "@/utils/toastalert";

const loginUser = async (url: string, { arg }: { arg: TLoginSchema }) => {
  await httprequest.post("auth/login", {
    email: arg.email,
    password: arg.password,
  });
};

const createOptions = (router: AppRouterInstance) => ({
  onSuccess: () => {
    // set global context up
    router.push("/dashboard");
  },
});

export default function Login() {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const { trigger, isMutating, error } = useSWRMutation(
    "auth/login",
    loginUser,
    createOptions(router)
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = (data: TLoginSchema) => {
    trigger(data);
  };
  return (
    <main
      className="flex flex-col justify-between items-center h-screen pt-[50]  pb-[24]"
      style={{
        backgroundImage: `url(${bgimg.src})`,
        backgroundPosition: "center",
      }}
    >
      <Image
        src={"/logo.svg"}
        width={120}
        height={37}
        alt="log"
        className="self-start ml-[100]"
      />
      <div className="bg-white p-[18] rounded-2xl w-[445px] shadow-[0px_12px_16px_-4px_#1018280A]">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="mb-6 text-lg font-medium">Login to your account ✨</h3>
          <CPInput
            {...register("email")}
            error={errors.email?.message}
            type="email"
            placeholder="Email Address"
          />
          <CPInput
            {...register("password")}
            type="password"
            placeholder="Password"
            error={errors.password?.message}
          />
          <div className="flex justify-between mb-6 text-sm">
            <p className="text-[#E62E2E] ">{error && "Incorrect password"}</p>
            <button type="button" onClick={() => setModalOpen(true)}>
              Forgot password?
            </button>
          </div>
          <CPbutton type="submit" loading={isMutating} />
          <p className="text-center text-sm text-[#64748B]">
            Don’t have an account?{" "}
            <span className="text-[#020617]">Sign up</span>
          </p>
          <div className="flex items-center my-6">
            <span className="flex-1 h-px bg-[#E2E8F0]"></span>
            <span className="mx-3 text-sm">Or</span>
            <span className="flex-1 h-px bg-[#E2E8F0]"></span>
          </div>
        </form>

        <div>
          <CPsocialLoginButton text="Login with Google" />
          <CPsocialLoginButton text="Login with Apple" />
        </div>
      </div>
      <CPtermsAndPrivacy />
      {modalOpen && <FormPasswordModel setModalOpen={setModalOpen} />}
    </main>
  );
}

const forgetPassword = async (
  url: string,
  { arg }: { arg: TForgotPasswordSchema }
) => {
  await httprequest.post("auth/login", {
    email: arg.email,
  });
};

function FormPasswordModel({
  setModalOpen,
}: {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForgotPasswordSchema>({
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const { trigger, isMutating } = useSWRMutation(
    "auth/forgot-password",
    forgetPassword
  );
  const [step, setStep] = useState(1);
  const onSubmit = (data: TForgotPasswordSchema) => {
    try {
      trigger(data);
      setStep(2);
    } catch (err) {
      errorMessage(err);
    }
  };

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
            Open the link sent to{" "}
            <span className="text-[#020617]">danielanozie@icloud.com</span> in
            this browser.
          </p>
          <div className="flex justify-end gap-2 mt-12">
            <button className="p-3">Back</button>
            <CPsmallButton type="submit" text="Submit" />
          </div>
        </div>
      )}
      {step == 3 && <ForgotPasswordPassInput />}

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

const resetPassword = async (
  url: string,
  { arg }: { arg: TForgotPasswordPasswordSchema }
) => {
  await httprequest.post("auth/reset-password", {
    email: arg.password,
  });
};

function ForgotPasswordPassInput() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForgotPasswordPasswordSchema>({
    resolver: zodResolver(ForgotPasswordPasswordSchema),
  });
  const { trigger, isMutating } = useSWRMutation(
    "auth/reset-password",
    resetPassword
  );
  const onSubmit = (data: TForgotPasswordPasswordSchema) => {
    try {
      trigger(data);
      successMessage("password reset successful");
      router.push("/login");
    } catch (err) {
      errorMessage(err);
    }
  };
  return (
    <form className="p-[18]" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="mb-4 text-lg font-medium">Create new password 🛡️</h3>
      <p className="mb-6 text-[#64748B]">
        Your new password must be different from your previously used passwords
      </p>
      <div>
        <div className="flex justify-between items-center mb-2 text-[#020617] text-sm">
          <p>Create new password</p>
          <p className="text-xs">Good</p>
        </div>
        <CPInput
          error={errors.password?.message}
          {...register("password")}
          type="password"
          placeholder="New password"
        />
      </div>
      <div className="flex justify-end gap-2 mt-12">
        <button className="p-3">Back</button>
        <CPsmallButton type="submit" text="Done" loading={isMutating} />
      </div>
    </form>
  );
}
