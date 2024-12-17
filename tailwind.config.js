/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",],
  theme: {
    extend: { 
      backgroundImage: {
        imgMobile: 'linear-gradient(hsl(277, 64%, 61%, .7),  hsl(277, 66%, 61%, .7)), url(../images/image-header-mobile.jpg)', 
        imgDesktop: 'linear-gradient(hsl(277, 64%, 61%, .7), hsl(277, 64%, 61%, .7)), url(../images/image-header-desktop.jpg)',
      }, 
      colors: { 
        background: 'hsl(233, 47%, 7%)',
        cardBackground: 'hsl(244, 38%, 16%)',
        accent: 'hsl(277, 64%, 61%)',
        paragraph: 'hsla(0, 0%, 100%, 0.75)',
        statHeading: 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        lexend: ['lexend deca', 'sans-serif'],
        inter: ['inter', 'sans-serif']
      } 
    },
  },
  plugins: [],
}

