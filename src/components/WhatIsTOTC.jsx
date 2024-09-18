import PropTypes from "prop-types";

const WhatIsTOTC = ({ className = "" }) => {
  return (
    <div
      className={`relative mx-auto max-w-screen-lg py-12 text-center text-[1.5rem] text-darkslateblue-200 font-poppins ${className}`}
    >
      <b className="text-[2.5rem] leading-[180%] block mb-4">
        <span>{`What is `}</span>
        <span className="text-turquoise">DALP?</span>
      </b>
      <div className="text-slategray-100 leading-[180%] mb-8 px-4 md:px-8">
        {`DALP is a Digital Accelerated Learning Pathways provides flexible digital learning pathways that ensure both in-school and out-of-school children can learn equally, bridging accessibility gaps and fostering inclusivity to equip all learners with the knowledge & skills they need.`}
      </div>
      <div className="text-[1.938rem] leading-[180%] mb-8">
        <i className="font-bold">{`Our vision is no more `}</i>
        <i className="uppercase font-extrabold text-lightseagreen">
          out-of-school
        </i>
        <i className="font-bold whitespace-pre-wrap"> children in Pakistan!</i>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-8">
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
          <img
            className=" w-full h-auto rounded-xl shadow-lg  object-cover"
            alt="For students"
            src="/group-23@2x.png"
          />
          <div className="absolute bottom-28 left-1/2">
            <div className=" transform -translate-x-1/2  py-2 px-4 my-7  text-white font-semibold text-lg">
              For students
            </div>
            <div className=" transform -translate-x-1/2 bg-deepskyblue-200 py-2 px-4 rounded-full text-white font-semibold text-lg">
              Enter classroom 
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

WhatIsTOTC.propTypes = {
  className: PropTypes.string,
};

export default WhatIsTOTC;
