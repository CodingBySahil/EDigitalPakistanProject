import PropTypes from "prop-types";

import { useGetScreenHeight } from "../hooks/useGetScreenHeight";

// COMPONENT START
export default function ScrollableBody({ pageHeaderHeight = 50, children }) {
  // VARIABLES
  const screenHeight = useGetScreenHeight();

  // FUNCTIONS

  // JSX
  return (
    <div
      style={{
        height: `calc(${screenHeight}px - ${pageHeaderHeight}px)`,
      }}
      className="overflow-y-auto overflow-x-hidden"
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
