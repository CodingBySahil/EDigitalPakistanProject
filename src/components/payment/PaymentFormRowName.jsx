import PropTypes from "prop-types";

import FormErrorDisplay from "../FormErrorDisplay";
import FormLabel from "../FormLabel";
import FormRow from "../FormRow";
import FormTextField from "../FormTextField";

// COMPONENT START
export default function PaymentFormRowName({ register, errors }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
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
  );
  // JSX
}

PaymentFormRowName.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
