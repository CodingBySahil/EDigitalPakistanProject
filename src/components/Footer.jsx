import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-[#1D1C46] px-4 py-10 text-white ${className} mt-16`}>
      <div className="container mx-auto">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-between">
          {/* Left Section - Logo and Tagline */}
          <div className="flex items-center space-x-4">
            <img
              className="w-[130px] tabS:w-[130px]"
              alt="logo"
              src="/edp-logo-2@2x.png"
            />
            <p className="text-[13px]">Learning with flexibility</p>
          </div>

          {/* Newsletter Section */}

          <div className="mt-6 flex max-w-md flex-col gap-[10px]">
            {/* text */}
            <div>
              <p className="text-lg">Subscribe to get our Newsletter</p>
            </div>

            {/* input */}
            <div className="flex flex-col gap-[10px]">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="sm:text-sm mr-4 w-full min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6"
                placeholder="Enter your email"
              />

              {/* buttons */}
              <button
                type="submit"
                className="text-sm flex-none rounded-md bg-[#29E3A4] px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-10 text-center">
          {/* links */}
          <ul className="flex list-none justify-center space-x-4 pl-[0px] text-[#ADB0C9]">
            <li>
              <Link
                className="text-[#ADB0C9] no-underline hover:text-white"
                to="/faq"
              >
                FAQs
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link
                className="text-[#ADB0C9] no-underline hover:text-white"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link
                className="text-[#ADB0C9] no-underline hover:text-white"
                to="/terms-condition"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>

          {/* text */}
          <p className="mt-4 text-[#ADB0C9]">
            © 2024 E-Digital Pakistan Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
