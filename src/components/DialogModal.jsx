
function DialogModal({isOpen ,children}){
    let styles = ""
    if(isOpen) styles += "bg-transparent grid size-full items-center justify-center backdrop-blur-[4px]";
    return (
       <dialog
          open={isOpen}
          className={styles}
       >
          {children}
       </dialog>
    );
}

export default DialogModal;