/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    screens: {
      extraSmall: "250px",
      smaller: "300px",
      small: "350px",
      lessSmall: "400px",
      mobile: "450px",
      mobileX: "500px",
      almostIpad: "600px",
      closeIpad: "650px",
      md: "768px",
      med: "900px",
      lg: "970px",
      xlg: "1100px"
    },
    fontSize: {
      sm: '0.875rem',   // 14px in em units
      base: '1rem',     // 16px in em units
      lg: '1.125rem',   // 18px in em units
      xl: '1.25rem',    // 20px in em units
    },
  },
};
export const plugins = [];
