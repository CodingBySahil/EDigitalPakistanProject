import PropTypes from "prop-types";

import { useGetScreenHeight } from "../hooks/useGetScreenHeight";

// COMPONENT START
export default function ScrollableBody({
  pageHeaderHeight = 60,
  children,
  paddingX = 15,
}) {
  // VARIABLES
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX
  return (
    <div
      style={{
        height: `calc(${screenHeight}px - ${pageHeaderHeight}px)`,
        paddingLeft: `${paddingX}px`,
        paddingRight: `${paddingX}px`,
      }}
      className="overflow-x-hidden overflow-y-auto pb-[50px]"
    >
      {children}
    </div>
  );
  // JSX
}
// COMPONENT END

ScrollableBody.propTypes = {
  paddingX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pageHeaderHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};
//size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
