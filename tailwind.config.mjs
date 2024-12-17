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
        background: "var(--background)",
        foreground: "var(--foreground)",
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
    },
  },
  plugins: [],
};
