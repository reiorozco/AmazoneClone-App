import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Header from "./components/header/header";
import Home from "./components/home/home";
import Checkout from "./components/checkout/checkout";
import Login from "./components/login/login";
import Payment from "./components/payment/payment";
import NotFound from "./components/notFound/notFound";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import Orders from "./components/orders/orders";
import { auth } from "../firebase";
import { userSet } from "./store/userSlice";

import "./App.css";

// Make sure to call `loadStripe` outside a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Ku390E2nsqcAGkcuuE2wycwA3lVJRiyctRFkwNL1ULG9eH3lE34tXXQEM1ZkjDD0UGOEBii1vnnYiZAV6KGG6wo00gify71Q5"
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const email = user.email;
        // ...
        dispatch(userSet({ email, uid }));
      } else {
        // User is signed out
        // ...
        dispatch(userSet(null));
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="payment"
            element={
              <ProtectedRoute>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </ProtectedRoute>
            }
          />
          <Route
            path="orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
