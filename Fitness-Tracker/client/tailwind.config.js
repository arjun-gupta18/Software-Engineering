/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 20px 45px -20px rgba(56, 189, 248, 0.55)",
      },
    },
  },
  plugins: [],
};

