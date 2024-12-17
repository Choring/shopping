import { useRef } from "react";
import { CartModal } from "../modal/CartModal";

export const Header = ({ cart, onUpdateCartItemQuantity}: HeaderProps) => {
    const modal = useRef<ModalRef>(null);
    
    const cartQuantity = cart.items.length;
    
    const handleOpenCartClick = () => {
        modal.current?.open();
    }

    let modalActions = <button>닫기</button>;
    
    if (cartQuantity > 0) {
        modalActions = (
          <>
            <button>닫기</button>
            <button>확인</button>
          </>
        );
      }

    return (
        <>
            <CartModal 
                ref={modal}
                cartItems={cart.items}
                onUpdateCartItemQuantity={onUpdateCartItemQuantity}
                title="장바구니"
                actions={modalActions}
            />
            <header id="main-header">
                <div id="main-title">
                <img src="logo.png" alt="Elegant model" />
                <h1>Elegant Context</h1>
                </div>
                <p>
                <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
                </p>
            </header>
        </>
    )
}
