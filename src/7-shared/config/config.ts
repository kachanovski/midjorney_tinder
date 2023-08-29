export const config = {
  API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
  INIT_THEME: 'dark',
  THEMES_VARIANTS: ['light', 'dark'],
  INIT_LANG: 'ru',
  SUPPORTED_LANG: ['ru', 'en'],
} as const
