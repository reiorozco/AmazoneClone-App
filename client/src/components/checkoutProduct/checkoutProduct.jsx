import React from "react";
import "./checkoutProduct.css";
import { useDispatch } from "react-redux";
import { productRemoved } from "../../store/basketSlice";

function CheckoutProduct({ id, title, image, price, rating }) {
  const dispatch = useDispatch();

  const removeFromBasket = () => {
    dispatch(productRemoved({ id }));
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__div--image">
        <img className="checkoutProduct__image" src={image} alt="product" />
      </div>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill(undefined, undefined, undefined)
            .map((_, i) => (
              <p key={i}>⭐</p> // Star emoji ⭐
            ))}
        </div>

        <button className="pointer" onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
