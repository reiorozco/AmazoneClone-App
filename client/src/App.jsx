import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./components/home/home";
import Checkout from "./components/checkout/checkout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
