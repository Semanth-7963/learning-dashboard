import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#111118",
        "surface-2": "#1a1a24",
        "surface-3": "#22222e",
        border: "#2a2a38",
        "border-glow": "#6366f1",
        accent: "#6366f1",
        "accent-2": "#8b5cf6",
        "accent-3": "#06b6d4",
        muted: "#6b7280",
        "muted-foreground": "#9ca3af",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-purple":
          "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
        "glow-cyan":
          "radial-gradient(ellipse at center, rgba(6,182,212,0.15) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(99,102,241,0.3)",
        "glow-cyan": "0 0 20px rgba(6,182,212,0.3)",
        "glow-lg": "0 0 40px rgba(99,102,241,0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
