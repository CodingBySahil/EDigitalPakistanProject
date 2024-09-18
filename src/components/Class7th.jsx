import FrameComponent1 from "./FrameComponent1";
import ButtonSeeAll from "./ButtonSeeAll";
import PropTypes from "prop-types";

const Class7th = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[71.125rem] left-[9.625rem] w-[110.344rem] h-[33.938rem] text-center text-[1.938rem] text-gray-600 font-roboto ${className}`}
    >
      <div className="absolute h-[15.16%] w-[95.31%] top-[84.84%] right-[4.11%] bottom-[0%] left-[0.58%] rounded-10xl-5 bg-black opacity-[0.05] mix-blend-normal" />
      <img
        className="absolute h-[78.6%] w-[9.98%] top-[15.47%] right-[82.77%] bottom-[5.93%] left-[7.25%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-7@2x.png"
      />
      <img
        className="absolute h-[78.6%] w-[9.98%] top-[14.55%] right-[75.36%] bottom-[6.85%] left-[14.66%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-9@2x.png"
      />
      <img
        className="absolute h-[78.6%] w-[9.98%] top-[14%] right-[66.98%] bottom-[7.4%] left-[23.04%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-10@2x.png"
      />
      <img
        className="absolute h-[78.6%] w-[9.98%] top-[14.92%] right-[16.22%] bottom-[6.48%] left-[73.8%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-11@2x.png"
      />
      <img
        className="absolute h-[78.6%] w-[9.98%] top-[16.13%] right-[90.02%] bottom-[5.27%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-8@2x.png"
      />
      <img
        className="absolute h-[78.6%] w-[9.98%] top-[14.36%] right-[8.39%] bottom-[7.03%] left-[81.63%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-12@2x.png"
      />
      <img
        className="absolute h-[78.6%] w-[9.98%] top-[14.92%] right-[0%] bottom-[6.48%] left-[90.02%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-13@2x.png"
      />
      <FrameComponent1 loremIpsum="Class 7th " />
      <ButtonSeeAll
        propFlex="unset"
        propAlignSelf="unset"
        buttonSeeAllHeight="7.2%"
        buttonSeeAllWidth="9.7%"
        buttonSeeAllTop="1.62%"
        buttonSeeAllRight="4.11%"
        buttonSeeAllBottom="91.18%"
        buttonSeeAllLeft="86.2%"
      />
    </div>
  );
};

Class7th.propTypes = {
  className: PropTypes.string,
};

export default Class7th;
