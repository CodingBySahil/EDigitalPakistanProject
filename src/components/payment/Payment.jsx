import { createContext } from "react";
import Footer from "../Footer";
import CartSummary from "./CartSummary";
import CoursesPayment from "./CoursesPayment";
import OtherCoursesBuying from "./OtherCoursesBuying";
import { useGetClientSecret } from "./useGetClientSecret";
import InAppHeader from "../InAppHeader";

export const PaymentContext = createContext();

// COMPONENT START
export default function Payment() {
  // VARIABLES
  const { clientSecret, statusClientSecret } = useGetClientSecret();

  // FUNCTIONS

  // JSX
  return (
    <PaymentContext.Provider value={{ clientSecret, statusClientSecret }}>
      <div className="grid grid-rows-[auto_1fr_auto]">
        {/* DIVIDER payment page header */}
        <InAppHeader />

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
      </div>
    </PaymentContext.Provider>
  );
  // JSX
}
// COMPONENT END
