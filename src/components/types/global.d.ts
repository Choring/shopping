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
        onAddToCart: () => void;
    }

    interface HeaderProps {
        cart: ShoppingCart;
        onUpdateCartItemQuantity: (productId:string, amount:number) => void;
    }
}