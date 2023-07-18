module.exports = {
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      "orange-md": "0px 20px 40px -15px rgba(245,56,56,0.81) ",
      none: "none",
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: "transparent",
      black: {
        100: "#161616", //Default
        500: "#4F5665",
        600: "#0B132A",
        800: "#1e293b",
        900: "#0f172a"
      },
      orange: {
        50: "#fff7ed",
        100: "#FFECEC",
        200: "#fed7aa",
        300: "#fca5a5",
        400: "#f58634", //Default
        500: "#F53855",
        600: "#dc2626",
        700: "#c2410c",
        800: "#991b1b",
        900: "#7f1d1d"
      },
      green: {
        500: "#2FAB73",
      },
      white: {
        100: "#e7e6eb", //Default
        300: "#F8F8F8",
        500: "#fff",
      },
      gray: {
        100: "#EEEFF2",
        400: "#AFB5C0",
        500: "#DDDDDD",
      },
      blue: {
        50: "#eff6ff",
        100: "#123d68", //Default
        900: "#1e3a8a",
        800: "#1e40af",
      },
      indigo: {
        50: "#eef2ff",
        900: "#312e81",
        950: "#33255E"
      }
    },
    extend: {
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
