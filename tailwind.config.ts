import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#14A02B",
          dark: "#0B6B20",
          lime: "#A6F21A",
          soft: "#EAF6EC",
        },
        ink: "#1D2521",
        grey: { DEFAULT: "#4A5651", light: "#DDE3E0", pale: "#F6FAF7" },
      },
      fontFamily: {
        sans: ["var(--font-bn)", "var(--font-en)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 24px rgba(11,107,32,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
