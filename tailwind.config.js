export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
        "*.{js,ts,jsx,tsx,mdx}"
    ],
  theme: {
    extend: {
      colors: {
        "primary-custom": "var(--color-primary)",
        "secondary-custom": "var(--color-secondary)",
        "accent": "var(--color-accent)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
