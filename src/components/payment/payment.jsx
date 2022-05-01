import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { doc, setDoc } from "firebase/firestore";

import CheckoutProduct from "../checkoutProduct/checkoutProduct";
import { getClientSecret } from "../../services/paymentIntentService";
import { basketEmptied } from "../../store/basketSlice";
import { db } from "../../../firebase";

import "./payment.css";

function Payment() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const basket = useSelector((state) => state.basket.list);
  const user = useSelector((state) => state.currentUser.user);

  const stripe = useStripe();
  const elements = useElements();

  const initValue = 0;
  const number = basket.reduce(
    (acc, curr) => acc + curr.price * curr.amount,
    initValue
  );
  const currency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(number);

  const amount = basket.reduce((acc, curr) => acc + curr.amount, initValue);

  useEffect(async () => {
    const { data } = await getClientSecret(basket);

    setClientSecret(data.clientSecret);
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    console.log(error);
    if (error) {
      error.type === "card_error" || error.type === "validation_error"
        ? setError(error.message)
        : setError("An unexpected error occurred.");
    }

    if (paymentIntent) {
      try {
        await setDoc(doc(db, `users/${user.uid}/orders`, paymentIntent.id), {
          basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

        console.log("Document written with ID: ", paymentIntent.id);

        navigate("/orders", { replace: true });
        dispatch(basketEmptied());
        return;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{amount} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Shipping Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Bucaramanga, Santander </p>
            <p>Colombia</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review your order</h3>
          </div>

          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                amount={item.amount}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            <form id="payment-form" onSubmit={handleSubmit}>
              <CardElement id="payment-element" />

              <div className="payment__priceContainer">
                <h3>
                  Order Total: <strong>{currency}</strong>
                </h3>

                <button
                  disabled={isLoading || !stripe || !elements}
                  id="submit"
                >
                  <span id="button-text">
                    {isLoading ? (
                      <div className="spinner" id="spinner"></div>
                    ) : (
                      "Place your order"
                    )}
                  </span>
                </button>
              </div>

              {/* Show any error or success messages */}
              {error && <div id="payment-message">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
