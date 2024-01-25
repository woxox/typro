import { style } from '@vanilla-extract/css';
import { createSprinkles } from '@vanilla-extract/sprinkles';

import { colorProperties } from '@/theme/properties/color-properties.css';
import { responseProperties } from '@/theme/properties/responsive-properties.css';
import { typoProperties } from '@/theme/properties/typo-properties.css';
import { colorToken } from '@/theme/theme.css';

export const textStyles = style({
  color: colorToken['text.primary'],
});

export const textSprinkles = createSprinkles(responseProperties, typoProperties, colorProperties);

export type TextSprinkles = Parameters<typeof textSprinkles>[0];
