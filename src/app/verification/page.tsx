"use client";
import CPbutton from "@/components/CPbutton";
import CPInput from "@/components/CPInput";
import CPtermsAndPrivacy from "@/components/CPtermsAndPrivacy";
import bgimg from "@/assets/loginbg.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TVerificationSchema, VerificationSchema } from "./type";
import useSWRMutation from "swr/mutation";
import httprequest from "@/utils/httpRequest";

const verifyUser = async (
  url: string,
  { arg }: { arg: TVerificationSchema }
) => {
  await httprequest.post("auth/verify-email", { token: arg.verificationcode });
};
const options = {
  onError: () => {},
  onSuccess: () => {},
};

export default function Verification() {
  const { trigger, isMutating, error } = useSWRMutation(
    "login",
    verifyUser,
    options
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TVerificationSchema>({
    resolver: zodResolver(VerificationSchema),
  });
  const onSubmit = (data: TVerificationSchema) => {
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
          <h3 className="mb-6 text-lg font-medium">Verify your account ✨</h3>
          <CPInput
            {...register("verificationcode")}
            error={errors.verificationcode?.message}
            placeholder="Verification Code"
          />
          <div className="flex justify-between mb-6 text-sm">
            <p className="text-[#E62E2E] ">{error && "Incorrect password"}</p>
            <button type="button" onClick={() => {}}>
              Resend code
            </button>
          </div>
          <CPbutton type="submit" loading={isMutating} />
          <p className="text-center text-sm text-[#64748B]">
            Don’t have an account? <span className="text-slate">Sign up</span>
          </p>
        </form>
      </div>
      <CPtermsAndPrivacy />
    </main>
  );
}
