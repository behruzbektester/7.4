import { useSelector } from "react-redux";

export default function OrderConfirmed({ onClose }) {
  const { totalAmount } = useSelector((store) => store.cart);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div>
          <img src="./images/icon-order-confirmed.svg" alt="Order Confirmed" />
        </div>

        <div className="modal-text">
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>
        <button
          onClick={() => {
            onClose();
            totalAmount == 0;
          }}
          className="close-btn"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
