import { COLOR_PALETTE } from '../token/color-palette';
import { DARK_COLOR_TOKEN } from './dark.css';

export const LIGHT_COLOR_TOKEN: typeof DARK_COLOR_TOKEN = {
  // background
  'background.surface': COLOR_PALETTE.white,
  'background.primary': COLOR_PALETTE.zinc600,
  'background.primary.hover': COLOR_PALETTE.zinc700,

  // text
  'text.primary': COLOR_PALETTE.zinc950,

  // button text
  'text.button.primary': COLOR_PALETTE.white,
};
