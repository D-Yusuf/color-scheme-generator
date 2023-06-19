/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./public/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow:{
        "formEl": "0px 1px 2px rgba(0, 0, 0, 0.05)",
        "form": "0px 4px 11px rgba(0, 0, 0, 0.15)" 
      },
      fontFamily:{
        "inter": "'Inter', sans-serif"
      }
    },
  },
  plugins: [],
}

