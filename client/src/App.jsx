import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import Header from "./components/header/header";
import Home from "./components/home/home";
import Checkout from "./components/checkout/checkout";
import Login from "./components/login/login";
import { auth } from "../firebase";
import { userSet } from "./store/userSlice";

import "./App.css";

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
        </Route>

        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
