/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E65D9",
        lightBlue: "#7CB5FF",
        lightPurple: "#C6B4FF",
        lightYellow: "#F9C777",
        lightGreen: "#CBEEA1",
        black: "#121212",
        gray: "#3E3E3E",
        midGray: "#B6B6B6",
        lightGray: "#DBDBDB",
      },

      padding: {
        17: "4.5rem",
        30: "7.5rem",
      },

      margin: {
        30: "7.5rem",
      },

      fontSize: {
        title: [
          "5rem",
          {
            lineHeight: "1.2",
          },
        ],
        sectionHeading: [
          "3.5rem",
          {
            lineHeight: "1.2",
          },
        ],
        subHeading: [
          "1.6rem",
          {
            lineHeight: "1.2",
          },
        ],
        sm: [
          "1rem",
          {
            lineHeight: 1.7,
          },
        ],
        base: [
          "1.125rem",
          {
            lineHeight: "1.7",
          },
        ],
        medium: [
          "1.25rem",
          {
            lineHeight: "1.7",
          },
        ],
      },

      borderRadius: {
        "4xl": "1.75rem",
        "5xl": "2rem",
      },

      gap: {
        50: "12.5rem",
      },

      screens: {
        desktop: "1440px",
        laptop: "1280px",
        tablet: "834px",
      },
    },
  },
  plugins: [],
};
