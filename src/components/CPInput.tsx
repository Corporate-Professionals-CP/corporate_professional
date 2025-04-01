type CPInput = {
  type?: string;
  placeholder?: string;
  className?: string;
};
function CPInput({
  type = "text",
  placeholder = "Email Address",
  className = "",
}: CPInput) {
  if (type == "textarea") {
    return (
      <textarea
        placeholder={placeholder}
        className={`block mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] ${className}`}
      />
    );
  }
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`block mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] ${className}`}
    />
  );
}

export default CPInput;
