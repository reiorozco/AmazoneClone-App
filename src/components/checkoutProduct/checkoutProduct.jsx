import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { productAmountChanged, productRemoved } from "../../store/basketSlice";

import "./checkoutProduct.css";

function CheckoutProduct({
  id,
  title,
  image,
  price,
  rating,
  amount,
  hiddenElement,
}) {
  const dispatch = useDispatch();

  const ratingStars = Array.from(Array(rating).keys());
  const qtyArray = Array.from({ length: 10 }, (_, i) => i + 1);

  const removeFromBasket = () => {
    dispatch(productRemoved({ id }));
  };

  const handleChange = ({ target: { value } }) => {
    dispatch(productAmountChanged({ id, amount: parseInt(value) }));
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
          {ratingStars.map((_, i) => (
            <p key={i}>⭐</p> // Star emoji ⭐
          ))}
        </div>

        {!hiddenElement && (
          <div className="checkoutProduct__amount">
            <form>
              <label>Quantity:</label>
              <br />
              <select value={amount} onChange={handleChange}>
                {qtyArray.map((num, i) => (
                  <option key={i} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </form>

            <button className="pointer" onClick={removeFromBasket}>
              Remove from basket
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

CheckoutProduct.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  amount: PropTypes.number,
  hiddenElement: PropTypes.bool,
};

export default CheckoutProduct;
