import { ReactNode } from "react";

function CPsocialLoginButton({
  Icon,
  text,
  onClick,
  disable = false,
}: {
  Icon: ReactNode;
  text: string;
  onClick?: () => void;
  disable?: boolean;
}) {
  return (
    <button
      className="flex justify-center items-center p-3 w-full bg-[#F8FAFC] gap-3 rounded-[8px] mb-2 font-medium text-sm         disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={disable}
      onClick={onClick}
    >
      {Icon}
      <span>{text}</span>
    </button>
  );
}

export default CPsocialLoginButton;
