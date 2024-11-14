import Button from "@mui/material/Button";
import FormLabel from "../FormLabel";
import FormRow from "../FormRow";
import { Controller, useForm } from "react-hook-form";
import FormErrorDisplay from "../FormErrorDisplay";
import PaymentFormRowName from "./PaymentFormRowName";
import PaymentFormRowCard from "./PaymentFormRowCard";
import PaymentFormRowExpiration from "./PaymentFormRowExpiration";
import PaymentFormRowCVC from "./PaymentFormRowCVC";
import PaymentFormRowCheckBox from "./PaymentFormRowCheckBox";

// COMPONENT START
export default function CoursePaymentForm() {
  //
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  // FUNCTIONS

  const coursePaymentFormSubmit = (data) => {
    console.log({
      ...data,
      fasterCheckOut:
        data?.fasterCheckOut === undefined || data?.fasterCheckOut === false
          ? false
          : true,
    }); // data will now contain the form values
  };

  // JSX
  return (
    <form
      className="flex flex-col gap-[10px]"
      onSubmit={handleSubmit(coursePaymentFormSubmit)} // handleSubmit will trigger form submission
    >
      <PaymentFormRowName register={register} errors={errors} />

      <PaymentFormRowCard register={register} errors={errors} />

      <PaymentFormRowExpiration register={register} errors={errors} />

      <PaymentFormRowCVC register={register} errors={errors} />

      <PaymentFormRowCheckBox control={control} />

      <FormRow>
        <Button
          type="submit" // use the type "submit" to trigger form submission
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
