import React, { ReactNode } from "react";

const CPText = ({
  minorheading,
  majorheading,
  children,
}: {
  minorheading: string;
  majorheading: string;
  children?: ReactNode;
}) => {
  return (
    <div className="mb-6">
      <p className="mb-8">{minorheading}</p>
      <h4 className="font-medium text-2xl "> {majorheading}</h4>
      {children && children}
    </div>
  );
};

export default CPText;
