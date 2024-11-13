import Button from "@mui/material/Button";
import FormLabel from "../FormLabel";
import FormRow from "../FormRow";
import FormTextField from "../FormTextField";
import { Checkbox } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

// COMPONENT START
export default function CoursePaymentForm() {
  //
  const { handleSubmit, register, control } = useForm();

  // FUNCTIONS

  const coursePaymentFormSubmit = (data) => {
    console.log(data); // data will now contain the form values
  };

  const submitError = (errors) => {
    console.log("error in submission", errors);
  };

  // JSX
  return (
    <form
      className="flex flex-col gap-[10px]"
      onSubmit={handleSubmit(coursePaymentFormSubmit, submitError)} // handleSubmit will trigger form submission
    >
      <FormRow>
        <FormLabel htmlFor={"nameOnCard"} label={"Name on card"} />
        <FormTextField
          register={register}
          id={"nameOnCard"}
          placeholder={"Enter name on card"}
        />
      </FormRow>

      <FormRow>
        <FormLabel htmlFor={"cardNumber"} label={"Card number"} />
        <FormTextField
          register={register}
          id={"cardNumber"}
          placeholder={"Enter card number"}
        />
      </FormRow>

      <FormRow>
        <FormLabel
          htmlFor={"expirationDate"}
          label={"Expiration date (MM/YY)"}
        />
        <FormTextField
          register={register}
          id={"expirationDate"}
          placeholder={"Enter expiration date"}
        />
      </FormRow>

      <FormRow>
        <FormLabel htmlFor={"cardCvc"} label={"CVC"} />
        <FormTextField
          register={register}
          id={"cardCvc"}
          placeholder={"Enter cvc"}
        />
      </FormRow>

      <FormRow flexColType="row">
        <div className="flex justify-center">
          <Controller
            name="fasterCheckOut"
            control={control}
            render={({ field }) => (
              <>
                <Checkbox
                  {...field}
                  id={"fasterCheckOut"}
                  sx={{
                    margin: "0px",
                    color: "#49BBBD",
                    "&.Mui-checked": {
                      color: "#49BBBD",
                    },
                  }}
                />

                <FormLabel
                  htmlFor={"fasterCheckOut"}
                  label={"Save my information for faster checkout"}
                />
              </>
            )}
          />
        </div>
      </FormRow>

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
