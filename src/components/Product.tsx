

export const Product = ({id, image, title, price, description, onAddToCart }: ProductProps) => {
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className='product-price'>${price}</p>
          <p className="font-bold">{description}</p>
        </div>
        <p className='product-actions mt-2'>
          <button className="font-bold hover:text-white" onClick={() => onAddToCart(id)}>장바구니 담기</button>
        </p>
      </div>
    </article>
  )
}
