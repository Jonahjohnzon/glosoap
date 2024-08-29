/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '655px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1000px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      // => @media (min-width: 1536px) { ... }
      '3xl' : '1800px'
    },
    extend: {
      animation:{
        pulses :'pulses 0.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spins: 'spins 10s linear infinite',
        pulses_ :'pulses_ 0.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        move: 'move 3s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out 1'
      },


      keyframes: {
        wiggle: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          }
          ,
          
          '20%, 80%' :{
            transform: 'translate3d(2px, 0, 0)'
          }
        ,
          '30%  ,50%, 70%' :{
            transform: 'translate3d(-4px, 0, 0)'
          }
        ,
          '40%, 60%' : {
            transform: 'translate3d(4px, 0, 0)'
          }
        },
      pulses: {
        '0%, 100%' :{
          opacity: 1
        },
        '50%' :{
          opacity: .5
        }}
        ,
        spins :{
          from :{
            'transform': 'rotate(0deg)'
          },
          'to' :{
            'transform': 'rotate(360deg)'
          }
        },
        pulses_: {
          '0%, 100%' :{
            opacity: .5
          },
          '50%' :{
            opacity: 1
          }
        },
        move:{
          '0%, 100%':{
            'transform': 'translate3d(0px, 0, 0)'
          },
          '50%':{
            'transform': 'translate3d(60px, 0, 0)'
          }
        }
    },
    fontFamily: {
      Noto: ['Noto Sans', 'sans-serif'],
      Anton:[ 'Anton', 'sans-serif'],
      Inter:['Inter', 'sans-serif']      // Add more custom font families as needed
    },
  },
},
plugins: [
  require('tailwind-scrollbar'),
]}

