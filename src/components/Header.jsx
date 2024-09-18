import TopNav from "./TopNav";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <>
      <div className="overflow-hidden">
        <TopNav />
        <img
          className="absolute top-0 -mt-2 left-0 w-full min-h-[50vh]"
          alt=""
          src="/headerbg.svg"
        />
        <div className="container mx-auto my-12 absolute z-10 left-0 right-0">
          <div className="flex flex-col lg:flex-row p-6 lg:pt-[11rem] items-center lg:items-start rounded-lg border pt-10">
            {/* Text Section */}
            <div className="lg:w-7/12  lg:p-10 lg:pt-6 flex flex-col items-center lg:items-start">
              <div className="text-center lg:text-left">
                <h2 className="font-semibold text-3xl sm:text-17xl md:text-21xl lg:text-[3rem] xl:text-[3.5rem] text-white leading-tight">
                  <span className="text-black font-extrabold">Learning</span>
                  <span> Online is now </span>
                  much easier
                </h2>
              </div>

              <div className="mb-6 -mt-16 text-center lg:text-left">
                <p className="text-lg font-medium tracking-tighter w-3/4 sm:text-xl md:text-2xl lg:text-[2.3rem] text-white">
                  with{" "}
                  <span className="text-black">
                    {" "}
                    Digital Accelerated Learning Pathways{" "}
                  </span>{" "}
                  - an interesting platform that will teach you in a more
                  interactive way
                </p>
              </div>
              {/* Button Section */}
              <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
                <a
                  className="shadow-lg rounded-2xl bg-gray-300 py-3 px-5 md:py-4 md:px-6 tracking-[0.02em] font-medium text-white no-underline text-lg md:text-xl lg:text-2xl"
                  href="#"
                  role="button"
                >
                  Join for free
                </a>
                <a
                  className="text-black no-underline text-lg md:text-xl lg:text-2xl"
                  href="#"
                  role="button"
                >
                  Watch how it works
                </a>
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
