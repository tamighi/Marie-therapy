/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false
  },
  content: [
    "./index.html",
    "./src/**/*.{html,tsx}"
  ],
  important: "#root",
  theme: {
    extend: {},
  },
  plugins: [],
}

