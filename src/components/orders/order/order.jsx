import React from "react";
import PropTypes from "prop-types";

import CheckoutProduct from "../../checkoutProduct/checkoutProduct";

import "./order.css";

function Order({ order }) {
  const formatUnixDate = (date) => {
    const options = {
      day: "numeric",
      year: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
    };

    if (!date) return null;

    return new Date(date * 1000).toLocaleDateString("en-US", options);
  };

  const initValue = 0;
  const number = order.data.basket.reduce(
    (acc, curr) => acc + curr.price * curr.amount,
    initValue
  );
  const currency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return (
    <div className="order">
      <h2>Order Summary</h2>

      <p>Ordered on {formatUnixDate(order.data.created)}</p>

      <p className="order__id">
        <small>Order# {order.id}</small>
      </p>

      {order.data.basket.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          amount={item.amount}
          hiddenElement={true}
        />
      ))}

      <h3>
        Order Total: <strong>{currency}</strong>
      </h3>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.object,
};

export default Order;
