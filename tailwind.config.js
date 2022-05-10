module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [require("daisyui")],
};
