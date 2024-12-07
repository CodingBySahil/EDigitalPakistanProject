import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaBookReader } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

import FlexCenter from "./FlexCenter";
import { makeStringFistUp } from "../utils/helpers";

const NavLinksArr = [
  { linkName: "home", icon: <GoHomeFill />, url: "/" },
  { linkName: "courses", icon: <FaBookReader />, url: "/classSelection" },
  { linkName: "about us", icon: <FaInfoCircle />, url: "/aboutus" },
];

// COMPONENT START
export default function InAppHeader() {
  // VARIABLES
  const {
    user: { username = "testUser" },
  } = JSON.parse(localStorage.getItem("user"));

  // FUNCTIONS

  // JSX
  return (
    <header className="grid h-[50px] max-h-[50px] grid-cols-[50px_1fr_90px] bg-brand-color-cyan">
      <section className="flex h-[50px] max-h-[50px] items-center justify-center">
        <Link to={"/"}>
          <img
            className="h-[35px] w-[35px]"
            src="/edpLogos/edp-logo-small-white.png"
          />
        </Link>
      </section>

      <nav className="flex h-[50px] max-h-[50px] items-center justify-center px-[10px]">
        {/* DIVIDER for mobile  */}
        <ul className="flex list-none gap-[20px] p-[0px] tabS:hidden">
          {NavLinksArr.map((val, i) => (
            <li key={i} className="m-0">
              <NavLink className={"text-[20px] text-white"} to={val?.url}>
                {val?.icon}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* DIVIDER for tabs and laptop14  */}
        <ul className="hidden list-none gap-[50px] p-[0px] tabS:flex">
          {NavLinksArr.map((val, i) => (
            <li key={i} className="m-0">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center justify-center gap-[10px] text-[20px] font-semibold no-underline ${isActive ? "text-white" : "text-white"}`
                }
                to={val?.url}
              >
                <FlexCenter>{val?.icon}</FlexCenter>
                <FlexCenter>
                  <p className="no-underline">{`${makeStringFistUp(val?.linkName)}`}</p>
                </FlexCenter>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <section className="flex h-[50px] max-h-[50px] items-center justify-start gap-[10px]">
        <div
          style={{ border: "2px solid white" }}
          className="flex gap-[5px] rounded-[3px] border-[3px] p-[5px] font-semibold text-white"
        >
          <FlexCenter>
            <FaUserCircle />
          </FlexCenter>

          <FlexCenter>
            <p>{`${username.at(0).toUpperCase()}${username.slice(1, 3)}..`}</p>
          </FlexCenter>
        </div>
      </section>
    </header>
  );
  // JSX
}
// COMPONENT END
