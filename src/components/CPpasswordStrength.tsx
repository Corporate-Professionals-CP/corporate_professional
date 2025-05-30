import React from "react";

const getPasswordStrength = (password: string) => {
  if (!password) return "weak";
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const isLongEnough = password?.length >= 6;

  const passedChecks = [
    hasUpperCase,
    hasNumber,
    hasSymbol,
    isLongEnough,
  ].filter(Boolean).length;

  if (passedChecks === 0) return "Very Weak";
  if (passedChecks <= 2) return "Weak";
  if (passedChecks === 3) return "Okay";
  if (passedChecks === 4) return "Good";

  return "Weak";
};

function CPpasswordStrength({ password }: { password: string }) {
  const passwordStrength = getPasswordStrength(password);
  return (
    <div>
      <p
        className={`text-xs text-slatea ${
          passwordStrength === "Good"
            ? "text-green-600"
            : passwordStrength === "Okay"
            ? "text-yellow-600"
            : "text-red-500"
        }`}
      >
        {password ? passwordStrength : ""}
      </p>
    </div>
  );
}

export default CPpasswordStrength;
