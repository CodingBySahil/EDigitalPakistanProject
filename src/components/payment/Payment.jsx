import { useGetScreenHeight } from "../../hooks/useGetScreenHeight";
import ScrollableBody from "../ScrollableBody";
import CartSummary from "./CartSummary";
import CoursesPayment from "./CoursesPayment";
import OtherCoursesBuying from "./OtherCoursesBuying";

// COMPONENT START
export default function Payment() {
  // VARIABLES

  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX
  return (
    <div className="grid grid-rows-[60px_1fr]">
      {/* DIVIDER payment page header */}
      <header className="bg-brand-color-cyan">Header</header>

      <ScrollableBody>
        {/* DIVIDER payment body */}
        <main className="flex flex-col gap-[20px] pt-[10px]">
          {/* cart summary */}
          <CartSummary />

          {/* payment gateway */}
          <CoursesPayment />

          {/* other course */}
          <OtherCoursesBuying />
        </main>
        {/* DIVIDER payment footer */}
        <footer className="bg-blue-500">payment footer</footer>
      </ScrollableBody>
    </div>
  );
  // JSX
}
// COMPONENT END
