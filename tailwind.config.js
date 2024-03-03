/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        tablet: "740px", // Add custom breakpoint
        desktop: "1024px", // Add another custom breakpoint
      },

    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('children', '&>*')
    })
  ]
};
