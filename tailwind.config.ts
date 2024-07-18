import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        tiroBangla: ["Tiro Bangla", "sans-serif"],
      },
      colors: {
        primary: "#0a8848",
        secondary: "#f70920",
        accent: "#333333",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
