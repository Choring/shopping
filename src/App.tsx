import './App.css'
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Shop } from "./components/Shop";
import { useState } from "react";
import { DUMMY_PRODUCTS } from "./dummy-products";
import { Product } from "./components/Product";

function App() {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
    items: []
  })
  
  const handleAddItemToCart = (id:string) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product?.title || "",
          price: product?.price || 0,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  const handleUpdateCartItemQuantity = (productId:string, amount:number) => {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  return (
    <>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop>
        {DUMMY_PRODUCTS?.map((product) => (
            <li key={product.id}>
                <Product {...product} onAddToCart={handleAddItemToCart} />
            </li>
        ))}
      </Shop>
      <Footer />
    </>
  )
}

export default App
