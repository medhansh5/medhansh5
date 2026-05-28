/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        surface: "#131314",
        "surface-container": "#201f20",
        "surface-container-high": "#2a2a2b",
        "surface-container-highest": "#353436",
        "surface-container-lowest": "#0e0e0f",
        "on-surface": "#e5e2e3",
        "on-surface-variant": "#bec7d4",
        outline: "#88919d",
        "outline-variant": "#3f4852",
        
        // Jedi Blue (Primary)
        primary: "#98cbff",
        "on-primary": "#003354",
        "primary-container": "#00a3ff",
        "on-primary-container": "#00375a",
        
        // Sith Red (Secondary Alert states)
        secondary: "#ffb4a8",
        "secondary-container": "#e60000",
        "on-secondary-container": "#fff6f5",
        
        tertiary: "#c7c6c6",
        error: "#ffb4ab",
      },
      spacing: {
        unit: "8px",
        gutter: "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
        "max-width": "1440px"
      },
      fontFamily: {
        "display-lg": ["Sora", "sans-serif"],
        "headline-lg": ["Sora", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-mono": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-mono": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }]
      }
    },
  },
  plugins: [],
}
