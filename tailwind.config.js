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
      }
    },
  },
  plugins: [],
}
