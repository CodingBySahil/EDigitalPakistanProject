import CoursePaymentForm from "./CoursePaymentForm";
import CoursePaymentHeader from "./CoursePaymentHeader";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { usePaymentContext } from "./usePaymentContext";
import LoadingSpinnerContainer from "../LoadingSpinnerContainer";
import LoadingSpinner from "../LoadingSpinner";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// COMPONENT START
export default function CoursesPayment() {
  // VARIABLES
  const { clientSecret, statusClientSecret } = usePaymentContext();

  // JSX
  if (statusClientSecret === "success") {
    return (
      <section className="grid grid-rows-[auto_1fr] gap-[20px] rounded-[8px] p-[10px] shadow-basicShadow">
        {/* header */}
        <CoursePaymentHeader />

        <section>
          <Elements options={{ clientSecret }} stripe={stripePromise}>
            <CoursePaymentForm
              clientSecret={clientSecret}
              statusClientSecret={statusClientSecret}
            />
          </Elements>
        </section>
      </section>
    );
  }

  // Return some fallback UI if the condition is not met (optional)
  if (statusClientSecret === "pending") {
    return (
      <LoadingSpinnerContainer>
        <LoadingSpinner />
      </LoadingSpinnerContainer>
    );
  }
}
// COMPONENT END
