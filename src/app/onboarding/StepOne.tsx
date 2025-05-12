import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TOnboardSchema } from "./type";
import CPText from "@/components/CPText";
import CPInput from "@/components/CPInput";

const StepOne = ({
  register,
  error,
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: FieldErrors<TOnboardSchema>;
}) => {
  return (
    <>
      <CPText
        majorheading="Let’s start with your basic informations"
        minorheading="Basic Information"
      />
      <CPInput
        {...register("fullName")}
        placeholder="Full name"
        type="text"
        error={error?.fullName?.message}
      />
      <CPInput
        {...register("email")}
        placeholder="Email"
        type="text"
        error={error?.email?.message}
      />
      <CPInput
        {...register("phone")}
        placeholder="Phone Number"
        type="text"
        error={error?.phone?.message}
      />
    </>
  );
};

export default StepOne;
