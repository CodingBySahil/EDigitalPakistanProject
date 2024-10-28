import PropTypes from "prop-types";

export default function CourseCalendarToggleButton({ sideBarToggle, icon }) {
  return (
    <button
      className="cursor-pointer ml-[3px] mt-[10px] bg-brand-color-cyan px-[5px] py-[3px] text-white"
      onClick={() => sideBarToggle()}
    >
      {icon}
    </button>
  );
}

CourseCalendarToggleButton.propTypes = {
  sideBarToggle: PropTypes.func,
  icon: PropTypes.node,
};
