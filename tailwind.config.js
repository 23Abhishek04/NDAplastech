module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0078D4', // Unique color theme
        secondary: '#F4F4F4',
      },
      spacing: {
        128: '32rem', // Example if you want larger spacing
      },
    },
  },
  plugins: [],
};
