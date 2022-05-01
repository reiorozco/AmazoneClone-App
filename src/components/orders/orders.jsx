import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import Order from "./order/order";
import { db } from "../../../firebase";

import "./orders.css";

function Orders(props) {
  const [orders, setOrders] = useState([]);

  const user = useSelector((state) => state.currentUser.user);

  useEffect(() => {
    const q = query(
      collection(db, `users/${user?.uid}/orders`),
      orderBy("created", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const orders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setOrders(orders);
    });
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
