import { Link } from "react-router-dom";
import TopNav from "./TopNav";
import PropTypes from "prop-types";
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = ({ className = "", onLogout, isAuthenticated }) => {
  return (
    <>
      <div className={`overflow-hidden ${className}`}>
      <TopNav onLogout={onLogout} isAuthenticated={isAuthenticated} />
        <img
          className="absolute left-0 top-0 -mt-16 min-h-[60vh] w-full object-cover md:min-h-[45vh] lg:-mt-4"
          alt=""
          src="/headerbg.svg"
        />
        <div className="container absolute left-0 right-0 z-10 mx-auto my-12">
          <div className="flex flex-col items-center rounded-lg border p-6 pt-10 lg:flex-row lg:items-start lg:pt-[6rem]">
            {/* Text Section */}
            <div className="flex flex-col items-center lg:-mt-6 sm:-mt-7 -mt-0 lg:w-7/12 lg:items-start lg:px-10 lg:py-2">
              <div className="mb-2 text-center lg:text-left">
                <h2 className="md:text-6xl mb-6 text-3xl font-semibold leading-tight text-white sm:text-5xl md:mb-4 lg:text-[3rem] xl:text-[3.5rem]">
                  <span className="font-extrabold text-black">Learning</span>
                  <span> Online is now </span>
                  much easier
                </h2>
              </div>

              <div className="-mt-10 mb-2 text-center sm:mt-0 lg:mb-2 lg:text-left">
                <p className="text-lg md:text-2xl mx-auto w-full font-medium tracking-tighter text-white sm:w-4/5 sm:text-xl lg:mx-0 lg:w-3/4 lg:text-[2.3rem]">
                  with
                  <span className="font-semibold text-black">
                    {" "}
                    Digital Accelerated Learning Pathways{" "}
                  </span>
                  - an interesting platform that will teach you in a more
                  interactive way
                </p>
              </div>

              {/* Button Section */}
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <Link
                  className="text-lg lg:text-2xl rounded-2xl bg-gradient-to-r from-green-400 via-green-600 to-green-800 px-5 py-3 font-medium tracking-[0.02em] text-white no-underline shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-l hover:from-green-600 hover:via-green-500 hover:to-green-400 md:px-6 md:py-4 md:text-xl"
                  to="register"
                  role="button"
                >
                  Join for free
                </Link>
                <Link
                  className="text-lg lg:text-2xl text-white no-underline hover:scale-105 md:text-xl"
                  to="#"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    const target = document.getElementById("working"); // Find the target element by ID
                    if (target) {
                      target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      }); // Smooth scrolling
                    }
                  }}
                >
                  Watch how it works
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative mt-6 hidden overflow-hidden p-0 lg:ml-6 lg:mt-0 lg:flex lg:w-5/12">
              {/* Icon and text container */}
              <div className="absolute top-[20%] flex h-16 w-40 items-center overflow-hidden rounded-lg bg-[#f7f7f7]/80 p-2 shadow-md">
                <div className="flex items-center space-x-3">
                  {/* Icon container */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white">
                    <FaRegCalendarAlt />
                  </div>

                  {/* Text container */}
                  <div className="">
                    <h3 className="text-md mb-auto font-semibold leading-tight text-gray-900">
                      250k
                    </h3>
                    <h6 className="text-sm mt-auto leading-tight text-gray-900">
                      Assisted Student
                    </h6>
                  </div>
                </div>
              </div>

              {/* Icon and text container */}
              <div className="absolute right-[10%] top-[40%] flex h-16 w-52 items-center overflow-hidden rounded-lg bg-[#f7f7f7]/80 p-2 shadow-md">
                <div className="flex items-center space-x-3">
                  {/* Icon container */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white">
                    <IoMdMail />
                  </div>

                  {/* Text container */}
                  <div className="">
                    <h3 className="text-md mb-auto font-semibold leading-tight text-gray-900">
                      Congratulation
                    </h3>
                    <h6 className="text-sm mt-auto leading-tight text-gray-900">
                      Your course is completed
                    </h6>
                  </div>
                </div>
              </div>

              {/* Icon and text container */}
              <div className="w-58 absolute top-[60%] flex h-auto flex-col items-center space-y-2 overflow-hidden rounded-lg bg-[#f7f7f7]/80 px-2 py-4 shadow-md">
                <div className="flex items-center space-x-3">
                  {/* Icon container */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white">
                    <FaUser />
                  </div>

                  {/* Text container */}
                  <div className="">
                    <h3 className="text-md mb-auto font-semibold leading-tight text-gray-900">
                      User Experience class
                    </h3>
                    <h6 className="text-sm mt-auto leading-tight text-gray-900">
                      today at 12:00PM
                    </h6>
                  </div>
                </div>

                {/* Centered join now button */}
                {/* <Link
                  to={"/register"}
                  className="cursor-pointer rounded-full bg-pink-500 px-4 py-2 font-bold text-white no-underline hover:bg-pink-700"
                >
                  Join Now
                </Link> */}
              </div>

              <img
                className="h-auto max-h-[500px] w-[80%] rounded-[28px] object-cover md:max-h-[600px] md:rounded-[20px] lg:max-h-[700px] lg:rounded-[28px]"
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

// adding props validation
Header.propTypes = {
  className: PropTypes.string,
  onLogout: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};
export default Header;
