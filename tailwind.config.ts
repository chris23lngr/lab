import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1024px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: colors.zinc,
        accent: colors.purple,
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        "muted-forground": "hsl(var(--muted-foreground))",
        ring: "hsl(var(--ring))",
        "card-background": "hsl(var(--card-background))",
      },
    },
  },
  plugins: [],
} satisfies Config;
