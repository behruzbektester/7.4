import React from "react";
import desserts from "../data";

export default function YourCart() {
  if (desserts.length == 0) {
    return (
      <section className="orders-section">
        <div className="orders-container">
          <h2 className="orders-heading">Your Cart (0)</h2>

          <img src="./images/illustration-empty-cart.svg" alt="" />
          <p className="orders-text">Your added items will appear here</p>
        </div>
      </section>
    );
  }
  return <h2>You are dumb</h2>;
}
