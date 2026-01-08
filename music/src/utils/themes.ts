export const themes = [
  'miami', 'helsinki', 'berlin', 'london'
] as const;

export type Theme = typeof themes[number];
