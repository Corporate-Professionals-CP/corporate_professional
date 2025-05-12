import CPCustomSelect from "@/components/CPCustomSelect";
import CPText from "@/components/CPText";
import React from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TOnboardSchema } from "./type";

const StepSix = ({
  register,
  error = "",
  watch,
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: string;
  watch: UseFormWatch<TOnboardSchema>;
}) => {
  const selected = watch("experience");
  return (
    <>
      <CPText
        majorheading="How experienced are you?"
        minorheading="Professional Details"
      />

      {[
        { key: "⏳ 0-2", value: "0-2 years" },
        { key: "🏆 3-5", value: "3-5 years" },
        { key: "🚀 6-10", value: "6-10 years" },
        { key: "👑 10+ ", value: "10+ years" },
      ].map((data) => (
        <CPCustomSelect
          key={data.key}
          text={data.key}
          value={data.value}
          {...register("experience")}
          checked={selected == data.value}
        />
      ))}
      {error && (
        <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">{error}</p>
      )}
    </>
  );
};
export default StepSix;
