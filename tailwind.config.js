/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          crimson: '#A6261B',
          crimsonDark: '#8A1F16',
          crimsonLight: '#FDF2F0',
          cream: '#FAF6F0',
          creamLight: '#FCFAF6',
          creamDark: '#EFE9DE',
          creamBorder: '#E6DDCF',
          mint: '#E6F5F2',
          mintLight: '#F0FAF8',
          mintBorder: '#C0E7DF',
          mintText: '#0D6154',
          dark: '#112321',
          darkSecondary: '#1A3330',
          darkBorder: '#284643',
          bronze: '#443A2C',
          bronzeDark: '#322A1F',
          coralStart: '#CF3B2B',
          coralEnd: '#E26D54',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(17, 35, 33, 0.05)',
        'card': '0 8px 30px -4px rgba(17, 35, 33, 0.08)',
        'elevated': '0 20px 40px -10px rgba(166, 38, 27, 0.15)',
      }
    },
  },
  plugins: [],
}

