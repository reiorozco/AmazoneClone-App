import React from "react";
import { useDispatch } from "react-redux";

import { productAdded } from "../../store/basketSlice";

import "./product.css";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();

  const ratingStars = Array.from(Array(rating).keys());

  const addToBasket = () => {
    dispatch(
      productAdded({
        id,
        title,
        image,
        price,
        rating,
        amount: 1,
      })
    );
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {ratingStars.map((_, i) => (
            <p key={i}>⭐</p> // Star emoji ⭐
          ))}
        </div>
      </div>

      <img src={image} alt="product" />

      <button className="pointer" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
