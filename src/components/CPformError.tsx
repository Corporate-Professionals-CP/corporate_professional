import React from "react";

function CPformError({ error }: { error: string | undefined }) {
  return (
    <>
      {error && (
        <p className="text-[#E62E2E] text-sm -translate-1.5 mb-0">{error}</p>
      )}
    </>
  );
}

export default CPformError;
