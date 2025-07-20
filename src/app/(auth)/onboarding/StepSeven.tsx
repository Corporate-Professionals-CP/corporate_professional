import React from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TOnboardSchema } from "./type";
import CPText from "@/components/CPText";
import CPCustomSelect from "@/components/CPCustomSelect";

const StepSeven = ({
  register,
  error = "",
  watch,
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: string;
  watch: UseFormWatch<TOnboardSchema>;
}) => {
  const selected = watch("profile");
  return (
    <>
      <CPText
        majorheading="Profile preferences"
        minorheading="Professional Details"
      />

      {[
        { key: "Public 🌍", value: "Public" },
        { key: "Private 🔒", value: "Private" },
      ].map((data) => (
        <CPCustomSelect
          key={data.key}
          text={data.key}
          value={data.value}
          {...register("profile")}
          checked={selected == data.value}
        />
      ))}
      {error && (
        <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">{error}</p>
      )}
    </>
  );
};

export default StepSeven;
