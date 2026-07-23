import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "2.5rem",
      },
    },
    extend: {
      colors: {
        // Neutral / text scale
        ink: {
          900: "#0B0F14",
          800: "#101828",
          700: "#1D2939",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E4E7EC",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
        },
        // Primary — deep emerald: growth, ranking, trust. Used for CTAs, links, active states.
        primary: {
          50: "#E9F4EF",
          100: "#C7E4D6",
          200: "#9BCEB6",
          300: "#5FAE8C",
          400: "#2E8A69",
          500: "#0A5C46",
          600: "#094F3C",
          700: "#073F30",
          800: "#052E24",
          900: "#031F18",
        },
        // Accent — warm gold: ratings, highlights, badges. Used sparingly.
        accent: {
          50: "#FBF3E6",
          100: "#F3E0BE",
          200: "#E9C88E",
          300: "#DCAE5E",
          400: "#CC9A45",
          500: "#C08B3B",
          600: "#A6752E",
          700: "#7E5A24",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F8FAF9",
          muted: "#F3F5F4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 5vw + 1rem, 4.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 3.5vw + 1rem, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 2vw + 1rem, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "body-lg": ["clamp(1.0625rem, 0.5vw + 1rem, 1.25rem)", { lineHeight: "1.6" }],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)",
        "card-hover": "0 4px 12px rgba(16, 24, 40, 0.06), 0 8px 24px rgba(16, 24, 40, 0.08)",
        focus: "0 0 0 3px rgba(10, 92, 70, 0.35)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-468px 0" },
          "100%": { backgroundPosition: "468px 0" },
        },
        "count-up-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        shimmer: "shimmer 1.6s linear infinite",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
