/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      maxWidth: {
        'container': '1300px', // Define a custom max-width class
      }
    },
  },
  plugins: [],
}
