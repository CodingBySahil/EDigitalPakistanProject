import GroupComponent1 from "../components/GroupComponent1";
import SelfAssessments from "../components/SelfAssessments";
import YouCanDoWithTOTC from "../components/YouCanDoWithTOTC";
import WhatIsTOTC from "../components/WhatIsTOTC";
import AllInOne from "../components/AllInOne";
import Class6th from "../components/Class6th";
import Class7th from "../components/Class7th";
import Class8th from "../components/Class8th";
import TitleLeftAlign from "../components/TitleLeftAlign";
import Header from "../components/Header";
import Frame from "../components/Frame";
import FrameComponent8 from "../components/FrameComponent8";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="w-full relative bg-white h-[572.563rem] overflow-hidden text-left text-[1.375rem] text-slategray-100 font-poppins">
      <div className="absolute top-[208.663rem] left-[13.313rem] w-[95.006rem] h-[165.213rem]">
        <b className="absolute top-[12.775rem] left-[38.438rem] text-[2.25rem] leading-[180%] inline-block w-[18.75rem] h-[4.088rem] text-darkslateblue-200">
          <span>{`Our `}</span>
          <span className="text-turquoise">Features</span>
        </b>
        <div className="absolute top-[16.356rem] left-[21rem] text-[1.5rem] leading-[180%] text-center inline-block w-[53.838rem] h-[5.413rem]">
          This very extraordinary feature, can make learning activities more
          efficient
        </div>
        <GroupComponent1 />
        <div className="absolute top-[0rem] left-[1.938rem] w-[93.063rem] h-[128.494rem]">
          <div className="absolute top-[97.825rem] left-[6.819rem] w-[41.025rem] h-[19.375rem]">
            <div className="absolute top-[9.313rem] left-[0rem] tracking-[0.02em] leading-[180%] font-medium inline-block w-[41.025rem] h-[10.063rem]">
              Encourage students to regularly self-assess their understanding of
              the material, reflecting on their learning process and adjusting
              their study plans as needed.
            </div>
            <div className="absolute top-[0rem] left-[0rem] text-[2.5rem] leading-[160%] inline-block w-[32.969rem] h-[8.05rem] text-darkslateblue-200">
              <span className="font-semibold">
                <span>{`Self-assessments, `}</span>
                <span className="text-turquoise">Quizzes</span>
                <span className="text-darkslateblue-200">{`, Tests, `}</span>
              </span>
              <span className="font-black text-lightseagreen">Exams</span>
            </div>
          </div>
          <SelfAssessments />
        </div>
        <div className="absolute top-[139.031rem] left-[0rem] w-[87.738rem] h-[26.181rem]">
          <div className="absolute top-[2.269rem] left-[55rem] w-[32.737rem] h-[19.375rem]">
            <div className="absolute top-[9.306rem] left-[0rem] tracking-[0.02em] leading-[180%] inline-block w-[32.737rem] h-[10.063rem]">
              Specialized condensed curriculum for both community teachers and
              out-of-school children, giving the student’s a second chance to
              get back into formal education.
            </div>
            <div className="absolute top-[0rem] left-[0.019rem] text-[2.5rem] leading-[160%] font-semibold inline-block w-[26.813rem] h-[8.05rem] text-darkslateblue-200">
              <span>{`ALP Curriculum `}</span>
              <span className="text-turquoise">home study</span>
            </div>
          </div>
          <img
            className="absolute top-[0rem] left-[0rem] w-[45.788rem] h-[26.181rem]"
            alt=""
            src="/group-106.svg"
          />
        </div>
      </div>
      <YouCanDoWithTOTC />
      <WhatIsTOTC />
      <AllInOne />
      <div className="absolute top-[379.75rem] left-[0rem] w-[119.969rem] h-[150.556rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-t-none rounded-br-[100px] rounded-bl-none bg-lightskyblue w-[97.431rem] h-[150.556rem] opacity-[0.2] mix-blend-normal" />
        <Class6th />
        <Class7th />
        <Class8th />
        <TitleLeftAlign />
      </div>
      <Header />
      <img
        className="absolute top-[239.063rem] left-[19.938rem] rounded-[21px] w-[31.813rem] h-[45.25rem] object-cover"
        alt=""
        src="/3@2x.png"
      />
      <img
        className="absolute top-[348.375rem] left-[17.813rem] w-[35.25rem] h-[22.625rem] object-cover"
        alt=""
        src="/image-16@2x.png"
      />
      <Frame
        book="/book-1@2x.png"
        class6th="Class - 6th"
        frameDivWidth="38.5rem"
        frameDivPosition="absolute"
        frameDivTop="419.438rem"
        frameDivLeft="73.375rem"
        frameDivHeight="unset"
        frameDivWidth1="16.688rem"
        frameDivHeight1="22.063rem"
        frameDivTop1="0.625rem"
        frameDivLeft1="0.625rem"
        frameDivWidth2="15.438rem"
        frameDivHeight2="20.813rem"
        bookIconTop="0.625rem"
        bookIconLeft="0.625rem"
        bookIconWidth="14.188rem"
        bookIconHeight="19.563rem"
        bookIconRight="unset"
        bookIconOverflow="unset"
        frameDivHeight3="12.75rem"
        frameDivTop2="0.625rem"
        frameDivLeft2="0rem"
        frameDivWidth3="22.438rem"
        frameDivHeight4="12.125rem"
        frameDivTop3="0.625rem"
        frameDivLeft3="0.625rem"
        frameDivWidth4="21.188rem"
        frameDivHeight5="5.563rem"
        courseTextbooksIncludeTop="0.625rem"
        courseTextbooksIncludeLeft="0.625rem"
        courseTextbooksIncludeFontSize="1rem"
        courseTextbooksIncludeWidth="19.938rem"
        frameDivTop4="8.563rem"
        frameDivLeft4="0.625rem"
        frameDivWidth5="21.188rem"
        frameDivHeight6="3.563rem"
        frameDivTop5="0.625rem"
        frameDivLeft5="0.625rem"
        frameDivWidth6="12.563rem"
        frameDivHeight7="3.813rem"
        ratingTop="0.625rem"
        ratingLeft="0.625rem"
        ratingWidth="11.313rem"
        ratingHeight="2.563rem"
        frameDivTop6="-0.406rem"
        frameDivLeft6="0rem"
        frameDivWidth7="7.563rem"
        frameDivHeight8="3.375rem"
        frameDivTop7="0.625rem"
        frameDivLeft7="0.625rem"
        frameDivWidth8="6.313rem"
        frameDivHeight9="2.125rem"
        rs1500Top="0.625rem"
        rs1500Left="0.625rem"
        rs1500FontSize="1.25rem"
        starIconTop="0.281rem"
        starIconLeft="7.813rem"
        starIconWidth="2rem"
        starIconHeight="2rem"
        starIconTop1="0.281rem"
        starIconLeft1="10.063rem"
        starIconWidth1="2rem"
        starIconHeight1="2rem"
        starIconTop2="0.281rem"
        starIconLeft2="12.313rem"
        starIconWidth2="2rem"
        starIconHeight2="2rem"
        starIconTop3="0.281rem"
        starIconLeft3="14.563rem"
        starIconWidth3="2rem"
        starIconHeight3="2rem"
        starIconTop4="0.281rem"
        starIconLeft4="16.813rem"
        starIconWidth4="2rem"
        starIconHeight4="2rem"
        courseTextbooksContainerTop="-3.937rem"
        courseTextbooksContainerLeft="1.063rem"
        courseTextbooksContainerFontSize="1.625rem"
        frameDivTop8="13.125rem"
        frameDivLeft8="0.75rem"
        frameDivWidth9="17.875rem"
        frameDivHeight10="3.5rem"
        eXPLORETop="0.625rem"
        eXPLORELeft="6.219rem"
        eXPLOREFontSize="1.25rem"
      />
      <Frame
        book="/image-17@2x.png"
        class6th="Class - 7th"
        frameDivWidth="42.313rem"
        frameDivPosition="absolute"
        frameDivTop="457.063rem"
        frameDivLeft="47.75rem"
        frameDivHeight="24.25rem"
        frameDivWidth1="16.688rem"
        frameDivHeight1="22.063rem"
        frameDivTop1="0.625rem"
        frameDivLeft1="0.625rem"
        frameDivWidth2="15.438rem"
        frameDivHeight2="20.813rem"
        bookIconTop="0.625rem"
        bookIconLeft="0.625rem"
        bookIconWidth="calc(100% - 21px)"
        bookIconHeight="19.5rem"
        bookIconRight="0.688rem"
        bookIconOverflow="hidden"
        frameDivHeight3="12.75rem"
        frameDivTop2="0.625rem"
        frameDivLeft2="0rem"
        frameDivWidth3="22.438rem"
        frameDivHeight4="12.125rem"
        frameDivTop3="0.625rem"
        frameDivLeft3="0.625rem"
        frameDivWidth4="21.188rem"
        frameDivHeight5="5.563rem"
        courseTextbooksIncludeTop="0.625rem"
        courseTextbooksIncludeLeft="0.625rem"
        courseTextbooksIncludeFontSize="1rem"
        courseTextbooksIncludeWidth="19.938rem"
        frameDivTop4="8.563rem"
        frameDivLeft4="0.625rem"
        frameDivWidth5="21.188rem"
        frameDivHeight6="3.563rem"
        frameDivTop5="0.625rem"
        frameDivLeft5="0.625rem"
        frameDivWidth6="12.563rem"
        frameDivHeight7="3.813rem"
        ratingTop="0.625rem"
        ratingLeft="0.625rem"
        ratingWidth="11.313rem"
        ratingHeight="2.563rem"
        frameDivTop6="-0.406rem"
        frameDivLeft6="0rem"
        frameDivWidth7="7.563rem"
        frameDivHeight8="3.375rem"
        frameDivTop7="0.625rem"
        frameDivLeft7="0.625rem"
        frameDivWidth8="6.313rem"
        frameDivHeight9="2.125rem"
        rs1500Top="0.625rem"
        rs1500Left="0.625rem"
        rs1500FontSize="1.25rem"
        starIconTop="0.281rem"
        starIconLeft="7.813rem"
        starIconWidth="2rem"
        starIconHeight="2rem"
        starIconTop1="0.281rem"
        starIconLeft1="10.063rem"
        starIconWidth1="2rem"
        starIconHeight1="2rem"
        starIconTop2="0.281rem"
        starIconLeft2="12.313rem"
        starIconWidth2="2rem"
        starIconHeight2="2rem"
        starIconTop3="0.281rem"
        starIconLeft3="14.563rem"
        starIconWidth3="2rem"
        starIconHeight3="2rem"
        starIconTop4="0.281rem"
        starIconLeft4="16.813rem"
        starIconWidth4="2rem"
        starIconHeight4="2rem"
        courseTextbooksContainerTop="-3.937rem"
        courseTextbooksContainerLeft="1.063rem"
        courseTextbooksContainerFontSize="1.625rem"
        frameDivTop8="13.125rem"
        frameDivLeft8="0.75rem"
        frameDivWidth9="17.875rem"
        frameDivHeight10="3.5rem"
        eXPLORETop="0.625rem"
        eXPLORELeft="6.219rem"
        eXPLOREFontSize="1.25rem"
      />
      <FrameComponent8 />
      <Footer />
    </div>
  );
};

export default Landing;
