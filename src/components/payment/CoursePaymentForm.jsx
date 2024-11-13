import Button from "@mui/material/Button";
import FormLabel from "../FormLabel";
import FormRow from "../FormRow";
import FormTextField from "../FormTextField";
import { Checkbox } from "@mui/material";

// COMPONENT START
export default function CoursePaymentForm() {
  // VARIABLES

  // FUNCTIONS

  const coursePaymentFormSubmit = () => {
    console.log("form submit");
  };

  // JSX
  return (
    <form className="flex flex-col gap-[10px]">
      <FormRow>
        <FormLabel htmlFor={"nameOnCard"} label={"Name on card"} />
        <FormTextField id={"nameOnCard"} placeholder={"Enter name on card"} />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor={"cardNumber"} label={"Card number"} />
        <FormTextField id={"cardNumber"} placeholder={"Enter card number"} />
      </FormRow>
      <FormRow>
        <FormLabel
          htmlFor={"expirationDate"}
          label={"Expiration date (MM/YY)"}
        />
        <FormTextField
          id={"expirationDate"}
          placeholder={"Enter expiration date"}
        />
      </FormRow>
      <FormRow>
        <FormLabel htmlFor={"cardCvc"} label={"CVC"} />
        <FormTextField id={"cardCvc"} placeholder={"Enter cvc"} />
      </FormRow>

      <FormRow flexColType="row">
        <div className="flex justify-center">
          <Checkbox
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
        </div>
      </FormRow>

      <FormRow>
        <Button
          onClick={() => coursePaymentFormSubmit()}
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
  // JSX
}
// COMPONENT END
