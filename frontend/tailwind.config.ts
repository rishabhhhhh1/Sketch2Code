import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The "Luxury Navy" Palette
        brand: {
          navy: "#020617",      // Deepest background (almost black)
          sapphire: "#3b82f6",  // Primary Blue/Purple accent
          ice: "#f8fafc",       // White text
          powder: "#94a3b8",    // Muted gray text
          
          // Screenshot Accents
          purple: "#8b5cf6",    // The "Code" section purple
          green: "#10b981",     // The "Design" section green
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite", // For the 3D abstract shape
      },
    },
  },
  plugins: [],
};
export default config;