import type { Config } from "tailwindcss";

// Import necessary modules
import daisyui from "daisyui";
import { keepTheme } from "keep-react/keepTheme"; // Make sure to replace with the actual path

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
};

// Apply keepTheme to the config before exporting
export default keepTheme(config);
