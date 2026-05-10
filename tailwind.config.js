/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#fafaf4",
        "outline-variant": "#c2c9bb",
        "on-error-container": "#93000a",
        "on-secondary-fixed": "#0d1d2a",
        "secondary-fixed-dim": "#b8c8da",
        "primary-fixed-dim": "#a1d494",
        "surface-container": "#eeeee9",
        primary: "#154212",
        "surface-container-high": "#e8e8e3",
        "on-background": "#1a1c19",
        "surface-container-low": "#f4f4ee",
        "surface-bright": "#fafaf4",
        "tertiary-fixed-dim": "#c6c6c7",
        tertiary: "#37393a",
        "on-primary": "#ffffff",
        "on-tertiary-fixed-variant": "#454747",
        "error-container": "#ffdad6",
        "surface-variant": "#e3e3de",
        "inverse-surface": "#2f312e",
        "on-tertiary-container": "#c2c2c3",
        "on-surface-variant": "#42493e",
        "inverse-primary": "#a1d494",
        "primary-container": "#2d5a27",
        "tertiary-container": "#4e5051",
        "surface-dim": "#dadad5",
        "on-primary-fixed-variant": "#23501e",
        "secondary-container": "#d1e1f4",
        "on-tertiary-fixed": "#1a1c1c",
        "on-secondary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "on-error": "#ffffff",
        "tertiary-fixed": "#e2e2e2",
        "surface-container-highest": "#e3e3de",
        "on-primary-container": "#9dd090",
        "primary-fixed": "#bcf0ae",
        "secondary-fixed": "#d4e4f6",
        background: "#fafaf4",
        "on-secondary-container": "#556474",
        "on-secondary-fixed-variant": "#394857",
        secondary: "#50606f",
        "inverse-on-surface": "#f1f1ec",
        outline: "#72796e",
        "on-tertiary": "#ffffff",
        "on-surface": "#1a1c19",
        "surface-tint": "#3b6934",
        error: "#ba1a1a",
        "on-primary-fixed": "#002201"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "24px",
        "margin-mobile": "20px",
        unit: "8px",
        "margin-desktop": "64px",
        "container-max": "1280px"
      },
      fontFamily: {
        "headline-lg-mobile": ["Manrope"],
        "display-lg": ["Manrope"],
        "label-sm": ["Geist"],
        "headline-lg": ["Manrope"],
        "body-md": ["Hanken Grotesk"]
      },
      fontSize: {
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      },
      backgroundImage: {
        'topo-bg': "url(\"data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 100 50 200 100 T 400 100 T 600 50 T 800 100' fill='none' stroke='%2372796e' stroke-opacity='0.1'/%3E%3Cpath d='M0 200 Q 150 120 300 200 T 600 200 T 800 150' fill='none' stroke='%2372796e' stroke-opacity='0.1'/%3E%3Cpath d='M0 300 Q 200 350 400 300 T 800 250' fill='none' stroke='%2372796e' stroke-opacity='0.1'/%3E%3Cpath d='M0 400 Q 100 450 300 400 T 500 450 T 800 400' fill='none' stroke='%2372796e' stroke-opacity='0.1'/%3E%3Cpath d='M0 500 Q 300 480 500 500 T 800 520' fill='none' stroke='%2372796e' stroke-opacity='0.1'/%3E%3Cpath d='M0 600 Q 200 650 400 600 T 600 650 T 800 600' fill='none' stroke='%2372796e' stroke-opacity='0.1'/%3E%3Cpath d='M0 700 Q 400 680 800 700' fill='none' stroke='%2372796e' stroke-opacity='0.1'/%3E%3C/svg%3E\")"
      },
      boxShadow: {
        'ambient': '0 20px 40px rgba(45, 90, 39, 0.08)',
        'inner-glow': 'inset 0 0 2px 0 rgba(255, 255, 255, 0.5)'
      },
      backdropBlur: {
        'glass': '12px'
      }
    },
  },
  plugins: [],
}
