type CPInputType = {
  type?: "textarea" | "text" | "password" | "email" | "date";
  placeholder?: string;
  className?: string;
  error?: string;
};
function CPInput({
  type = "text",
  placeholder = "Email Address",
  className = "",
  error = "",
  ...props
}: CPInputType) {
  if (type == "textarea") {
    return (
      <>
        <textarea
          placeholder={placeholder}
          className={`block mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] ${className}`}
          {...props}
        />
        {error && (
          <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">{error}</p>
        )}
      </>
    );
  }
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`block mb-2 py-[14px] px-[16px] w-full bg-[#F8FAFC] rounded-[8px] ${className}`}
        {...props}
      />
      {error && (
        <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">{error}</p>
      )}
    </>
  );
}

export default CPInput;
