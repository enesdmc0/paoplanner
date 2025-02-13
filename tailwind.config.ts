import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "next-sans": "var(--font-geist-sans)",  // Geist Sans'ı Tailwind'in sans olarak ayarla
        "next-mono": "var(--font-geist-mono)",  // Geist Mono'yu Tailwind'in mono olarak ayarla
      },
    },
  },
  plugins: [],
} satisfies Config;
