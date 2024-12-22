import { sideBarToggleFalse992 } from "./src/constants/const";

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sideBarToggleFalse992: `${sideBarToggleFalse992}px`,
        mobileM: "375px",
        mobileL: "412px",
        tabS: "640px",
        tabL: "768px",
        laptop14: "1200px",
      },
      colors: {
        "brand-color-cyan": "#49BBBD",
        "brand-color-lightBlue": "#9DCCFF",
        "brand-color-lightPink": "#EE645B",
        "brand-color-darkblue": "#252641",

        white: "#fff",
        lightseagreen: {
          100: "#49bbbd",
          200: "rgba(73, 187, 189, 0.6)",
        },
        mediumslateblue: "#545ae8",
        lightslategray: "#83839a",
        lightsteelblue: {
          100: "#ced8ff",
          200: "#b2b3cf",
        },
        slategray: {
          100: "#696984",
          200: "#626381",
        },
        gray: {
          100: "#fbfbfb",
          200: "#252641",
          300: "rgba(255, 255, 255, 0.3)",
          400: "rgba(0, 0, 0, 0.87)",
          500: "rgba(0, 0, 0, 0.54)",
          600: "rgba(255, 255, 255, 0.87)",
          700: "#fffefc",
        },
        darkturquoise: {
          100: "#33d8ef",
          200: "#00bcd4",
        },
        black: "#000",
        darkgray: "rgba(162, 152, 152, 0)",
        dimgray: "#5b5b5b",
        silver: "#c4c4c4",
        powderblue: "#b2ebf2",
        darkslateblue: {
          100: "#55578d",
          200: "#2f327d",
          300: "#171b41",
        },
        firebrick: "#c80a0a",
        lightskyblue: "#9dccff",
        turquoise: "#00cbb8",
        deepskyblue: {
          100: "#23bdee",
          200: "rgba(35, 189, 238, 0.9)",
        },
        mediumspringgreen: {
          100: "#33efa0",
          200: "#34e7a5",
        },
        whitesmoke: "#f9f9f9",
        mediumaquamarine: "#41be91",
        lightcyan: "#d8f9ed",
        steelblue: "#717fb0",
        sandybrown: "#f3a268",
        royalblue: "#687ef3",
        hotpink: "#f3538c",
        darkorange: "#f48c06",
        salmon: "#f56666",
        mediumseagreen: "#74bf7f",
      },
      spacing: {
        "space-100": "4px",
      },
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
      },
      borderRadius: {
        "41xl": "60px",
        "61xl": "80px",
        "26xl": "45px",
        mini: "15px",
        "10xl-5": "29.5px",
        xl: "20px",
        "lg-2": "18.2px",
        "53xl-8": "72.8px",
        "17xl": "36px",
        "21xl": "40px",
        "14xl": "33px",
      },
      boxShadow: {
        basicShadow: "0px 5px 10px 0px rgb(0 0 0 / 0.2)",
      },
    },
    fontSize: {
      "3xl": "1.375rem",
      xl: "1.25rem",
      "8xl": "1.688rem",
      "7xl": "1.625rem",
      "13xl": "2rem",
      base: "1rem",
      "5xl": "1.5rem",
      "21xl": "2.5rem",
      "12xl": "1.938rem",
      "11xl": "1.875rem",
      "17xl": "2.25rem",
      "30xl": "3.063rem",
      inherit: "inherit",
      xs: "0.75rem",
      mini: "0.938rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
