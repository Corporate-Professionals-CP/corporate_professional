import React from "react";

function CPspinnerLoader({ size = 30 }: { size?: number }) {
  const borderwidth = (6 * size) / 60;
  return (
    <div className="container">
      <div
        className="spinner"
        style={{ height: size, width: size, borderWidth: borderwidth }}
      ></div>
    </div>
  );
}

export default CPspinnerLoader;
