import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [validPaymentData, setValidPaymentData] = useState(false);
  const [isPaymentLoading, setPaymentLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setPaymentLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/checkout",
          {
            id,
            amount: 100 * 100,
          }
        );
        console.log(data);
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setPaymentLoading(false);
    }
  };

  const handleChange = (e) => {
    if (e.complete) {
      setValidPaymentData(true);
    } else {
      setValidPaymentData(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <img
        src="https://www.discoazul.com/uploads/media/images/teclado-corsair-k68-rgb-cherry-mx-red-espanol-ch-9102010-es-11.png"
        alt="k68 keyboard"
        className="img-fluid"
      />
      <h3 className="text-center my-2">Price: 100$</h3>
      <div className="mb-3">
        <CardElement onChange={handleChange} className="form-control" />
      </div>
      <button
        className="btn btn-success"
        disabled={!stripe || isPaymentLoading || !validPaymentData}
      >
        {isPaymentLoading ? (
          <div className="spinner-border text-light" role="status"></div>
        ) : (
          "Buy"
        )}
      </button>
    </form>
  );
};

export default CheckoutForm;
