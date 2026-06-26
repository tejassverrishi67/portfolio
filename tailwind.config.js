module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00d4ff',
        'neon-violet': '#7c3aed',
        'neon-purple': '#a855f7',
        'neon-pink': '#f0abfc',
        'neon-gold': '#fbbf24',
        'neon-green': '#00ff88',
        'bg-deep': '#080614',
        'bg-surface': '#0e0b1e',
      },
    },
  },
  plugins: [],
};
