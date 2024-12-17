import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";
import { Cart } from "../Cart";


export const CartModal = forwardRef<CartModalRef,CartModalProps>(function Modal(
  {cartItems, onUpdateCartItemQuantity, title, actions }, ref){
    
    const dialog = useRef<HTMLDialogElement>(null);
  
    useImperativeHandle( ref, () => {
      return {
        open: () => {
          dialog.current?.showModal();
        }
      }
    })

    return createPortal(
      <dialog>
        <h2>{title}</h2>
        <Cart 
          items={cartItems}
          onUpdateItemQuantity={onUpdateCartItemQuantity}
        />
        <form method="dialog" id="modal-actions">
          {actions}
        </form>
      </dialog>,
      document.getElementById("modal-root")!
    );
});
