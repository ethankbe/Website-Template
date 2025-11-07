module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(210, 15%, 90%)",
        input: "hsl(210, 15%, 90%)",
        ring: "hsl(200, 85%, 45%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(215, 25%, 15%)",
        primary: {
          DEFAULT: "hsl(200, 85%, 45%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(280, 65%, 55%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        tertiary: {
          DEFAULT: "hsl(340, 75%, 55%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        neutral: {
          DEFAULT: "hsl(210, 9%, 96%)",
          foreground: "hsl(215, 20%, 18%)",
        },
        success: {
          DEFAULT: "hsl(150, 45%, 45%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        warning: {
          DEFAULT: "hsl(40, 90%, 50%)",
          foreground: "hsl(215, 20%, 18%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 84%, 60%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(210, 9%, 96%)",
          foreground: "hsl(210, 8%, 40%)",
        },
        accent: {
          DEFAULT: "hsl(200, 95%, 95%)",
          foreground: "hsl(200, 85%, 45%)",
        },
        chart: {
          1: "hsl(200, 85%, 45%)",
          2: "hsl(280, 65%, 55%)",
          3: "hsl(340, 75%, 55%)",
          4: "hsl(45, 90%, 55%)",
          5: "hsl(160, 60%, 45%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(215, 20%, 18%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(215, 20%, 18%)",
        },
        gray: {
          50: "hsl(210, 20%, 98%)",
          100: "hsl(210, 20%, 95%)",
          200: "hsl(210, 15%, 90%)",
          300: "hsl(210, 10%, 80%)",
          400: "hsl(210, 8%, 65%)",
          500: "hsl(210, 7%, 50%)",
          600: "hsl(210, 8%, 40%)",
          700: "hsl(210, 12%, 30%)",
          800: "hsl(210, 15%, 20%)",
          900: "hsl(210, 18%, 13%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ['"DM Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, hsl(200, 85%, 45%), hsl(280, 65%, 55%))',
        'gradient-2': 'linear-gradient(135deg, hsl(280, 65%, 55%), hsl(340, 75%, 55%))',
        'gradient-3': 'linear-gradient(135deg, hsl(200, 85%, 45%), hsl(200, 70%, 35%))',
        'gradient-accent': 'linear-gradient(135deg, hsl(340, 75%, 55%), hsl(280, 65%, 55%))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
