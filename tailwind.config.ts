import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "genyablack": "#1f1f1f",
        "genrared": "#FF2A2A",
      },
    },
  },
} satisfies Config;
