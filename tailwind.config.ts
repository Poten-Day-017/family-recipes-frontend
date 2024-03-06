import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      pretendard: ["var(--font-pretendard)"],
    },
    fontSize: {
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.375rem",
      "2xl": "1.625rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-orange": "#F7744C",
        "main-error": "#EB200D",
        "light-gray": "#E1E2DE",
        "beige-700": "#626360",
        "beige-600": "#767874",
        "beige-500": "#9FA19D",
        "beige-400": "#BEC0BB",
        "beige-300": "#E1E2DE",
        "beige-200": "#EEF0EB",
        "beige-100": "#F5F6F2",
        "main-green-1": "#B8CA88",
        "main-green-2": "#E1E8C9",
        "main-black": "#20211E",
        kakao: "#FEE500",
      },
      borderRadius: {
        base: "5px",
      },
    },
  },
};
export default config;
