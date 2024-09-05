// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#30c5d2",
        "custom-purple": "#471069",
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(to top, #30c5d2, #471069)",
      },
    },
  },
  plugins: [],
};
