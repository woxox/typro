import {
  assignVars,
  createThemeContract,
  fallbackVar,
  keyframes,
  style,
} from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { baseToken, colorToken } from '@/theme/theme.css';

export const placeholderInputVariant = recipe({
  base: {
    cursor: 'pointer',
  },
  variants: {
    disabled: {
      false: {
        paddingTop: baseToken.spacing['2'],
      },
      true: {},
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const textAreaStyle = style({
  position: 'absolute',
  zIndex: '-999',
  opacity: 0,
  width: baseToken.width['1'],
});

const cursorBlankAnimation = keyframes({
  '0%': {
    opacity: 1,
    // transform: 'scale(0.5)',
  },
  '50%': {
    opacity: 0,
    // transform: 'scale(1)',
  },
  '100%': {
    opacity: 1,
    // transform: 'scale(0.5)',
  },
});

const charVars = createThemeContract({
  color: null,
});

export const cursorStyle = style({
  position: 'absolute',
  display: 'inline',
  content: '" "',
  borderRadius: baseToken.radius.full,
  left: '0',
  right: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
  top: '-20%',
  width: baseToken.width['1.5'],
  height: baseToken.height['1.5'],
  backgroundColor: fallbackVar(charVars.color, colorToken['text.primary']),
  opacity: 1,
  // animation: `${cursorBlankAnimation} 0.75s infinite ease-in-out`,
});

export const charInnerVariant = recipe({
  base: {
    color: charVars.color,
    display: 'inline-block',
    // fontFamily: 'monospace',
    minWidth: baseToken.width['1.5'],
    height: baseToken.height.full,
    textAlign: 'center',
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
        vars: assignVars(charVars, {
          color: colorToken['text.primary.wrong'],
        }),
      },
    },
  },
  defaultVariants: {
    past: false,
    wrong: false,
  },
});

export const charOuterStyle = style({
  vars: assignVars(charVars, {
    color: colorToken['text.primary'],
  }),
  position: 'relative',
  display: 'inline-block',
});
