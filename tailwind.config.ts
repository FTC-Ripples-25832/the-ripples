import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      zIndex: {
        "under-canvas": "50",
        canvas: "100",
        "over-canvas": "200",
        "debug-canvas": "9000",
        debug: "9001"
      },
      colors: {
        gray: {
          lighter: "#262626",
          DEFAULT: "#0f0f0f"
        },
        tiffany: {
          50: "#e6f7f3",
          100: "#b3e9dd",
          200: "#80dbc7",
          300: "#4dceb1",
          400: "#26c3a0",
          500: "#037A68",
          600: "#026a5a",
          700: "#02594c",
          800: "#01483e",
          900: "#00382f",
          DEFAULT: "#037A68"
        },
        "aston-gray": {
          DEFAULT: "#666769"
        },
        white: "#FFFFFF"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: []
}
export default config
