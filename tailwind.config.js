module.exports = {
  // after3.0 purge renamed to content
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/images/bg-2.png')",
        'logo': "url('/images/logo.png')",
      },
      backgroundSize: {
        "140%": "140%"
      },
      backgroundColor: {
        "theme-black": "#131616"
      },
      keyframes: {
        "line-slide": {
          "0%": {transform: "scaleX(0)", transformOrigin: "0 0"},
          "100%": {transform: "scaleX(1)", transformOrigin: "0 0"}
        }
      },
      animation: {
        "line-slide": "line-slide 0.2s ease-out"
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2k': '1920px',
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss-pseudo-elements"),
  ],
}
