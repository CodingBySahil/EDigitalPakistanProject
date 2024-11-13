import Button from "@mui/material/Button";
import FormLabel from "../FormLabel";
import FormRow from "../FormRow";
import FormTextField from "../FormTextField";
import { Checkbox } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import FormErrorDisplay from "../FormErrorDisplay";

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
          validationObj={{
            required: "Name on card is required", // Optional: Add a message if required
            pattern: {
              value: /^[A-Za-z]+$/, // Allows only uppercase and lowercase letters
              message: "Name on card should only contain letters and spaces",
            },
            maxLength: {
              value: 50,
              message: "Name on card should not exceed 50 characters",
            },
          }}
        />
        {errors?.nameOnCard && (
          <FormErrorDisplay>{errors?.nameOnCard?.message}</FormErrorDisplay>
        )}
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
