import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function YourCart() {
  const { totalAmount, desserts, totalPrice } = useSelector(
    (store) => store.cart
  );
  return (
    <div className="your-cart">
      <h2 className="your-cart-title">Your Cart ({totalAmount})</h2>
      {desserts.map((d) => {
        return d.amount !== 0 && <CartItem key={d.id} d={d} />;
      })}
      {totalAmount == 0 && (
        <div className="your-cart-empty">
          <img src="./images/illustration-empty-cart.svg" alt="" />
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
            <img src="./images/icon-carbon-neutral.svg" alt="" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <button className="order-btn">Confirm Order</button>
        </div>
      )}
    </div>
  );
}
