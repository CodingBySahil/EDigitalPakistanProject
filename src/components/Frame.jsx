import { useMemo } from "react";
import PropTypes from "prop-types";

const Frame = ({
  className = "",
  book,
  class6th,
  frameDivWidth,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  frameDivHeight,
  frameDivWidth1,
  frameDivHeight1,
  frameDivTop1,
  frameDivLeft1,
  frameDivWidth2,
  frameDivHeight2,
  bookIconTop,
  bookIconLeft,
  bookIconWidth,
  bookIconHeight,
  bookIconRight,
  bookIconOverflow,
  frameDivHeight3,
  frameDivTop2,
  frameDivLeft2,
  frameDivWidth3,
  frameDivHeight4,
  frameDivTop3,
  frameDivLeft3,
  frameDivWidth4,
  frameDivHeight5,
  courseTextbooksIncludeTop,
  courseTextbooksIncludeLeft,
  courseTextbooksIncludeFontSize,
  courseTextbooksIncludeWidth,
  frameDivTop4,
  frameDivLeft4,
  frameDivWidth5,
  frameDivHeight6,
  frameDivTop5,
  frameDivLeft5,
  frameDivWidth6,
  frameDivHeight7,
  ratingTop,
  ratingLeft,
  ratingWidth,
  ratingHeight,
  frameDivTop6,
  frameDivLeft6,
  frameDivWidth7,
  frameDivHeight8,
  frameDivTop7,
  frameDivLeft7,
  frameDivWidth8,
  frameDivHeight9,
  rs1500Top,
  rs1500Left,
  rs1500FontSize,
  starIconTop,
  starIconLeft,
  starIconWidth,
  starIconHeight,
  starIconTop1,
  starIconLeft1,
  starIconWidth1,
  starIconHeight1,
  starIconTop2,
  starIconLeft2,
  starIconWidth2,
  starIconHeight2,
  starIconTop3,
  starIconLeft3,
  starIconWidth3,
  starIconHeight3,
  starIconTop4,
  starIconLeft4,
  starIconWidth4,
  starIconHeight4,
  courseTextbooksContainerTop,
  courseTextbooksContainerLeft,
  courseTextbooksContainerFontSize,
  frameDivTop8,
  frameDivLeft8,
  frameDivWidth9,
  frameDivHeight10,
  eXPLORETop,
  eXPLORELeft,
  eXPLOREFontSize,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
      height: frameDivHeight,
    };
  }, [
    frameDivWidth,
    frameDivPosition,
    frameDivTop,
    frameDivLeft,
    frameDivHeight,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth1,
      height: frameDivHeight1,
    };
  }, [frameDivWidth1, frameDivHeight1]);

  const frameDiv2Style = useMemo(() => {
    return {
      top: frameDivTop1,
      left: frameDivLeft1,
      width: frameDivWidth2,
      height: frameDivHeight2,
    };
  }, [frameDivTop1, frameDivLeft1, frameDivWidth2, frameDivHeight2]);

  const bookIconStyle = useMemo(() => {
    return {
      top: bookIconTop,
      left: bookIconLeft,
      width: bookIconWidth,
      height: bookIconHeight,
      right: bookIconRight,
      overflow: bookIconOverflow,
    };
  }, [
    bookIconTop,
    bookIconLeft,
    bookIconWidth,
    bookIconHeight,
    bookIconRight,
    bookIconOverflow,
  ]);

  const frameDiv3Style = useMemo(() => {
    return {
      height: frameDivHeight3,
    };
  }, [frameDivHeight3]);

  const frameDiv4Style = useMemo(() => {
    return {
      top: frameDivTop2,
      left: frameDivLeft2,
      width: frameDivWidth3,
      height: frameDivHeight4,
    };
  }, [frameDivTop2, frameDivLeft2, frameDivWidth3, frameDivHeight4]);

  const frameDiv5Style = useMemo(() => {
    return {
      top: frameDivTop3,
      left: frameDivLeft3,
      width: frameDivWidth4,
      height: frameDivHeight5,
    };
  }, [frameDivTop3, frameDivLeft3, frameDivWidth4, frameDivHeight5]);

  const courseTextbooksIncludeStyle = useMemo(() => {
    return {
      top: courseTextbooksIncludeTop,
      left: courseTextbooksIncludeLeft,
      fontSize: courseTextbooksIncludeFontSize,
      width: courseTextbooksIncludeWidth,
    };
  }, [
    courseTextbooksIncludeTop,
    courseTextbooksIncludeLeft,
    courseTextbooksIncludeFontSize,
    courseTextbooksIncludeWidth,
  ]);

  const frameDiv6Style = useMemo(() => {
    return {
      top: frameDivTop4,
      left: frameDivLeft4,
      width: frameDivWidth5,
      height: frameDivHeight6,
    };
  }, [frameDivTop4, frameDivLeft4, frameDivWidth5, frameDivHeight6]);

  const frameDiv7Style = useMemo(() => {
    return {
      top: frameDivTop5,
      left: frameDivLeft5,
      width: frameDivWidth6,
      height: frameDivHeight7,
    };
  }, [frameDivTop5, frameDivLeft5, frameDivWidth6, frameDivHeight7]);

  const ratingStyle = useMemo(() => {
    return {
      top: ratingTop,
      left: ratingLeft,
      width: ratingWidth,
      height: ratingHeight,
    };
  }, [ratingTop, ratingLeft, ratingWidth, ratingHeight]);

  const frameDiv8Style = useMemo(() => {
    return {
      top: frameDivTop6,
      left: frameDivLeft6,
      width: frameDivWidth7,
      height: frameDivHeight8,
    };
  }, [frameDivTop6, frameDivLeft6, frameDivWidth7, frameDivHeight8]);

  const frameDiv9Style = useMemo(() => {
    return {
      top: frameDivTop7,
      left: frameDivLeft7,
      width: frameDivWidth8,
      height: frameDivHeight9,
    };
  }, [frameDivTop7, frameDivLeft7, frameDivWidth8, frameDivHeight9]);

  const rs1500Style = useMemo(() => {
    return {
      top: rs1500Top,
      left: rs1500Left,
      fontSize: rs1500FontSize,
    };
  }, [rs1500Top, rs1500Left, rs1500FontSize]);

  const starIconStyle = useMemo(() => {
    return {
      top: starIconTop,
      left: starIconLeft,
      width: starIconWidth,
      height: starIconHeight,
    };
  }, [starIconTop, starIconLeft, starIconWidth, starIconHeight]);

  const starIcon1Style = useMemo(() => {
    return {
      top: starIconTop1,
      left: starIconLeft1,
      width: starIconWidth1,
      height: starIconHeight1,
    };
  }, [starIconTop1, starIconLeft1, starIconWidth1, starIconHeight1]);

  const starIcon2Style = useMemo(() => {
    return {
      top: starIconTop2,
      left: starIconLeft2,
      width: starIconWidth2,
      height: starIconHeight2,
    };
  }, [starIconTop2, starIconLeft2, starIconWidth2, starIconHeight2]);

  const starIcon3Style = useMemo(() => {
    return {
      top: starIconTop3,
      left: starIconLeft3,
      width: starIconWidth3,
      height: starIconHeight3,
    };
  }, [starIconTop3, starIconLeft3, starIconWidth3, starIconHeight3]);

  const starIcon4Style = useMemo(() => {
    return {
      top: starIconTop4,
      left: starIconLeft4,
      width: starIconWidth4,
      height: starIconHeight4,
    };
  }, [starIconTop4, starIconLeft4, starIconWidth4, starIconHeight4]);

  const courseTextbooksContainerStyle = useMemo(() => {
    return {
      top: courseTextbooksContainerTop,
      left: courseTextbooksContainerLeft,
      fontSize: courseTextbooksContainerFontSize,
    };
  }, [
    courseTextbooksContainerTop,
    courseTextbooksContainerLeft,
    courseTextbooksContainerFontSize,
  ]);

  const frameDiv10Style = useMemo(() => {
    return {
      top: frameDivTop8,
      left: frameDivLeft8,
      width: frameDivWidth9,
      height: frameDivHeight10,
    };
  }, [frameDivTop8, frameDivLeft8, frameDivWidth9, frameDivHeight10]);

  const eXPLOREStyle = useMemo(() => {
    return {
      top: eXPLORETop,
      left: eXPLORELeft,
      fontSize: eXPLOREFontSize,
    };
  }, [eXPLORETop, eXPLORELeft, eXPLOREFontSize]);

  return (
    <div
      className={`w-[616px] relative rounded-26xl bg-white max-w-full flex flex-row items-center justify-start text-left text-base text-black font-poppins ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[267px] relative h-[353px]" style={frameDiv1Style}>
        <div
          className="absolute top-[10px] left-[10px] w-[247px] h-[333px]"
          style={frameDiv2Style}
        >
          <img
            className="absolute top-[10px] left-[10px] w-[227px] h-[313px] object-cover"
            alt=""
            src={book}
            style={bookIconStyle}
          />
        </div>
      </div>
      <div className="flex-1 relative h-[204px]" style={frameDiv3Style}>
        <div
          className="absolute top-[10px] left-[0px] w-[359px] h-[194px]"
          style={frameDiv4Style}
        >
          <div
            className="absolute top-[10px] left-[10px] w-[339px] h-[89px] text-slategray-100"
            style={frameDiv5Style}
          >
            <div
              className="absolute top-[10px] left-[10px] leading-[180%] inline-block w-[319px]"
              style={courseTextbooksIncludeStyle}
            >
              Course textbooks, include all 7 subjects taught in Govt; Middle
              schools of Khyber Pakhtnunkhwa
            </div>
          </div>
          <div
            className="absolute top-[137px] left-[10px] w-[339px] h-[57px] text-xl"
            style={frameDiv6Style}
          >
            <div
              className="absolute top-[10px] left-[10px] w-[201px] h-[61px]"
              style={frameDiv7Style}
            >
              <div
                className="absolute top-[10px] left-[10px] bg-white w-[181px] h-[41px]"
                style={ratingStyle}
              >
                <div
                  className="absolute top-[-6.5px] left-[0px] w-[121px] h-[54px]"
                  style={frameDiv8Style}
                >
                  <div
                    className="absolute top-[10px] left-[10px] w-[101px] h-[34px]"
                    style={frameDiv9Style}
                  >
                    <b
                      className="absolute top-[10px] left-[10px] leading-[180%]"
                      style={rs1500Style}
                    >
                      Rs. 1500
                    </b>
                  </div>
                </div>
                <img
                  className="absolute top-[4.5px] left-[125px] w-8 h-8 overflow-hidden"
                  alt=""
                  src="/star.svg"
                  style={starIconStyle}
                />
                <img
                  className="absolute top-[4.5px] left-[161px] w-8 h-8 overflow-hidden"
                  alt=""
                  src="/star.svg"
                  style={starIcon1Style}
                />
                <img
                  className="absolute top-[4.5px] left-[197px] w-8 h-8 overflow-hidden"
                  alt=""
                  src="/star.svg"
                  style={starIcon2Style}
                />
                <img
                  className="absolute top-[4.5px] left-[233px] w-8 h-8 overflow-hidden"
                  alt=""
                  src="/star.svg"
                  style={starIcon3Style}
                />
                <img
                  className="absolute top-[4.5px] left-[269px] w-8 h-8 overflow-hidden"
                  alt=""
                  src="/star.svg"
                  style={starIcon4Style}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute top-[-63px] left-[17px] text-7xl leading-[45px] font-black font-roboto"
            style={courseTextbooksContainerStyle}
          >
            <p className="m-0">Course - textbooks</p>
            <p className="m-0">{class6th}</p>
          </div>
        </div>
        <div
          className="absolute top-[210px] left-[12px] [filter:drop-shadow(0px_13px_8px_rgba(0,_0,_0,_0.3))] rounded-3xl border-darkturquoise-200 border-[1px] border-solid box-border w-[286px] h-14 text-xl text-darkturquoise-200"
          style={frameDiv10Style}
        >
          <b
            className="absolute top-[10px] left-[99.5px] leading-[180%]"
            style={eXPLOREStyle}
          >
            EXPLORE
          </b>
        </div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
  book: PropTypes.string,
  class6th: PropTypes.string,

  /** Style props */
  frameDivWidth: PropTypes.any,
  frameDivPosition: PropTypes.any,
  frameDivTop: PropTypes.any,
  frameDivLeft: PropTypes.any,
  frameDivHeight: PropTypes.any,
  frameDivWidth1: PropTypes.any,
  frameDivHeight1: PropTypes.any,
  frameDivTop1: PropTypes.any,
  frameDivLeft1: PropTypes.any,
  frameDivWidth2: PropTypes.any,
  frameDivHeight2: PropTypes.any,
  bookIconTop: PropTypes.any,
  bookIconLeft: PropTypes.any,
  bookIconWidth: PropTypes.any,
  bookIconHeight: PropTypes.any,
  bookIconRight: PropTypes.any,
  bookIconOverflow: PropTypes.any,
  frameDivHeight3: PropTypes.any,
  frameDivTop2: PropTypes.any,
  frameDivLeft2: PropTypes.any,
  frameDivWidth3: PropTypes.any,
  frameDivHeight4: PropTypes.any,
  frameDivTop3: PropTypes.any,
  frameDivLeft3: PropTypes.any,
  frameDivWidth4: PropTypes.any,
  frameDivHeight5: PropTypes.any,
  courseTextbooksIncludeTop: PropTypes.any,
  courseTextbooksIncludeLeft: PropTypes.any,
  courseTextbooksIncludeFontSize: PropTypes.any,
  courseTextbooksIncludeWidth: PropTypes.any,
  frameDivTop4: PropTypes.any,
  frameDivLeft4: PropTypes.any,
  frameDivWidth5: PropTypes.any,
  frameDivHeight6: PropTypes.any,
  frameDivTop5: PropTypes.any,
  frameDivLeft5: PropTypes.any,
  frameDivWidth6: PropTypes.any,
  frameDivHeight7: PropTypes.any,
  ratingTop: PropTypes.any,
  ratingLeft: PropTypes.any,
  ratingWidth: PropTypes.any,
  ratingHeight: PropTypes.any,
  frameDivTop6: PropTypes.any,
  frameDivLeft6: PropTypes.any,
  frameDivWidth7: PropTypes.any,
  frameDivHeight8: PropTypes.any,
  frameDivTop7: PropTypes.any,
  frameDivLeft7: PropTypes.any,
  frameDivWidth8: PropTypes.any,
  frameDivHeight9: PropTypes.any,
  rs1500Top: PropTypes.any,
  rs1500Left: PropTypes.any,
  rs1500FontSize: PropTypes.any,
  starIconTop: PropTypes.any,
  starIconLeft: PropTypes.any,
  starIconWidth: PropTypes.any,
  starIconHeight: PropTypes.any,
  starIconTop1: PropTypes.any,
  starIconLeft1: PropTypes.any,
  starIconWidth1: PropTypes.any,
  starIconHeight1: PropTypes.any,
  starIconTop2: PropTypes.any,
  starIconLeft2: PropTypes.any,
  starIconWidth2: PropTypes.any,
  starIconHeight2: PropTypes.any,
  starIconTop3: PropTypes.any,
  starIconLeft3: PropTypes.any,
  starIconWidth3: PropTypes.any,
  starIconHeight3: PropTypes.any,
  starIconTop4: PropTypes.any,
  starIconLeft4: PropTypes.any,
  starIconWidth4: PropTypes.any,
  starIconHeight4: PropTypes.any,
  courseTextbooksContainerTop: PropTypes.any,
  courseTextbooksContainerLeft: PropTypes.any,
  courseTextbooksContainerFontSize: PropTypes.any,
  frameDivTop8: PropTypes.any,
  frameDivLeft8: PropTypes.any,
  frameDivWidth9: PropTypes.any,
  frameDivHeight10: PropTypes.any,
  eXPLORETop: PropTypes.any,
  eXPLORELeft: PropTypes.any,
  eXPLOREFontSize: PropTypes.any,
};

export default Frame;
