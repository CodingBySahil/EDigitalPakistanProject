import PropTypes from "prop-types";

import FormErrorDisplay from "../FormErrorDisplay";
import FormLabel from "../FormLabel";
import FormRow from "../FormRow";
import FormTextField from "../FormTextField";

// COMPONENT START
export default function PaymentFormRowExpiration({ register, errors }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <FormRow>
      <FormLabel htmlFor={"expirationDate"} label={"Expiration date (MM/YY)"} />
      <FormTextField
        register={register}
        id={"expirationDate"}
        placeholder={"Enter expiration date"}
        validationObj={{
          required: "Expiration date is required",
          pattern: {
            value: /^(0[1-9]|1[0-2])\/\d{2}$/, // Matches MM/YY format with MM between 01 and 12
            message: "Expiration date must be in MM/YY format",
          },
          validate: (value) => {
            const [month, year] = value.split("/").map(Number);
            const currentDate = new Date();
            const inputDate = new Date(`20${year}`, month - 1); // Convert to a full date format
            if (inputDate < currentDate) {
              return "Expiration date cannot be in the past";
            }
            return true;
          },
        }}
      />
      {errors?.expirationDate && (
        <FormErrorDisplay>{errors?.expirationDate?.message}</FormErrorDisplay>
      )}
    </FormRow>
  );
  // JSX
}

PaymentFormRowExpiration.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
// COMPONENT END
