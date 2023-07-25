import { loadStripe } from "@stripe/stripe-js";
import useTitle from "../../../../hooks/useTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../../router/router";

const Payment = () => {
  useTitle("Payment");
  const { id } = useParams();
  // console.log(id);
  const [selectClass, setSelectClass] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/booking-class-payment/${id}`)
      .then((res) => setSelectClass(res.data));
  }, [id]);

  const stripePromise = loadStripe(import.meta.env.VITE_stripe_payment_key);

  return (
    <div>
      <h1>This is payment page!</h1>
      <div className="w-1/2 border rounded-lg p-6 mt-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm selectClass={selectClass} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
