import { PropTypes } from 'prop-types';
import AllInOne from "../components/AllInOne";
import Footer from "../components/Footer";
import GroupComponent1 from "../components/GroupComponent1";
import Header from "../components/Header";
import OurFeatures from "../components/OurFeatures";
import WhatIsTOTC from "../components/WhatIsTOTC";
import YouCanDoWithTOTC from "../components/YouCanDoWithTOTC";
import SelfAssessments from "../components/SelfAssessments";
import AlpCurriculum from "../components/AlpCurriculum";
import TitleLeftAlign from "../components/TitleLeftAlign";

const Wrapper = ({ onLogout}) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <Header onLogout={onLogout} isAuthenticated={isAuthenticated} />
      <AllInOne />
      <WhatIsTOTC />
      <YouCanDoWithTOTC />
      <OurFeatures />
      <GroupComponent1 />

      <SelfAssessments />
      <AlpCurriculum className="mt-48" />
      <TitleLeftAlign />

      <Footer />
    </div>
  );
};

// adding props validation
Wrapper.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
export default Wrapper;
