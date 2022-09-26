/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx , html}"],
    theme: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        colors: {
          'primary-color': '#C30017',
          'secondry-color':'#c0c0c0',
          'purple': '#7e5bef',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'green': '#13ce66',
          'yellow': '#ffc82c',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
          '#D9D9D9':'#D9D9D9'
        },
        fontFamily: {
          sans: ['Graphik', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        extend: {
          spacing: {
            '128': '32rem',
            '144': '36rem',
          },
          borderRadius: {
            '4xl': '2rem',
          }, 
        
        },
        height:{
          '92VH':'92vh',
          'progress-height':'12px'
        }
      },
   
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
    },
};
