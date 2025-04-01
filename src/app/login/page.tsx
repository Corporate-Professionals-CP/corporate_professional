import CPbutton from "@/components/CPbutton";
import CPInput from "@/components/CPInput";
import CPsocialLoginButton from "@/components/CPsocialLoginButton";
import CPtermsAndPrivacy from "@/components/CPtermsAndPrivacy";
import Image from "next/image";

export default function Login() {
  return (
    <main
      className="flex flex-col justify-between items-center h-screen pt-[50] pl-[100] pb-[24]"
      style={{ backgroundColor: "rgba(112, 116, 255, .1)" }}
    >
      <Image
        src={"/logo.svg"}
        width={120}
        height={37}
        alt="log"
        className="self-start"
      />
      <div className="bg-white p-[18] rounded-2xl w-[445px] shadow-[0px_12px_16px_-4px_#1018280A]">
        <div className="">
          <h3 className="mb-6 text-lg font-medium">Login to your account ✨</h3>
          <CPInput type="email" placeholder="Email Address" />
          <CPInput type="password" placeholder="Password" />
          <div className="flex justify-between mb-6 text-sm">
            <p className="text-[#E62E2E] ">Incorrect password</p>
            <p>Forgot password?</p>
          </div>
          <CPbutton />
          <p className="text-center text-sm text-[#64748B]">
            Don’t have an account?{" "}
            <span className="text-[#020617]">Sign up</span>
          </p>
          <div className="flex items-center my-6">
            <span className="flex-1 h-px bg-[#E2E8F0]"></span>
            <span className="mx-3 text-sm">Or</span>
            <span className="flex-1 h-px bg-[#E2E8F0]"></span>
          </div>
        </div>

        <div>
          <CPsocialLoginButton text="Login with Google" />
          <CPsocialLoginButton text="Login with Apple" />
        </div>
      </div>
      <CPtermsAndPrivacy />
    </main>
  );
}
