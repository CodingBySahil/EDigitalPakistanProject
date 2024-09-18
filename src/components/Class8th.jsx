import FrameComponent1 from "./FrameComponent1";
import ButtonSeeAll from "./ButtonSeeAll";
import PropTypes from "prop-types";

const Class8th = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[111.813rem] left-[9.625rem] w-[107.938rem] h-[34.831rem] text-left text-[1.5rem] text-darkturquoise-200 font-roboto ${className}`}
    >
      <div className="absolute h-[14.77%] w-[97.43%] top-[85.23%] right-[1.97%] bottom-[0%] left-[0.59%] rounded-10xl-5 bg-black opacity-[0.05] mix-blend-normal" />
      <FrameComponent1
        propBackgroundColor="#171b41"
        loremIpsum="Class 8th "
        frameDivHeight="17.23%"
        frameDivWidth="16.85%"
        frameDivRight="83.15%"
        frameDivBottom="82.77%"
        frameDivLeft="0%"
      />
      <img
        className="absolute h-[76.58%] w-[9.8%] top-[20.03%] right-[37.1%] bottom-[3.39%] left-[53.1%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-14@2x.png"
      />
      <img
        className="absolute h-[82.5%] w-[76.14%] top-[15.07%] right-[22.7%] bottom-[2.42%] left-[1.16%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-15@2x.png"
      />
      <img
        className="absolute h-[76.58%] w-[9.8%] top-[16.87%] right-[7.68%] bottom-[6.55%] left-[82.52%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-17@2x.png"
      />
      <img
        className="absolute h-[76.58%] w-[9.8%] top-[17.94%] right-[14.49%] bottom-[5.47%] left-[75.72%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-18@2x.png"
      />
      <img
        className="absolute h-[76.58%] w-[9.8%] top-[16.33%] right-[0%] bottom-[7.09%] left-[90.2%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-19@2x.png"
      />
      <img
        className="absolute h-[76.58%] w-[9.8%] top-[18.12%] right-[29.71%] bottom-[5.29%] left-[60.49%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-16@2x.png"
      />
      <ButtonSeeAll />
    </div>
  );
};

Class8th.propTypes = {
  className: PropTypes.string,
};

export default Class8th;
