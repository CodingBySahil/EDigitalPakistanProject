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
      className="mt-[5px] h-[35px] w-full rounded-[5px] border border-solid border-slate-200 pl-[10px] text-[14px] focus:outline-none focus:ring-[1px] focus:ring-brand-color-cyan"
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
