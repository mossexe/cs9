/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-burgundy': '#7b1113',
        'brand-gold': '#c5a059',
        'brand-cream': '#fdfaf5',
      },
    },
  },
  plugins: [],
}