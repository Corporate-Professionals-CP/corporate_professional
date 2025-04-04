import React from "react";

function CPprofileImg({ size = 48 }: { size?: number }) {
  return (
    <div
      className=" rounded-full bg-amber-100"
      style={{ height: size, width: size }}
    ></div>
  );
}

export default CPprofileImg;
