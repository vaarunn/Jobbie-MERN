//  @type {import('tailwindcss').Config}

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
      },
    },
},
  plugins: [],
};
