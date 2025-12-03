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
            },
        },
  plugins: [],
};  
