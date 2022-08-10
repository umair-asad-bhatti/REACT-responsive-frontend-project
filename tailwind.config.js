module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height'
      },
      colors: {
        blue: {
          'darkmd': '#040E2E',
          'lightmd': '#152B7A',
          'darkmdbg': '#12276C',
          'lightmdbg': '#203C91'
        },
        green: {
          '200': '#63CD7E'
        },
        gray: {
          '50': "#9FA8C4"
        }

      },
    },
    plugins: [],
  }
}