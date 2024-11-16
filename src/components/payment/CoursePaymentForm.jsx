import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import FormRow from "../FormRow";
// import PaymentFormRowName from "./PaymentFormRowName";
// import PaymentFormRowCard from "./PaymentFormRowCard";
// import PaymentFormRowExpiration from "./PaymentFormRowExpiration";
// import PaymentFormRowCVC from "./PaymentFormRowCVC";
import PaymentFormRowCheckBox from "./PaymentFormRowCheckBox";
import { stripePaymentURL } from "../../constants/const";
import FormLabel from "../FormLabel";

// COMPONENT START
export default function CoursePaymentForm() {
  // VARIABLES
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  const stripe = useStripe();
  const elements = useElements();

  // FUNCTIONS

  //    FUNCTION
  const coursePaymentFormSubmit = async () => {
    if (!stripe || !elements) return;

    try {
      // Make a request to the backend to get the client secret
      const response = await fetch(`${stripePaymentURL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 5000, paymentCurrency: "usd" }),
      });

      // Check if the response is successful
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Unable to fetch client secret: ${error}`);
      }

      // Parse the JSON response
      const { data } = await response.json();

      console.log(data.clientSecret);

      // Confirm the payment using the client secret
      const confirmPayment = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardNumberElement),
            billing_details: {
              name: "Uzair", // Add the billing name if required
            },
          },
        },
      );

      console.log(confirmPayment);

      if (confirmPayment.error) {
        // Handle error if the payment confirmation failed
        console.error(
          "Payment confirmation error:",
          confirmPayment.error.message,
        );
        throw new Error(`Payment failed: ${confirmPayment.error.message}`);
      }

      if (confirmPayment.paymentIntent.status === "succeeded") {
        console.log("Payment confirmed successfully!");
      } else {
        console.error(
          "Payment failed: unexpected status",
          confirmPayment.paymentIntent.status,
        );
      }
    } catch (err) {
      console.error("Payment error:", err.message);
      throw new Error(`Unable to make payment: ${err.message}`);
    }
  };

  // JSX
  return (
    <form
      className="flex flex-col gap-[10px]"
      onSubmit={handleSubmit(coursePaymentFormSubmit)}
    >
      {/* <PaymentFormRowName register={register} errors={errors} /> */}

      {/* <PaymentFormRowCard register={register} errors={errors} /> */}
      <FormRow>
        <FormLabel htmlFor={"cardNumber"} label={"Card number"} />
        <CardNumberElement id={"cardNumber"} />
      </FormRow>

      {/* <PaymentFormRowExpiration register={register} errors={errors} /> */}
      <FormRow>
        <CardExpiryElement />
      </FormRow>

      {/* <PaymentFormRowCVC register={register} errors={errors} /> */}
      <FormRow>
        <CardCvcElement />
      </FormRow>

      <PaymentFormRowCheckBox control={control} />

      <FormRow>
        <Button
          type="submit"
          size="small"
          variant="contained"
          disableElevation
          sx={{ bgcolor: "#49BBBD", fontWeight: 300 }}
        >
          Confirm payment
        </Button>
      </FormRow>
    </form>
  );
}

//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
