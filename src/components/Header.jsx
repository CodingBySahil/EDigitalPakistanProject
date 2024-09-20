import { Link } from "react-router-dom";
import TopNav from "./TopNav";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <>
      <div className="overflow-hidden  ">
        <TopNav />
        <img
          className="absolute top-0 -mt-16 lg:-mt-4 left-0 w-full min-h-[60vh] md:min-h-[45vh] object-cover"
          alt=""
          src="/headerbg.svg"
        />
        <div className="container mx-auto my-12 absolute z-10 left-0 right-0">
          <div className="flex flex-col lg:flex-row p-6 lg:pt-[11rem] items-center lg:items-start rounded-lg border pt-10">
            {/* Text Section */}
            <div className="lg:w-7/12  lg:px-10 lg:py-2 flex flex-col items-center lg:items-start">
              <div className="text-center lg:text-left mb-2">
                <h2 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[3rem] xl:text-[3.5rem] text-white leading-tight mb-6 md:mb-4">
                  <span className="text-black font-extrabold">Learning</span>
                  <span> Online is now </span>
                  much easier
                </h2>
              </div>

              <div className="mb-2 lg:mb-2 -mt-10 sm:mt-0 text-center lg:text-left">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[2.3rem] font-medium tracking-tighter w-full sm:w-4/5 lg:w-3/4 mx-auto lg:mx-0 text-white">
                  with
                  <span className="text-black font-semibold">
                    {" "}
                    Digital Accelerated Learning Pathways{" "}
                  </span>
                  - an interesting platform that will teach you in a more
                  interactive way
                </p>
              </div>

              {/* Button Section */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Link
                  className="shadow-lg rounded-2xl bg-gray-300 py-3 px-5 md:py-4 md:px-6 tracking-[0.02em] font-medium text-white no-underline text-lg md:text-xl lg:text-2xl"
                  to="#"
                  role="button"
                >
                  Join for free
                </Link>
                <Link
                  className="text-black no-underline text-lg md:text-xl lg:text-2xl"
                  to="#"
                  role="button"
                >
                  Watch how it works
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-5/12 lg:ml-6 mt-6 lg:mt-0 p-0 overflow-hidden hidden lg:flex">
              <img
                className="w-full h-auto object-cover rounded-[28px] md:rounded-[20px] lg:rounded-[28px] max-h-[500px] md:max-h-[600px] lg:max-h-[700px]"
                src="/alp-center-amrait-2-1@2x.png"
                alt="Group of students"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
