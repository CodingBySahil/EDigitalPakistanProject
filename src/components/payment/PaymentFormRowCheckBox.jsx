import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { Checkbox } from "@mui/material";

import FormRow from "../FormRow";
import FormLabel from "../FormLabel";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// COMPONENT START
export default function PaymentFormRowCheckBox({ control }) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <FormRow flexColType="row">
      <div className="flex justify-center">
        <Controller
          defaultValue={false}
          name="fasterCheckOut"
          control={control}
          render={({ field }) => (
            <>
              <Checkbox
                {...label}
                {...field}
                id={"fasterCheckOut"}
                sx={{
                  margin: "0px",
                  color: "#49BBBD",
                  "&.Mui-checked": {
                    color: "#49BBBD",
                  },
                }}
                defaultChecked={false}
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
  control: PropTypes.object,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
