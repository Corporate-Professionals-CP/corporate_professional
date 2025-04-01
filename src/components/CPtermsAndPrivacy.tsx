function CPtermsAndPrivacy({ className }: { className?: string }) {
  return (
    <div className={`flex gap-4 items-center text-sm ${className}`}>
      <p>Terms of Service</p>
      <span className="w-[2] h-[14] bg-[#D9D9D9]"></span>
      <p>Privacy Policy.</p>
    </div>
  );
}

export default CPtermsAndPrivacy;
