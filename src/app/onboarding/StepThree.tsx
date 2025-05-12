import CPText from "@/components/CPText";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { TOnboardSchema } from "./type";
import CPInput from "@/components/CPInput";

const StepThree = ({
  register,
  error = "",
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: string;
}) => {
  return (
    <>
      <CPText
        majorheading="Set a password to keep your account secure."
        minorheading="Basic Information"
      />
      <div className="flex justify-between mb-[8]">
        <p className="text-[14]">Create Password</p>
        <p>Good</p>
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
