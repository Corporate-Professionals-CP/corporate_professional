import CPText from "@/components/CPText";
import React from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TOnboardSchema } from "./type";
import CPCustomSelect from "@/components/CPCustomSelect";

const StepEight = ({
  register,
  error = "",
  watch,
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: string;
  watch: UseFormWatch<TOnboardSchema>;
}) => {
  const selected = watch("recruiter");
  return (
    <>
      <CPText
        majorheading="Are you a recruiter?"
        minorheading="Profile Preferences"
      />

      {[
        { key: "Yes, I hire talent", value: "true" },
        { key: "No, I’m here to connect", value: "false" },
      ].map((data) => (
        <CPCustomSelect
          key={data.key}
          text={data.key}
          icon={undefined}
          value={data.value}
          {...register("recruiter")}
          checked={selected == data.value}
        />
      ))}
      {error && (
        <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">{error}</p>
      )}
    </>
  );
};

export default StepEight;
