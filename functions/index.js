const functions = require("firebase-functions");
const express = require("express");
require("express-async-errors");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Ku390E2nsqcAGkcBhHUrpISKNpS3YjD5ArBwmpMBekJ6AsPDFR6CBx8jVMLAtwgBJHCk5G2FDcBIaRzLTNwWElt00Vhtnec8J"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

const calculateOrderAmount = (items) => {
  const initValue = 0;

  return Math.round(
    items.reduce((acc, curr) => acc + curr.price * curr.amount, initValue) * 100
  );
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Error Handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send("Something failed.");
});

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);
