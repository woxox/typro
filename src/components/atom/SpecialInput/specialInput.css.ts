import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { baseToken, colorToken } from '@/theme/theme.css';

export const speicalInputStyle = style({
  paddingTop: baseToken.spacing['2'],
  cursor: 'pointer',
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

export const cursorStyle = style({
  position: 'absolute',
  display: 'inline',
  content: '" "',
  borderRadius: baseToken.radius.full,
  left: '25%',
  // transform: 'translateX(-50%)',
  width: baseToken.width['1'],
  height: baseToken.height['1'],
  backgroundColor: colorToken['text.primary'],
  // animation: `${cursorBlankAnimation} 1s infinite ease-in`,
});
