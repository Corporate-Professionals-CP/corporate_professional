import CPText from "@/components/CPText";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { TOnboardSchema } from "./type";
import CPInput from "@/components/CPInput";

const StepTwo = ({
  register,
  error = "",
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: string;
}) => {
  return (
    <>
      <CPText
        majorheading="Tell us a little about your professional journey."
        minorheading="Basic Information"
      />
      <CPInput
        placeholder="Marketing professional passionate about brand growth."
        className="h-[169]"
        type="textarea"
        error={error}
        {...register("profession_journey")}
      />
    </>
  );
};

export default StepTwo;
