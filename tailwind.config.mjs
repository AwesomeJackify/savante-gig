/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        // cupcake: {
        //   ...require("daisyui/src/theming/themes")["cupcake"],
        //   primary: "navy",
        //   accent: "plum",
        // },
        luxury: {
          ...require("daisyui/src/theming/themes")["luxury"],
          secondary: "navy",
        },
      },
    ],
  },
  plugins: [require("tailwindcss-fluid-type"), require("daisyui")],
};
