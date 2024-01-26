import { recipe } from '@vanilla-extract/recipes';

export const replaceTextAreaVariants = recipe({
  base: {
    position: 'absolute',
    zIndex: -999,
    opacity: 0,
  },
});
