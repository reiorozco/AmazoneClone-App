import React from "react";
import { useSelector } from "react-redux";

import "./subtotal.css";

function Subtotal(props) {
  const basket = useSelector((state) => state.basket.list);
  const initValue = 0;

  const number = basket.reduce((acc, curr) => acc + curr.price, initValue);
  const currency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{currency}</strong>
      </p>

      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
