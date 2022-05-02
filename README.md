# AmazoneClone-APP
Build an Amazon Clone App using React, Redux-Toolkit and Firebase Cloud Services.

E-Commerce Functionality 👇

1️⃣ Accounts and Login Page


2️⃣ Products Page 📦


3️⃣ Cart and Checkout Page 🛒


4️⃣ Real Payments 💳


5️⃣ Order History Page 📖

## Setup

Follow all these steps as explained below. Do not miss any steps, or you won't be able to run this application.

### Firebase Authentication on Websites

You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.

More information below

https://firebase.google.com/docs/auth/web/start

### Cloud Functions for Firebase

Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests. Your JavaScript or TypeScript code is stored in Google's cloud and runs in a managed environment. There's no need to manage and scale your own servers.

More information below

https://firebase.google.com/docs/functions/get-started

🟠 You can see this service in the folder functions, it is not the server that is being consumed by the client, because in order to deploy it, you will need a Blaze account in Firebase. If you don't have this type of account, deploy the server to another site, and change the base URL in ./src/services/httpServices.js

### Custom payment flow

Learn how to embed a custom Stripe payment form in your website or application. The client- and server-side code builds a checkout form with [Elements](https://stripe.com/docs/payments/elements) to complete a payment using various payment methods.

More information below

https://stripe.com/docs/payments/quickstart

🟠 To control your own payment flow, you must have your own Stripe account, in it, you will get the Public Key and Secret Key to test payments. In the project, these keys are located ./src/App.jsx and ./functions/index.js. Replace them if you have them.

### Install the Dependencies

Next, from the project folder, install the dependencies:

    npm i

Next, from the ./functions folder, install the dependencies:

    cd functions
    npm i

### Start the Server locally

From the ./functions folder, run:

    node run serve

After you run this command, the Firebase CLI outputs the URL for any HTTP function endpoints. In your terminal, you should see a line like the following:

```
http://localhost:5001/<project-id>/us-central1/api
```

🟠 **Important** You also need to change the address where the client is making the requests in the following file ./src/services/httpService.js

### Start the Client

From the project folder

    npm run dev

This will launch the React client on port 3000 by default, if you can set a different point is in ./client/vite.config.js.

Open up your browser and head over to:

http://localhost:3000/

✅ You should see the client.
