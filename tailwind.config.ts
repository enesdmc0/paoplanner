import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "next-sans": "var(--font-geist-sans)",
        "next-mono": "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
} satisfies Config;
