type CPcheckType = {
  text?: string;
  className?: string;
};

function CPcheckbox({ text = "", className = "" }: CPcheckType) {
  return (
    <div
      className={`block mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] ${className} flex items-center justify-between`}
    >
      <p className="text-[#64748B]">{text}</p>
      <input type="checkbox" />
    </div>
  );
}

export default CPcheckbox;
