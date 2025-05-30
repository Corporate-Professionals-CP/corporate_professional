"use client";
import CPbutton from "@/components/CPbutton";
import CPInput from "@/components/CPInput";
import CPsocialLoginButton from "@/components/CPsocialLoginButton";
import CPtermsAndPrivacy from "@/components/CPtermsAndPrivacy";
import bgimg from "@/assets/loginbg.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, TLoginSchema } from "./type";
import useSWRMutation from "swr/mutation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { errorMessage, successMessage } from "@/utils/toastalert";
import useUser from "@/statestore/useUser";
import { loginUser } from "./functions";
import Link from "next/link";
import VerifyEmailModal from "../VerifyEmailModal";
import GoogleIcon from "@/imagecomponents/GoogleIcon";
import AppleIcon from "@/imagecomponents/AppleIcon";
import FormPasswordModel from "./FormPasswordModel";

export default function Login() {
  const [modalOpen, setModalOpen] = useState(false);

  const [emailmodal, setEmailModal] = useState(false);

  const setUser = useUser((state) => state.setUser);
  const router = useRouter();
  const { trigger, isMutating } = useSWRMutation("auth/login", loginUser);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = async (data: TLoginSchema) => {
    try {
      const response = await trigger(data);
      setUser(response);
      successMessage("Login Successful");
      router.push("/dashboard");
      /* eslint-disable @typescript-eslint/no-explicit-any */
    } catch (err: any) {
      console.log(err);
      if (
        err?.response?.data.detail &&
        err?.response?.data.detail?.includes("verif")
      ) {
        setEmailModal(true);
      }
      // Account not verified. Please check your email
      // push to Verify, or Verify modal
      errorMessage(err);
    }
  };
  return (
    <main
      className="flex flex-col justify-between items-center h-screen pt-[50]  pb-6 px-6"
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
      <div className="bg-white p-[18] rounded-2xl max-w-[445px] w-full careershadow">
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
          <div className="flex justify-end mb-6 text-sm">
            {/* <p className="text-[#E62E2E] ">{error && "Incorrect password"}</p> */}
            <button type="button" onClick={() => setModalOpen(true)}>
              Forgot password?
            </button>
          </div>
          <CPbutton type="submit" loading={isMutating} />
          <p className="text-center text-sm text-[#64748B]">
            Don’t have an account?{" "}
            <Link href={"/onboarding"} className="text-slate">
              Sign up
            </Link>
          </p>
          <div className="flex items-center my-6">
            <span className="flex-1 h-px bg-[#E2E8F0]"></span>
            <span className="mx-3 text-sm">Or</span>
            <span className="flex-1 h-px bg-[#E2E8F0]"></span>
          </div>
        </form>

        <div>
          <CPsocialLoginButton Icon={<GoogleIcon />} text="Login with Google" />
          <CPsocialLoginButton Icon={<AppleIcon />} text="Login with Apple" />
        </div>
      </div>
      <CPtermsAndPrivacy />
      {emailmodal && <VerifyEmailModal email={watch("email")} token={""} />}

      {modalOpen && <FormPasswordModel setModalOpen={setModalOpen} />}
    </main>
  );
}
