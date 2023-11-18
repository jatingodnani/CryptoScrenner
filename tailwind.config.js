/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
      },
colors:{
  gray:{
    100:"#8080808",
    200:"#323232",
    300:"#212121"
  },
  white:"#fff",
  cyan:"#14ffec",
  red:"#d6436e",
  green:"#25da72"
}
    },
  },
  plugins: [],
}

