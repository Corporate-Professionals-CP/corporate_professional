import CPtoggleSwitch from "./CPtoggleSwitch";

type CPcheckType = {
  text?: string;
  className?: string;
  watchvalue?: string;
  value?: string;
};

function CPSwitchbox({
  text = "",
  className = "",
  watchvalue,
  value,
  ...props
}: CPcheckType) {
  const selected = watchvalue == value;
  return (
    <div
      className={`block mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] ${className} flex items-center justify-between`}
    >
      <p className="text-[#64748B]">{text}</p>
      <CPtoggleSwitch {...props} selected={selected} value={value} />
    </div>
  );
}

export default CPSwitchbox;
