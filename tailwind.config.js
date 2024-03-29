/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "rgb(11, 11, 33)",
        "semi-transparent": "rgba(200, 200, 259, 0.2)",
        "blue-transparent": "rgba(50, 50, 80, 0.9)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        white:
          "0 1px 3px 0 rgb(255, 255, 255), 0 1px 2px -1px rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
