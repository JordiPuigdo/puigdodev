import containerQueries from "@tailwindcss/container-queries";
import tailwindcssRadix from "tailwindcss-radix";

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "6xl": ["78px", "78px"],
        "5xl": ["64px", "72px"],
        "4xl": ["56px", "60px"],
        "4xldr": ["48px", "56px"],
        "3xl": ["36px", "44px"],
        "2xl": ["32px", "40px"],
        xl: ["24px", "32px"],
        xldr: ["28px", "36px"],
        lg: ["21px", "28px"],
        md: ["16px", "24px"],
        sm: ["14px", "20px"],
        xs: ["12px", "16px"],
      },
      colors: {
        primary: "#FFD86F",
        primary500: "#FFB300",
        whiteSecondary: "#F2F2F2",
        pastelYellow: "#FFE066",
        green: "#B2F2BB",
        softblue: "#8ECDF7",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
        heading: ["var(--font-fivo-sans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-15deg": "linear-gradient(-15deg, var(--tw-gradient-stops))",
        "gradient-30deg": "linear-gradient(30deg, var(--tw-gradient-stops))",
        gradient: "linear-gradient(var(--tw-gradient-stops))",
        "gradient-animated":
          "linear-gradient(-45deg, #e6d4f8 0%, #F9FFB6 8.333%, #BCC4E1 16.666%, #B9DDB6 25%, #F5FF86 33.333%, #FFC7C7 41.666%, #c39bee 50%, #A2ADD6 58.333%, #FED6B9 66.666%, #E87BCC 75%, #BAF9F9 83.333%, #F8CBCB 91.666% );",
      },
      maxWidth: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1152px",
        "2xl": "1280px",
        "3xl": "1600px",
      },
      keyframes: {
        bounceY: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
          "fade-in-up": {
            "0%": { opacity: "0", transform: "translateY(20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
        },
      },
      animation: {
        bounceY: "bounceY 0.8s infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [tailwindcssRadix, containerQueries],
};
