/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF7F0',
        ink: '#0B0B0B',
        primary: '#4F46E5',
        success: '#22C55E',
        coral: '#FF5C5C',
        accent: '#FFD93D',
      },
      boxShadow: {
        hard: '6px 6px 0 #000',
        hardSm: '4px 4px 0 #000',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
