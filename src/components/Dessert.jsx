import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  addToCart,
} from "../app/features/cartSlice";

export default function Dessert({ d }) {
  const dispatch = useDispatch();
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const addDessert = (d) => {
    dispatch(
      addToCart({
        amount: 1,
        ...d,
      })
    );
  };
  return (
    <div className="cart">
      <picture>
        <source media="(min-width: 1025px)" srcSet={d.image.desktop} />
        <source media="(min-width: 768px)" srcSet={d.image.tablet} />
        <source media="(min-width: 350px)" srcSet={d.image.mobile} />
        <img className="card-image" src={d.image.thumbnail} alt={d.name} />
      </picture>

      <div className="buttons-wrapper">
        {!alreadyAdded && (
          <button
            onClick={() => {
              addDessert(d);
              setAlreadyAdded(true);
            }}
            className="add-to-cart"
          >
            <span className="add-to-cart-inner-wrapper">
              <img
                src="./images/icon-add-to-cart.svg"
                alt=""
                height={20}
                width={20}
              />
              <span>Add to Cart</span>
            </span>
          </button>
        )}
        {alreadyAdded && (
          <div className="increment-decrement-btns">
            <button className="amount-change-btn">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                </svg>
              </span>
            </button>
            <span className="amount">1</span>
            <button className="amount-change-btn">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="#fff"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="cart-info-content">
        <p className="cart-info-category">{d.category}</p>
        <h3 className="cart-info-name">{d.name}</h3>
        <h3 className="cart-info-price">${d.price}</h3>
      </div>
    </div>
  );
}
