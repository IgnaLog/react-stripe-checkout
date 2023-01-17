import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import "bootswatch/dist/lux/bootstrap.min.css";

const stripe = loadStripe(
  "pk_test_51MRFJ9FNOEKTxhzYmW3GjPwWzSkkgzGluIXvKIZfnKzvzIHgCSZoMHrTBoWJLCcufzVLJJrWUPNjcBSQIYJPaqRl00kDV2wBRd"
);

function App() {
  return (
    <Elements stripe={stripe}>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default App;
