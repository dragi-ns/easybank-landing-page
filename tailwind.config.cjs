/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './main.js'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'dark-blue': 'hsl(233, 26%, 24%)',
        'lime-green': 'hsl(136, 65%, 51%)',
        'bright-cyan': 'hsl(192, 70%, 51%)',
        'grayish-blue': 'hsl(233, 8%, 62%)',
        'light-grayish-blue': 'hsl(220, 16%, 96%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
      },
      backgroundImage: {
        'mobile-nav-gradient':
          'linear-gradient(180deg, hsla(233, 26%, 24%, 1) 0%, hsla(233, 26%, 24%, 0.2) 80%, hsla(233, 26%, 24%, 0) 100%)',
        'intro-mobile': "url('../images/bg-intro-mobile.svg')",
        'intro-desktop': "url('../images/bg-intro-desktop.svg')",
      },
      gridTemplateColumns: {
        section: 'repeat(auto-fit, minmax(249px, 1fr) );',
      },
    },
  },
  plugins: [],
};
