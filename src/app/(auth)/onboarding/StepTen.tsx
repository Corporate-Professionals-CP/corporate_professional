import React from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { TOnboardSchema } from "./type";
import CPText from "@/components/CPText";

const StepTen = ({
  register,
  error = "",
  watch,
}: {
  register: UseFormRegister<TOnboardSchema>;
  error?: string;
  watch: UseFormWatch<TOnboardSchema>;
}) => {
  const selected = watch("interests");
  return (
    <>
      <CPText
        majorheading="What topics interest you the most?"
        minorheading="Engagement & Feed Curation"
      >
        <p className="text-[#64748B]">
          {" "}
          Choose as many topics as you’re interested in!
        </p>
      </CPText>
      <div className="flex gap-2 flex-wrap ">
        {[
          "Leadership & Management",
          "Career Growth & Development",
          "Networking & Relationship Building",
          "Entrepreneurship & Startups",
          "Finance & Investing",
          "Marketing & Branding",
          "Technology & Innovation",
          "Artificial Intelligence & Automation",
          "Diversity, Equity & Inclusion (DEI)",
          "Industry Trends & Insights",
          "Public Speaking & Communication",
          "Mentorship & Coaching",
          "Work-Life Balance & Productivity",
          "Sales & Business Strategy",
          "Corporate Culture & Team Building",
        ].map((data) => (
          <Pillet
            key={data}
            text={data}
            {...register("interests")}
            name="interests"
            value={data}
            checked={selected ? selected?.includes(data) : false}
          />
        ))}
      </div>
      {error && (
        <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">{error}</p>
      )}
    </>
  );
};

const Pillet = ({
  text,
  name = "test",
  value,
  checked = false,
  ...props
}: {
  text: string;
  name?: string;
  value?: string;
  checked?: boolean;
}) => {
  return (
    <label
      className={` ${
        checked
          ? " border-primary outline-2 outline-[#7074FF40] outline-offset-1 "
          : "border-transparent"
      } border py-2 px-4 rounded-full text-[#475569] text-sm bg-[#F8FAFC]`}
    >
      <input
        type="checkbox"
        name={name}
        className="hidden"
        value={value}
        {...props}
      />
      {text}
    </label>
  );
};
export default StepTen;
