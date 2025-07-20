import CPInput from "@/components/CPInput";
import CPText from "@/components/CPText";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { TOnboardSchema } from "./type";

const StepFour = ({
  register,
  error = "",
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: string;
}) => {
  return (
    <>
      <CPText
        majorheading="What do you do?"
        minorheading="Professional Details"
      />

      <CPInput
        placeholder="Marketing , Software Engineer"
        type="text"
        {...register("role")}
        error={error}
      />
    </>
  );
};

export default StepFour;
