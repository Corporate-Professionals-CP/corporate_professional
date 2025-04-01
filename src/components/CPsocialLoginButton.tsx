function CPsocialLoginButton({ text }: { text: string }) {
  return (
    <button className="flex justify-center p-3 w-full bg-[#F8FAFC] gap-3 rounded-[8px] mb-2 font-medium text-sm">
      {text}
    </button>
  );
}

export default CPsocialLoginButton;
