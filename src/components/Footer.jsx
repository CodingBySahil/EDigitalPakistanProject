import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`px-4 py-10 bg-[#1D1C46] text-white ${className} mt-16`}>
      <div className="container mx-auto">
        {/* Main Content */}
        <div className="flex flex-col  justify-between items-center">
          {/* Left Section - Logo and Tagline */}
          <div className="flex items-center space-x-4">
            <img className="w-44" alt="logo" src="/edp-logo-2@2x.png" />
            <p className="text-lg">Learning with flexibility</p>
          </div>

          {/* Newsletter Section */}

          <div className="mt-6 flex flex-col max-w-md gap-x-4">
            <div>
              <p className="text-lg">Subscribe to get our Newsletter</p>
            </div>
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 mr-4"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-[#29E3A4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-10 text-center">
          <ul className="flex justify-center space-x-4 text-[#ADB0C9] list-none">
            <li>
              <Link
                className="text-[#ADB0C9] no-underline hover:text-white"
                to="#"
              >
                Careers
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link
                className="text-[#ADB0C9] no-underline hover:text-white"
                to="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link
                className="text-[#ADB0C9] no-underline hover:text-white"
                to="#"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
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
