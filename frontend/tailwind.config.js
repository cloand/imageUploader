/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize:{
      '8':'8px',
      '12':'12px',
      '10':'10px',
      '18':'18px',
      'sm': ['10px', {
        lineHeight: '15px',
        letterSpacing: '-0.035em',
        fontWeight: '500',
      }],
    },
    extend: {
      colors: {
        'dashed-border': '#97BEF4',
        'gray':'#BDBDBD',
        'light-grey':'#F6F8FB',
        'blue':'#2F80ED',
        'darkGreen':'#2E8B57',
        'lightGreen':'#93C572'
      },
      width: {
        '402': '402px',
        '338':'338px',
        '101':'101px',
        '37':'37px',
        '35':'35px'
      },
      height: {
        '469': '469px',
        '218.9':'218.9px',
        '12':'12px',
        '35':'35px',
        '34':'34px',
        '32':'32px'
      },
      boxShadow: {
        'normal': '0px 4px 12px rgba(0, 0, 0, 0.1)',
      },
      padding: {
        '32': '32px',
        '36':'36px',
        '30':'30.74px'
      }
    },
  },
  plugins: [],
}
