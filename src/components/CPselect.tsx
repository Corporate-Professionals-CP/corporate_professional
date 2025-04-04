type CPInput = {
  className?: string;
};

function CPselect({ className = "" }: CPInput) {
  return (
    <select
      className={`block mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] ${className}`}
    >
      <option>Technology & IT</option>
      <option>Technology & IT</option>
      <option>Technology & IT</option>
      <option>Technology & IT</option>
    </select>
  );
}

export default CPselect;
