import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../../router/router";
import useAuth from "../../../../hooks/useAuth";
import { ToastMsgSuc } from "../../../../components/Toast/ToastMsg";
import moment from "moment-timezone";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ selectClass }) => {
  const { name, price, _id, instructor, instructorEmail, image } = selectClass;
  // console.log(price);

  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [proccessing, setProccessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    price &&
      axios.post(`${baseUrl}/create-payment-intent`, { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setCardError("");
    setCardSuccess("");
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error?.message);
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    setProccessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "Anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    // console.log(paymentIntent);

    setProccessing(false);
    if (paymentIntent.status === "succeeded") {
      // setTransactionId(paymentIntent.id);
      setCardSuccess(
        `Your payment has been successfully received! TransactionID ${paymentIntent.id}`
      );

      const localDateTime = moment().format("YYYY-MM-DD HH:mm:ss");

      const payment = {
        image,
        instructor,
        instructorEmail,
        className: name,
        classId: _id,
        studentEmail: user?.email,
        price,
        date: localDateTime,
        transactionId: paymentIntent.id,
      };

      axios.post(`${baseUrl}/save-payment-info`, payment).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          ToastMsgSuc("Your payment details has been saved!");
          axios.delete(`${baseUrl}/booking-class/${_id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              navigate("/dashboard/student/selected-class");
            }
          });
        }
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        {/* ALERT ERROR! */}
        {cardError && (
          <div
            className="flex items-center p-4 mt-6 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">{cardError}!</span>
            </div>
          </div>
        )}

        {/* ALERT SUCCESS! */}
        {cardSuccess && (
          <div
            className="flex items-center p-4 mt-6 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">{cardSuccess}!</span>
            </div>
          </div>
        )}

        <button
          className={`btn btn-outline btn-primary ${
            cardError ? "mt-6" : "mt-12"
          } px-12`}
          type="submit"
          disabled={!stripe || !elements || proccessing}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
