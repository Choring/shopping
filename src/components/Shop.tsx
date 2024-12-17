import { DUMMY_PRODUCTS } from "../dummy-products"
import { Product } from "./Product"


export const Shop = ({ onAddItemToCart }: ShopProps) => {
  return (
    <section>
        <h2>모두를 위한 세련된 패션</h2>

        <ul>
            {DUMMY_PRODUCTS?.map((product) => (
                <li key={product.id}>
                    <Product {...product} onAddToCart={onAddItemToCart} />
                </li>
            ))}
        </ul>
    </section>
  )
}
