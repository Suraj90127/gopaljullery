/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      // // => @media (min-width: 1280px) { ... }

      "2xl": "1500px",
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#1c3058", // Gold
        secondary: "#ecf1f2", // Silver
        textred: "#d01345",
        hedingtext: "#181818",
        whitetext: "#fff",
        blacktext: "#181818",
        accent: "#8B0000", // Dark Red
        background: "#F5F5F5", // Light Gray
        text: "#333333", // Dark Gray
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(92.32deg, #1c3058 12.41%, #1b6b7d 99.21%);", // Orange to Yellow
        "secondary-gradient": "linear-gradient(45deg, #8E2DE2, #4A00E0)", // Purple to Dark Blue
        "accent-gradient": "linear-gradient(to right, #11998e, #38ef7d)", // Green Shades
      },
    },
  },
  plugins: [],
};
