import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const stripe = new Stripe(process.env.STRIPE_API_SECRET_KEY);

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  try {
    const { id, amount } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Gaming keyboard", // This field must come from the product data in the database
      payment_method: id,
      confirm: true,
    });
    console.log(payment);
    res.send({ message: "Successful payment" });
  } catch (error) {
    console.log(error);
    res.json({ message: error.raw.message });
  }
});

app.listen(3000, () => {
  console.log("Server on port", 3000);
});
