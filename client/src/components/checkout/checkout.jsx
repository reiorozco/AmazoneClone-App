import React from "react";
import { useSelector } from "react-redux";

import Subtotal from "../subtotal/subtotal";
import CheckoutProduct from "../checkoutProduct/checkoutProduct";

import "./checkout.css";

function Checkout(props) {
  const basket = useSelector((state) => state.basket.list);
  const user = useSelector((state) => state.currentUser.user);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout-ad"
        />

        <div>
          {user && (
            <h3 className="checkout__titleEmail">Hello, {user.email}</h3>
          )}
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
