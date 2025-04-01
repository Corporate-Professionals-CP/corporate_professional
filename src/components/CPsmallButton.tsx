import React from "react";

function CPsmallButton({ text }: { text: string }) {
  return (
    <div className="bg-primary py-3 px-6 rounded-full text-white font-medium">
      {text}
    </div>
  );
}

export default CPsmallButton;
