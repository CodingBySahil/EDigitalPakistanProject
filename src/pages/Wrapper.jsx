import AllInOne from "../components/AllInOne";
import Footer from "../components/Footer";
import GroupComponent from "../components/GroupComponent";
import GroupComponent1 from "../components/GroupComponent1";
import Header from "../components/Header";
import OurFeatures from "../components/OurFeatures";
import WhatIsTOTC from "../components/WhatIsTOTC";
import YouCanDoWithTOTC from "../components/YouCanDoWithTOTC";

const Wrapper = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <Header />
      <AllInOne />
      <WhatIsTOTC />
      <YouCanDoWithTOTC />
      <OurFeatures/>
      <GroupComponent1/>
      <section className="relative">
      <div className="absolute ">
          
          <GroupComponent />
        </div>
        {/* <div className="relative  w-[87.738rem] h-[26.181rem]">
          <div className="absolute top-[2.269rem] left-[55rem] w-[32.737rem] h-[19.375rem]">
            <div className="absolute top-[0rem] left-[0.019rem] text-[2.5rem] leading-[160%] font-semibold block w-[26.813rem] h-[8.05rem] text-darkslateblue-200">
              <span> ALP Curriculum </span>
              <div className="text-turquoise">home study</div>
            </div>
            <div className="absolute top-[9.306rem] left-[0rem] tracking-[0.02em] leading-[180%] inline-block w-[32.737rem] h-[10.063rem]">
              Specialized condensed curriculum for both community teachers and
              out-of-school children, giving the student’s a second chance to
              get back into formal education.
            </div>
          </div>
          <img
            className=" w-[35.25rem] h-[22.625rem]"
            alt="img"
            src="/group-106.svg"
          />
          <img
        className="absolute top-12 left-2  w-[32rem] h-[19rem] object-cover"
        alt=""
        src="/image-16@2x.png"
      />
        </div> */}
      </section>

      {/* <Footer/> */}
    </div>
  );
};

export default Wrapper;
