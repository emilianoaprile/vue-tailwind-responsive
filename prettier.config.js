// // prettier.config.js
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.vue",
      options: {
        singleQuote: true,
        semi: false,
        trailingComma: "es5",
        tabWidth: 2,
      },
    },
  ],
};
