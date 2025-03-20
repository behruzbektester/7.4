import { useSelector } from "react-redux";
import { useState } from "react";
import CartItem from "./CartItem";
import OrderConfirmed from "./OrderConfirmed";

export default function YourCart() {
  const { totalAmount, desserts, totalPrice } = useSelector(
    (store) => store.cart
  );
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  return (
    <div className="your-cart">
      <h2 className="your-cart-title">Your Cart ({totalAmount})</h2>
      {desserts.map((d) => d.amount !== 0 && <CartItem key={d.id} d={d} />)}

      {totalAmount === 0 && (
        <div className="your-cart-empty">
          <img src="./images/illustration-empty-cart.svg" alt="Empty Cart" />
          <p>Your added items will appear here</p>
        </div>
      )}

      {totalAmount !== 0 && (
        <div>
          <div className="order-total">
            <p>Order Total</p>
            <h2>${totalPrice}</h2>
          </div>
          <div className="delivery">
            <img src="./images/icon-carbon-neutral.svg" alt="Carbon Neutral" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <button
            className="order-btn"
            onClick={() => setIsOrderConfirmed(true)}
          >
            Confirm Order
          </button>
        </div>
      )}

      {isOrderConfirmed && (
        <OrderConfirmed onClose={() => setIsOrderConfirmed(false)} />
      )}
    </div>
  );
}
