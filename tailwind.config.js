/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        'icon': 'rgb(75 85 99)',
        'small-text': 'rgb(100 116 139)',
        'attention-color': '#447BBA'
      },
      colors: {
        'blue-hover': 'rgb(226 232 240)',
      },
      screens: {
        'desktop': '992px'
      },
      maxWidth: {
        'desktop-edge': '1280px'
      }
    }
  },
  plugins: [],
}
