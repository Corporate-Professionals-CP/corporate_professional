import React from "react";
import CPModal from "./CPModal";
import CPsmallButton from "./CPsmallButton";

function CPdeleteModal({
  onClose,
  onDelete,
  isLoading,
}: {
  onClose: () => void;
  onDelete: () => void;
  isLoading: boolean;
}) {
  return (
    <CPModal width={445} backgroundAction={onClose} zIndex={60}>
      <div className="p-4">
        <div className="mb-12">
          <h5 className="text-[#050505] font-medium text-lg mb-4">
            Delete item
          </h5>
          <p className="text-[#64748B] ">
            Are you sure you want to delete this item?
          </p>
        </div>
        <div className="flex justify-end gap-4 items-center">
          <button
            className="text-[#020617] font-medium text-sm gap-2 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <CPsmallButton
            text="Delete"
            style={{
              backgroundColor: "white",
              color: "#020617",
              border: "1px solid #CBD5E1",
              fontWeight: "500",
              cursor: "pointer",
            }}
            loading={isLoading}
            onClick={onDelete}
          />
        </div>
      </div>
    </CPModal>
  );
}

export default CPdeleteModal;
