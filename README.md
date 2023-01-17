# Stripe Payments with React and Express

This app developed with React, shows a simulation of payment of a product with the Stripe platform. First we get the payment data through `stripe.createPaymentMethod` and then we send that data to the backend with Express to proceed and formalize the payment in Stripe through `stripe.paymentIntents.create`.

![](https://i.ibb.co/km9ymqd/buying-product-with-stripe-react.png")

To use card data and test, I recommend using the following documentation from [Stripe Card Testing](https://stripe.com/docs/testing).

## 💻 Quick start

To deploy this project, you must first install the node_modules packages. To do this, open a console with the main path of the project and run:

```bash
npm install
```

After that, create an `.env` file in the main directory of the project with the following environment variables:

    STRIPE_API_SECRET_KEY=<Secret key of your stripe account>

Also in `app.jsx` you must put your public key of your stripe account:

    const stripe = loadStripe("<Public key of your stripe account>");

Finally, in the terminal with the main path execute:

```bash
npm run dev
```

## 📚 References

- 🔗 [Stripe Documentation](https://stripe.com/docs/js)
- 🔗 [Stripe with React](https://stripe.com/docs/stripe-js/react)
- 🔗 [Stripe Card Testing](https://stripe.com/docs/testing)
