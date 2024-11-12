import FormLabel from "../FormLabel";
import FormRow from "../FormRow";

// COMPONENT START
export default function CoursePaymentForm() {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <form className="flex flex-col gap-[10px]">
      <FormRow>
        <FormLabel label={"Name on card"} />
        <input
          type="text"
          placeholder="Enter name on card"
          className="w-full border border-black"
        />
      </FormRow>
    </form>
  );
  // JSX
}
// COMPONENT END
