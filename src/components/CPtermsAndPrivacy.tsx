import Link from "next/link";

function CPtermsAndPrivacy({ className }: { className?: string }) {
  return (
    <Link
      href={"/terms-services"}
      className={`flex gap-4 items-center text-sm ${className}`}
    >
      <p>Terms of Service</p>
      <span className="w-[2] h-[14] bg-[#D9D9D9]"></span>
      <p>Privacy Policy.</p>
    </Link>
  );
}

export default CPtermsAndPrivacy;
