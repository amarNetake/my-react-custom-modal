import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
type Props = {
  children: React.ReactNode | null;
  closeModal: () => void;
};
const ShowModal: React.FC<Props> = (props) => {
  const { children, closeModal } = props;

  // Disable background scroll when modal is open
  useEffect(() => {
     document.body.style.overflow = "hidden"; // Disable scrolling
     return () => {
       document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
     };
   }, []);
 
   // Handle outside click to close modal
   const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
     if (e.target === e.currentTarget) {
       closeModal();
     }
   };

  return (
    <>
     <div onClick={handleClickOutside} className="w-[100vw] h-[100vh] bg-gray-300 fixed opacity-70 z-40 top-0 left-0">
      
    </div>

    <div className="fixed z-50 max-w-[60%] p-10 absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] bg-zinc-100">
        <button
          onClick={() => closeModal()}
          className="px-2 py-2 absolute right-2 top-2 hover:text-red-400"
        >
          <ImCross />
        </button>
        {children && children}
      </div>
    </>
  );
};

export default ShowModal;
