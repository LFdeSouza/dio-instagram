/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "custom-break": "835px",
      },
    },
  },
  plugins: [],
};
