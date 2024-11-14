import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { Checkbox } from "@mui/material";

import FormRow from "../FormRow";
import FormLabel from "../FormLabel";

// COMPONENT START
export default function PaymentFormRowCheckBox({ control }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
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
  );
  // JSX
}

PaymentFormRowCheckBox.propTypes = {
  control: PropTypes.func,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
