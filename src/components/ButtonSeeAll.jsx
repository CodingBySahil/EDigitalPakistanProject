import { useMemo } from "react";
import PropTypes from "prop-types";

const ButtonSeeAll = ({
  className = "",
  propFlex,
  propAlignSelf,
  buttonSeeAllHeight,
  buttonSeeAllWidth,
  buttonSeeAllTop,
  buttonSeeAllRight,
  buttonSeeAllBottom,
  buttonSeeAllLeft,
}) => {
  const buttonSeeAllStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      height: buttonSeeAllHeight,
      width: buttonSeeAllWidth,
      top: buttonSeeAllTop,
      right: buttonSeeAllRight,
      bottom: buttonSeeAllBottom,
      left: buttonSeeAllLeft,
    };
  }, [
    propFlex,
    propAlignSelf,
    buttonSeeAllHeight,
    buttonSeeAllWidth,
    buttonSeeAllTop,
    buttonSeeAllRight,
    buttonSeeAllBottom,
    buttonSeeAllLeft,
  ]);

  return (
    <div
      className={`absolute h-[7.02%] w-[9.91%] top-[1.65%] right-[1.97%] bottom-[91.33%] left-[88.12%] text-left text-[1.5rem] text-darkturquoise-200 font-roboto ${className}`}
      style={buttonSeeAllStyle}
    >
      <div className="absolute top-[calc(50%_-_13.55px)] left-[0%] uppercase font-medium">
        See all
      </div>
      <img
        className="absolute h-[82.1%] w-[18.69%] top-[7.16%] right-[0%] bottom-[10.74%] left-[81.31%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/androidarrowforward.svg"
      />
    </div>
  );
};

ButtonSeeAll.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
  buttonSeeAllHeight: PropTypes.any,
  buttonSeeAllWidth: PropTypes.any,
  buttonSeeAllTop: PropTypes.any,
  buttonSeeAllRight: PropTypes.any,
  buttonSeeAllBottom: PropTypes.any,
  buttonSeeAllLeft: PropTypes.any,
};

export default ButtonSeeAll;
