/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      "ssm":"340px",
      "smm":"540px",
        "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "xxl":"1400px"

    },
    colors: {
      bg: "#035397",
      green: "green",
      white: "#fff",
      white2: "#F1F1F1",
      black: "black",
      red: "red",
      white_black: "rgb(145, 132, 132)",
      blue: "#21E1E1",
    },
  },
  plugins: [],
};
