/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pt: ['"PT Sans"', 'sans-serif'],
      },
       animation: {
                'border': 'border 6s linear infinite',
            },
            keyframes: {
                'border': {
                    to: { '--border-angle': '360deg' },
                }
              },
              keyframes: {
        spin3d: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
      },
      animation: {
        spin3d: 'spin3d 5s linear infinite',
      },
    },
    },
    
  plugins: [],
};
