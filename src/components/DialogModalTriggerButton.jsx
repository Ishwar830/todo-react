import { useState } from 'react';

function DialogModalTriggerButton({ buttonLabel, buttonStyles, children }) {
   const [isOpen, setIsOpen] = useState(false);

   const closeDialog = () => setIsOpen(false);
   const openDialog = () => setIsOpen(true);

   return (
      <>
         <button className={buttonStyles} onClick={openDialog}>
            {buttonLabel}
         </button>
         {isOpen && (
            <dialog
            open={isOpen}
            onClose={closeDialog}
               className="grid top-0 left-0 size-full items-center justify-center bg-transparent backdrop-blur-[4px]"
            >
               <div className="grid rounded-xl border-2 bg-white p-2">
                  <button
                     className="size-9 rounded-full bg-red-500 font-bold text-white justify-self-end"
                     onClick={closeDialog}
                  >
                     X
                  </button>
                  {children}
               </div>
            </dialog>
         )}
      </>
   );
}

export default DialogModalTriggerButton;
