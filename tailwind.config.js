/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            './src/**/*.js',
            'index.html',
],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(src/img/chilli-pepper-icon.svg), pointer',
      },
    },
  },
  plugins: [],
}
