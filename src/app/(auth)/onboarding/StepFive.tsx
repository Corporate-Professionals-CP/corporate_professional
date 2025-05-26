import React from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TOnboardSchema } from "./type";
import CPText from "@/components/CPText";
import CPCustomSelect from "@/components/CPCustomSelect";

const StepFive = ({
  register,
  error = "",
  watch,
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: string;
  watch: UseFormWatch<TOnboardSchema>;
}) => {
  const selected = watch("industry");
  return (
    <>
      <CPText
        majorheading="Which industry best describes your work?"
        minorheading="Professional Details"
      />

      {[
        { key: "Finance & Banking", value: "Finance" },
        { key: "Technology & IT", value: "Technology" },
        { key: "Healthcare & Life Sciences", value: "Healthcare" },
        { key: "Marketing & Media", value: "media" },
        { key: "Engineering & Manufacturing", value: "Manufacturing" },
        { key: "Other", value: "Other" },
      ].map((data) => (
        <CPCustomSelect
          key={data.key}
          text={data.key}
          {...register("industry")}
          value={data.value}
          checked={selected == data.value}
        />
      ))}
      {error && (
        <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">{error}</p>
      )}
    </>
  );
};

export default StepFive;
