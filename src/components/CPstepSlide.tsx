import React from "react";

function CPstepSlide({ currentstep }: { currentstep: number }) {
  return (
    <div className="flex gap-2 mb-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((e) => (
        <div
          key={e}
          className={`w-2 h-2 rounded-full  ${
            e == currentstep ? "bg-primary" : "bg-[#F1F5F9]"
          }`}
        ></div>
      ))}
    </div>
  );
}

export default CPstepSlide;
