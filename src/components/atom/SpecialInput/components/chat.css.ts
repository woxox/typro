import { createThemeContract, keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { baseToken, colorToken } from '@/theme/theme.css';

const charVars = createThemeContract({
  cursorBgColor: null,
});

export const chatVariant = recipe({
  base: {
    position: 'relative',
  },
  variants: {
    past: {
      false: {
        opacity: 0.5,
      },
      true: {
        opacity: 1,
      },
    },
    wrong: {
      false: {},
      true: {
        color: colorToken['text.primary.wrong'],
      },
    },
    cursor: {
      false: {},
      true: {},
    },
  },
  defaultVariants: {
    past: false,
    wrong: false,
  },
});
