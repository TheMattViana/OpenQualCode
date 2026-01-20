import { AppTheme } from '../types';

export const applyTheme = (theme: AppTheme) => {
  const root = document.documentElement;

  const themes = {
    default: {
      '--bg-main': '#f1f5f9',       // Slate 100
      '--bg-panel': '#ffffff',      // White
      '--bg-header': '#0f172a',     // Slate 900
      '--text-main': '#0f172a',     // Slate 900
      '--text-muted': '#64748b',    // Slate 500
      '--border': '#e2e8f0',        // Slate 200
      '--accent': '#2563eb',        // Blue 600
      '--accent-text': '#ffffff',
      '--bg-paper': '#ffffff',      // Paper Color
      '--zebra-odd': '#e2e8f0',     // [MODIFIED] Darker for visibility (Slate 200)
    },
    hobbit: {
      '--bg-main': '#e4d8b4',       // Parchment
      '--bg-panel': '#fdf6e3',      // Light Parchment
      '--bg-header': '#2c3e28',     // Deep Forest Green
      '--text-main': '#433422',     // Dark Brown
      '--text-muted': '#8c7b64',    // Light Brown
      '--border': '#d3c6a0',        // Darker Parchment
      '--accent': '#5c7c35',        // Leaf Green
      '--accent-text': '#ffffff',
      '--bg-paper': '#fdf6e3',      // Paper Color (match panel)
      '--zebra-odd': '#f2e9c9',
    },
    // Renamed 'dark' to Night Mode (Rainbow / High Contrast)
    dark: {
      '--bg-main': '#000000',       // Pure Black
      '--bg-panel': '#121212',      // Off Black
      '--bg-header': '#1a1a1a',     // Dark Grey
      '--text-main': '#d4d4d4',     // Light Grey
      '--text-muted': '#a8a29e',    // Warm Grey/Brown
      '--border': '#404040',        // Neutral Grey
      '--accent': '#d97706',        // Amber 600 (Brownish-Orange) for Rainbow feel
      '--accent-text': '#000000',
      '--bg-paper': '#000000',      // Pure Black Paper
      '--zebra-odd': '#1c1c1c',     // Very subtle change for zebra
    },
    // Updated Blue Dark (Ocean) to be more distinct Blue
    bluedark: {
      '--bg-main': '#0f172a',       // Slate 900
      '--bg-panel': '#1e293b',      // Slate 800
      '--bg-header': '#020617',     // Slate 950
      '--text-main': '#e2e8f0',     // Slate 200
      '--text-muted': '#94a3b8',    // Slate 400
      '--border': '#334155',        // Slate 700
      '--accent': '#38bdf8',        // Sky 400
      '--accent-text': '#0f172a',
      '--bg-paper': '#1e293b',      // Dark Paper
      '--zebra-odd': '#253147',
    },
    corporate: {
      '--bg-main': '#d4d4d4',       // Neutral 300 (Darker Grey Background)
      '--bg-panel': '#f5f5f5',      // Neutral 100 (Light Grey Panel)
      '--bg-header': '#262626',     // Neutral 800
      '--text-main': '#171717',     // Neutral 900
      '--text-muted': '#525252',    // Neutral 600
      '--border': '#a3a3a3',        // Neutral 400 (High contrast border)
      '--accent': '#000000',        // Black
      '--accent-text': '#ffffff',
      '--bg-paper': '#ffffff',      // White Paper
      '--zebra-odd': '#e5e5e5',     // [MODIFIED] Visible Grey Striping
    }
  };

  const selected = themes[theme];

  Object.entries(selected).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
};