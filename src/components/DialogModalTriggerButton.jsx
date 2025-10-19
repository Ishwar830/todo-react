import { useState } from 'react';

function DialogModalTriggerButton({ buttonLabel, buttonStyles, children }) {
   const [isOpen, setIsOpen] = useState(false);

   const closeDialog = () => setIsOpen(false);
   const openDialog = () => setIsOpen(true);

   return (
      <>
         <button className={buttonStyles} onClick={openDialog}>{buttonLabel}</button>
         {isOpen && <dialog className='' open={isOpen} onClose={closeDialog}>
            <button onClick={closeDialog}>Close</button>
            {children}
         </dialog>}
      </>
   );
}

export default DialogModalTriggerButton;
