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
import PaymentFormRowName from "./PaymentFormRowName";
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
  const coursePaymentFormSubmit = async (formData) => {
    if (!stripe || !elements) return;

    try {
      // DIVIDER  Make a request to the backend to get the client secret_____________
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
      const { data } = await response.json(); //____________________________

      //z Confirm the payment using the client secret_________________________
      const confirmPayment = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardNumberElement),
            billing_details: {
              name: formData.nameOnCard, // Add the billing name if required
            },
          },
        },
      );

      if (confirmPayment.paymentIntent.status === "succeeded") {
        console.log("Payment confirmed successfully!");
      }
    } catch (err) {
      throw new Error(`Unable to make payment: ${err.message}`);
    }
  };

  // JSX
  return (
    <form
      className="flex flex-col gap-[10px]"
      onSubmit={handleSubmit(coursePaymentFormSubmit)}
    >
      <PaymentFormRowName register={register} errors={errors} />

      {/* <PaymentFormRowCard register={register} errors={errors} /> */}
      <FormRow>
        <FormLabel htmlFor={"cardNumber"} label={"Card number"} />
        <CardNumberElement
          id={"cardNumber"}
          className="mt-[5px] rounded-[5px] bg-slate-100 p-[8px]"
        />
      </FormRow>

      {/* <PaymentFormRowExpiration register={register} errors={errors} /> */}
      <FormRow>
        <FormLabel htmlFor={"cardExpiry"} label={"Card expiry"} />
        <CardExpiryElement
          id={"cardExpiry"}
          className="mt-[5px] rounded-[5px] bg-slate-100 p-[8px]"
        />
      </FormRow>

      {/* <PaymentFormRowCVC register={register} errors={errors} /> */}
      <FormRow>
        <FormLabel htmlFor={"cardCvc"} label={"Card CVC"} />
        <CardCvcElement
          id={"cardCvc"}
          className="mt-[5px] rounded-[5px] bg-slate-100 p-[8px]"
        />
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
