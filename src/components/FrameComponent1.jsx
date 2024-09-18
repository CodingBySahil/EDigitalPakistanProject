import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  propBackgroundColor,
  loremIpsum,
  frameDivHeight,
  frameDivWidth,
  frameDivRight,
  frameDivBottom,
  frameDivLeft,
}) => {
  const titleStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv11Style = useMemo(() => {
    return {
      height: frameDivHeight,
      width: frameDivWidth,
      right: frameDivRight,
      bottom: frameDivBottom,
      left: frameDivLeft,
    };
  }, [
    frameDivHeight,
    frameDivWidth,
    frameDivRight,
    frameDivBottom,
    frameDivLeft,
  ]);

  return (
    <div
      className={`absolute h-[17.68%] w-[16.48%] top-[0%] right-[83.12%] bottom-[82.32%] left-[0.4%] flex flex-col items-center justify-center p-[0.625rem] box-border text-center text-[1.938rem] text-gray-600 font-roboto ${className}`}
      style={frameDiv11Style}
    >
      <div className="w-[16.938rem] flex flex-col items-start justify-start p-[0.625rem] box-border">
        <div
          className="self-stretch shadow-[0px_18px_21px_rgba(0,_0,_0,_0.31)] rounded-mini bg-lightseagreen overflow-hidden flex flex-row items-start justify-start p-[0.625rem]"
          style={titleStyle}
        >
          <div className="w-[14.438rem] relative font-extrabold inline-block shrink-0">
            {loremIpsum}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  loremIpsum: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  frameDivHeight: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivRight: PropTypes.any,
  frameDivBottom: PropTypes.any,
  frameDivLeft: PropTypes.any,
};

export default FrameComponent1;
