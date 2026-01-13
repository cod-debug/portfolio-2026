/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#EEF1F5',
        'secondary-background': '#E6E9EF',
        'primary-text': '#2B2F38',
        'primary-accent': '#607696',
        'secondary-text': '#6B7280',
        'muted-labels': '#9AA1AF',
        'soft-green': '#6FCF97',
        'accent-blue': '#5A8DEE',
        'accent-hover': '#4A7DE0',
      },
    },
  },
  safelist: [
    'rounded-8xl',
  ],
  plugins: [
  ],
  darkMode: 'class',
}

