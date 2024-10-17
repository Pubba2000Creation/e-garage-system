import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			light: '#FFEFB8',
  			light_hover: '#E6D7A6',
  			primary: '#FF991F',
  			primary_hover: '#E88B1C',
  			primary_active: '#CC7A19',
  			dark: '#0A0600',
  			gray: '#99A3A3',
  			light_gray: '#ECECEC',
  			white: '#FFFFFF',
  			warning: '#F59E0B',
  			success: '#009005',
  			error: '#FF2525',
  		},		
  	}
  },
  //plugins: [require("tailwindcss-animate")],
  plugins: [],
};
export default config;


