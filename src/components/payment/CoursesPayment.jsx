import CoursePaymentForm from "./CoursePaymentForm";
import CoursePaymentHeader from "./CoursePaymentHeader";

// COMPONENT START
export default function CoursesPayment() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <section className="shadow-basicShadow grid grid-rows-[auto_1fr] gap-[20px] rounded-[8px] p-[10px]">
      {/* header */}
      <CoursePaymentHeader />

      <section>
        <CoursePaymentForm />
      </section>
    </section>
  );
  // JSX
}
// COMPONENT END
