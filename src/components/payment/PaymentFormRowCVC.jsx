import PropTypes from "prop-types";

import FormErrorDisplay from "../FormErrorDisplay";
import FormLabel from "../FormLabel";
import FormRow from "../FormRow";
import FormTextField from "../FormTextField";

// COMPONENT START
export default function PaymentFormRowCVC({ register, errors }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <FormRow>
      <FormLabel htmlFor={"cardCvc"} label={"CVC"} />
      <FormTextField
        register={register}
        id={"cardCvc"}
        placeholder={"Enter CVC"}
        validationObj={{
          required: "CVC is required",
          pattern: {
            value: /^\d{3,4}$/, // Matches 3 or 4 digits
            message: "CVC must be a 3 or 4 digit number",
          },
        }}
      />
      {errors?.cardCvc && (
        <FormErrorDisplay>{errors?.cardCvc?.message}</FormErrorDisplay>
      )}
    </FormRow>
  );
  // JSX
}

PaymentFormRowCVC.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
// COMPONENT END
