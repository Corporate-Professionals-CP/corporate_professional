import CPText from "@/components/CPText";
import React from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TOnboardSchema } from "./type";
import CPInput from "@/components/CPInput";
import CPpasswordStrength from "@/components/CPpasswordStrength";

const StepThree = ({
  register,
  error = "",
  watch,
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: string;
  watch: UseFormWatch<TOnboardSchema>;
}) => {
  const password = watch("password");

  return (
    <>
      <CPText
        majorheading="Set a password to keep your account secure."
        minorheading="Basic Information"
      />
      <div className="flex justify-between mb-[8]">
        <p className="text-sm">Create Password</p>
        <CPpasswordStrength password={password} />
      </div>
      <CPInput
        placeholder="Your password"
        type="password"
        {...register("password")}
        error={error}
      />
    </>
  );
};

export default StepThree;
