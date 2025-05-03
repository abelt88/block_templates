/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--bg-color)',
        cream: 'var(--cream)',
        olive: 'var(--olive)',
        herb: 'var(--herb)',
        sand: 'var(--sand)',
        forest: 'var(--forest)',
        background: 'var(--background)',
        pen: 'var(--pen)',
        outline: 'var(--outline)',
        "button-color": 'var(--button-color)',
        "button-text": 'var(--button-text)',
        "hover-button-color": 'var(--hover-button-color)',
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        heading: ["Italiana", "serif"],
        
      }
    },
  },
  plugins: [],
}
