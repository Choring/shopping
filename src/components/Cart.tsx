

export const Cart = ({items, onUpdateItemQuantity}: CartProps) => {
    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;


    return (
        <div id="cart">
            {items.length === 0 && <p className="font-bold">장바구니가 비었습니다!</p>}
            {items.length > 0 && (
                <ul id="cart-items">
                {items?.map((item) => {
                    const formattedPrice = `$${item.price.toFixed(2)}`;

                    return (
                    <li key={item.id}>
                        <div>
                            <span>{item.name}</span>
                            <span> ({formattedPrice})</span>
                        </div>
                        <div className="cart-item-actions">
                            <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                                +
                            </button>
                        </div>
                    </li>
                    );
                })}
                </ul>
            )}
            <p id="cart-total-price" className="font-bold">
                총 금액: <strong>{formattedTotalPrice}</strong>
            </p>
        </div>
    )
}
