import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Rich deep blue (#1e40af) - Professional and trustworthy
        primary: {
          DEFAULT: "#1e40af",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          foreground: "#ffffff",
        },
        // Secondary: Professional teal (#0d9488)
        secondary: {
          DEFAULT: "#0d9488",
          50: "#f0fdfa",
          100: "#d0f6f2",
          200: "#a9ede9",
          300: "#7eddd7",
          400: "#58c8c5",
          500: "#3db8b8",
          600: "#2c9b91",
          700: "#1f7f7a",
          800: "#0d9488",
          900: "#086d6a",
          foreground: "#ffffff",
        },
        // Tertiary: Warm orange accent (#ea580c)
        tertiary: {
          DEFAULT: "#ea580c",
          50: "#fff7ed",
          100: "#fed6b8",
          200: "#fdb88e",
          300: "#fd9a5a",
          400: "#fc7d3b",
          500: "#fa5a1d",
          600: "#dc4713",
          700: "#b73e0e",
          800: "#973409",
          900: "#7a2a06",
          foreground: "#ffffff",
        },
        // Muted grays for professional look
        muted: {
          DEFAULT: "#e2e8f0",
          foreground: "#475569",
        },
        // Accent backgrounds
        accent: {
          DEFAULT: "#f8fafc",
          foreground: "#0f1419",
        },
        // Destructive red
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        // Border
        border: "#e2e8f0",
        input: "#ffffff",
        ring: "#1e40af",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
    },
  },
};

export default config;
