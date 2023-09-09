export const THEMES = ['halloween', 'light'] as const;
export type Theme = typeof THEMES[number];

export const THEME_DEFAULT: Theme= 'light';

export function isTheme(theme: string): theme is Theme {
  return THEMES.includes(theme as Theme);
}
