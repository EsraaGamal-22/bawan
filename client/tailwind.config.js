/** @type {import('tailwindcss').Config} */
var pixels = {
  ".2": ".2rem",
  ".4": "0.4rem",
  ".5": "0.5rem",
  ".6": "0.6rem",
  ".8": "0.8rem",
  1: "1rem",
  1.2: "1.2rem",
  1.4: "1.4rem",
  1.5: "1.5rem",
  1.6: "1.6rem",
  1.8: "1.8rem",
  1.979: "1.979rem",
  2: "2rem",
  2.1: "2.1rem",
  2.2: "2.2rem",
  2.4: "2.4rem",
  2.5: "2.5rem",
  2.8: "2.8rem",
  3: "3rem",
  3.2: "3.2rem",
  3.4: "3.4rem",
  3.6: "3.6rem",
  4: "4rem",
  4.4: "4.4rem",
  4.8: "4.8rem",
  4.9: "4.9rem",
  5: "5rem",
  5.3: "5.3rem",
  5.4: "5.4rem",
  5.5: "5.5rem",
  5.6: "5.6rem",
  6: "6rem",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: pixels,
      spacing: pixels,
      minWidth: pixels,
      maxWidth: pixels,
      borderRadius: pixels,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "white",
      black: "black",
      primary: {
        800: "#00195B",
        900: "#021236",
      },
      secondary: {
        700: "#3B6BE5",
        800: "#008AA6",
        900: "#333333",
      },
      gray: {
        300: "#f1f1f1",
        500: "#e4e7ec",
        600: "#98a2b3",
        700: "#667085",
        800: "#475467",
        900: "#333333",
      },
      success: {
        500: "#daf5e3",
        600: "#32d583",
        700: "#12b76a",
        800: "#027a48",
        900: "#05603a",
      },
      error: {
        500: "#fee4e2",
        600: "#f97066",
        700: "#d92d20",
        800: "#b42318",
        900: "#912018",
      },
      warning: {
        500: "#ffecda",
        600: "#fec84b",
        700: "#fdb022",
        800: "#f79009",
        900: "#dc6803",
      },
    },
  },
  plugins: [],
};
