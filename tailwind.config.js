module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0078D4', // Unique color theme
        secondary: '#F4F4F4', // Fixed missing comma here
        'custom-orange': '#e75536', // Custom orange color
      },
      spacing: {
        128: '32rem', // Example if you want larger spacing
      },
    },
  },
  plugins: [],
};
