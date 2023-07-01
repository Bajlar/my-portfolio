/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        project1:
          "url(https://i.ibb.co/pn8NmLv/justice-legal-solution1-netlify-app.png)",
        project2:
          "url(https://i.ibb.co/CttmqzT/bistro-boss-restaurant-web-app.png)",
        project3: "url(https://i.ibb.co/F6BkSz5/toy-street-ac102-web-app.png)",
      },
      colors: {
        primary: "#8a27e6d3",
        secondary: "#d81b60d8",
      },
    },
  },
  plugins: [require("daisyui")],
};
