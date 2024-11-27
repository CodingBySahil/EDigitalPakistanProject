import PropTypes from "prop-types";

// COMPONENT START
export default function FormTextField({
  validationObj = {},
  register,
  placeholder,
  id,
}) {
  // VARIABLES

  // FUNCTIONS

  // JSX
  return (
    <input
      id={id}
      {...register(`${id}`, { ...validationObj })}
      type="text"
      placeholder={placeholder}
      className="mt-[5px] rounded-[5px] bg-slate-100 p-[8px] text-[16px] focus:outline-none"
    />
  );
  // JSX
}

FormTextField.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  register: PropTypes.func,
  validationObj: PropTypes.object,
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
// COMPONENT END
