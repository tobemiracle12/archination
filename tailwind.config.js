// module.exports = {
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         background: 'var(--background)',
//         foreground: 'var(--foreground)',
//         customTextColor: 'var(--custom-text-color)',
//         customTextDarkColor: 'var(--customTextDarkColor)',
//         customLightColor: 'var(--custom-light-color)',
//         primaryText: 'var(--primary-text-color)',
//         secondaryText: 'var(--secondary-text-color)',
//       },
//       screens: {
//         xs: '478px',
//         sm: '767px',
//         md: '991px',
//         lg: '1024px',
//         xl: '1280px',
//         '2xl': '1536px',
//       },
//     },
//   },
//   plugins: [],
// }
// tailwind.config.js
module.exports = {
  darkMode: 'class', // instead of 'media'
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Add other paths if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
