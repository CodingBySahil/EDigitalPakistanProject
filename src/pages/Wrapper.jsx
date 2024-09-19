import AllInOne from "../components/AllInOne";
import Footer from "../components/Footer";
import GroupComponent1 from "../components/GroupComponent1";
import Header from "../components/Header";
import OurFeatures from "../components/OurFeatures";
import WhatIsTOTC from "../components/WhatIsTOTC";
import YouCanDoWithTOTC from "../components/YouCanDoWithTOTC";
import SelfAssessments from "../components/SelfAssessments";
import AlpCurriculum from "../components/AlpCurriculum";

const Wrapper = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <Header />
      <AllInOne />
      <WhatIsTOTC />
      <YouCanDoWithTOTC />
      <OurFeatures />
      <GroupComponent1 />

      <SelfAssessments />
      <AlpCurriculum className="mt-48" />

      <Footer/>
    </div>
  );
};

export default Wrapper;
