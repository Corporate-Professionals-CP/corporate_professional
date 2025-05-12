import React from "react";

const CPCustomSelect = ({
  text,
  checked = false,
  icon,
  value = "",
  name = "test",
  ...props
}: {
  text: string;
  checked?: boolean;
  icon?: typeof Image;
  value?: string;
  name?: string;
}) => {
  return (
    <label
      className={` ${
        checked
          ? " border-primary outline-2 outline-[#7074FF40] outline-offset-1 "
          : "border-transparent"
      } border  flex justify-between  mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] text-sm text-[#334155]`}
    >
      <input
        type="radio"
        name={name}
        className="hidden"
        {...props}
        value={value}
      />
      {text}

      {icon && <div>🏆</div>}
      {/* <div>🏆</div> */}
    </label>
  );
};

export default CPCustomSelect;
