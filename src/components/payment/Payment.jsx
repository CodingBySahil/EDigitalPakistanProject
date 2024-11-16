import { createContext } from "react";
import Footer from "../Footer";
import ScrollableBody from "../ScrollableBody";
import CartSummary from "./CartSummary";
import CoursesPayment from "./CoursesPayment";
import OtherCoursesBuying from "./OtherCoursesBuying";
import { useGetClientSecret } from "./useGetClientSecret";

export const PaymentContext = createContext();

// COMPONENT START
export default function Payment() {
  // VARIABLES
  const { clientSecret, statusClientSecret } = useGetClientSecret();

  // FUNCTIONS

  // JSX
  return (
    <PaymentContext.Provider value={{ clientSecret, statusClientSecret }}>
      <div className="grid grid-rows-[60px_1fr]">
        {/* DIVIDER payment page header */}
        <header className="bg-brand-color-cyan">Header</header>

        <ScrollableBody>
          {/* DIVIDER payment body */}
          <main className="flex flex-col gap-[20px] px-[10px] pt-[10px]">
            {/* cart summary */}
            <CartSummary />

            {/* payment gateway */}
            <CoursesPayment />

            {/* other course */}
            <OtherCoursesBuying />
          </main>

          {/* DIVIDER payment footer */}
          <Footer />
        </ScrollableBody>
      </div>
    </PaymentContext.Provider>
  );
  // JSX
}
// COMPONENT END
