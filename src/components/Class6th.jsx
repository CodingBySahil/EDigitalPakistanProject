import ButtonSeeAll from "./ButtonSeeAll";
import PropTypes from "prop-types";

const Class6th = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[29.188rem] left-[9.056rem] w-[106.375rem] h-[35.163rem] text-center text-[1.938rem] text-gray-600 font-roboto ${className}`}
    >
      <div className="absolute h-[14.75%] w-[96.94%] top-[85.32%] right-[1.93%] bottom-[-0.07%] left-[1.12%] shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] rounded-10xl-5 bg-firebrick opacity-[0.05] mix-blend-normal" />
      <img
        className="absolute h-[76.48%] w-[10.3%] top-[19.37%] right-[80.67%] bottom-[4.14%] left-[9.03%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/book@2x.png"
      />
      <img
        className="absolute h-[75.86%] w-[10.35%] top-[21.61%] right-[89.65%] bottom-[2.52%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-4@2x.png"
      />
      <img
        className="absolute h-[75.86%] w-[10.35%] top-[20.09%] right-[74.44%] bottom-[4.05%] left-[15.21%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-2@2x.png"
      />
      <img
        className="absolute h-[75.86%] w-[10.35%] top-[19.55%] right-[65.75%] bottom-[4.59%] left-[23.9%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-5@2x.png"
      />
      <img
        className="absolute h-[75.86%] w-[10.35%] top-[18.84%] right-[57.17%] bottom-[5.3%] left-[32.48%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english@2x.png"
      />
      <img
        className="absolute h-[75.86%] w-[10.35%] top-[18.84%] right-[40.35%] bottom-[5.3%] left-[49.3%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-6@2x.png"
      />
      <img
        className="absolute h-[75.86%] w-[10.35%] top-[18.31%] right-[49.05%] bottom-[5.83%] left-[40.59%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-1@2x.png"
      />
      <img
        className="absolute h-[75.86%] w-[10.35%] top-[19.73%] right-[81.83%] bottom-[4.41%] left-[7.81%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/english-3@2x.png"
      />
      <div className="absolute h-[17.06%] w-[17.1%] top-[0%] right-[82.72%] bottom-[82.94%] left-[0.18%] flex flex-col items-center justify-center p-[0.625rem] box-border">
        <div className="w-[16.938rem] flex flex-col items-start justify-start p-[0.625rem] box-border">
          <div className="self-stretch shadow-[0px_18px_21px_rgba(0,_0,_0,_0.31)] rounded-mini bg-red overflow-hidden flex flex-row items-start justify-start p-[0.625rem]">
            <div className="w-[14.438rem] relative font-extrabold inline-block shrink-0">{`Class 6th `}</div>
          </div>
        </div>
      </div>
      <ButtonSeeAll
        propFlex="unset"
        propAlignSelf="unset"
        buttonSeeAllHeight="6.95%"
        buttonSeeAllWidth="10.06%"
        buttonSeeAllTop="19.73%"
        buttonSeeAllRight="0.04%"
        buttonSeeAllBottom="73.32%"
        buttonSeeAllLeft="89.9%"
      />
    </div>
  );
};

Class6th.propTypes = {
  className: PropTypes.string,
};

export default Class6th;
