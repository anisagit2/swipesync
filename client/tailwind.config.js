/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "surface-tint": "#00dbe7",
        "inverse-surface": "#e4e1e9",
        "surface-container-high": "#2a292f",
        "surface-dim": "#131318",
        "on-surface": "#e4e1e9",
        "on-secondary-container": "#dcb7ff",
        "error": "#ffb4ab",
        "surface-container": "#1f1f25",
        "secondary-fixed-dim": "#dcb8ff",
        "secondary-container": "#7701d0",
        "inverse-on-surface": "#303036",
        "tertiary-fixed-dim": "#ffabf3",
        "tertiary": "#fff4f9",
        "on-primary-fixed-variant": "#004f54",
        "on-primary": "#00363a",
        "on-secondary-fixed": "#2c0051",
        "primary-container": "#00f2ff",
        "on-error-container": "#ffdad6",
        "primary": "#e1fdff",
        "surface-container-low": "#1b1b20",
        "outline-variant": "#3a494b",
        "primary-fixed": "#74f5ff",
        "tertiary-container": "#ffcbf4",
        "outline": "#849495",
        "tertiary-fixed": "#ffd7f5",
        "on-error": "#690005",
        "surface-variant": "#35343a",
        "on-primary-fixed": "#002022",
        "on-secondary": "#480081",
        "surface-container-lowest": "#0e0e13",
        "on-tertiary-fixed-variant": "#810081",
        "surface-container-highest": "#35343a",
        "on-tertiary-fixed": "#380038",
        "on-background": "#e4e1e9",
        "secondary": "#dcb8ff",
        "surface-bright": "#39383e",
        "on-tertiary-container": "#ab00aa",
        "background": "#131318",
        "on-primary-container": "#006a71",
        "secondary-fixed": "#efdbff",
        "primary-fixed-dim": "#00dbe7",
        "inverse-primary": "#00696f",
        "on-secondary-fixed-variant": "#6700b5",
        "surface": "#131318",
        "on-surface-variant": "#b9cacb",
        "on-tertiary": "#5b005b",
        "error-container": "#93000a"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "gutter": "24px",
        "margin-mobile": "16px",
        "container-max": "1440px",
        "margin-desktop": "48px",
        "unit": "4px"
      },
      "fontFamily": {
        "body-lg": ["Geist"],
        "display-lg-mobile": ["Sora"],
        "body-md": ["Geist"],
        "headline-md": ["Sora"],
        "code": ["Geist"],
        "display-lg": ["Sora"],
        "label-sm": ["Geist"]
      },
      "fontSize": {
        "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "-0.01em", "fontWeight": "400" }],
        "display-lg-mobile": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.03em", "fontWeight": "700" }],
        "body-md": ["16px", { "lineHeight": "1.5", "letterSpacing": "-0.01em", "fontWeight": "400" }],
        "headline-md": ["24px", { "lineHeight": "1.3", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "code": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700" }],
        "label-sm": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600" }]
      }
    },
  },
  plugins: [],
}

