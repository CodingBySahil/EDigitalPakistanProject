import PropTypes from "prop-types";

import FormErrorDisplay from "../FormErrorDisplay";
import FormLabel from "../FormLabel";
import FormRow from "../FormRow";
import FormTextField from "../FormTextField";

// COMPONENT START
export default function PaymentFormRowCard({ register, errors }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <FormRow>
      <FormLabel htmlFor={"cardNumber"} label={"Card number"} />
      <FormTextField
        register={register}
        id={"cardNumber"}
        placeholder={"Enter card number"}
        validationObj={{
          required: "Card number is required",
          pattern: {
            value: /^\d{16}$/, // Matches exactly 16 digits
            message: "Card number must be a 16-digit number",
          },
          minLength: {
            value: 16,
            message: "Card number must be exactly 16 digits",
          },
          maxLength: {
            value: 16,
            message: "Card number must be exactly 16 digits",
          },
        }}
      />
      {errors?.cardNumber && (
        <FormErrorDisplay>{errors?.cardNumber?.message}</FormErrorDisplay>
      )}
    </FormRow>
  );
  // JSX
}

PaymentFormRowCard.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
// COMPONENT END
