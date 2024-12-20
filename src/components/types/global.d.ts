import { ReactNode } from "react"

export {}

declare global {
    // interface 이름 {} or type 이름 = {}

    type ShoppingCartItem = {
        id: string,
        name: string,
        price: number,
        quantity: number

    }
    interface ShoppingCart {
        items: ShoppingCartItem[]
    }

    type DummyProducts = {
        id: string;
        image: string;
        title: string;
        price: number;
        description: string;
    }[]

    interface ShopProps {
        onAddItemToCart: (id:string) => void;
    }

    interface ProductProps {   
        id: string;
        image: string;
        title: string;
        price: number;
        description: string; 
        onAddToCart: (id: string) => void;
    }
    interface HeaderProps {
        cart: ShoppingCart;
        onUpdateCartItemQuantity: (productId:string, amount:number) => void;
    }

    interface ModalRef {
        open: () => void;
    }

    interface CartModalProps {
        cartItems: ShoppingCartItem[];
        onUpdateCartItemQuantity: (productId:string, amount:number) => void;
        title: string;
        actions: ReactNode;
    }

    interface CartModalRef {
        open: () => void;
    }

    interface CartProps {
        items: ShoppingCartItem[];
        onUpdateItemQuantity: (productId:string, amount:number) => void;
    }
}