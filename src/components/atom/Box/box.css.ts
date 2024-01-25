import { createSprinkles } from '@vanilla-extract/sprinkles';

import { colorProperties } from '@/theme/properties/color-properties.css';
import { responseProperties } from '@/theme/properties/responsive-properties.css';
import { typoProperties } from '@/theme/properties/typo-properties.css';

export const boxSprinkles = createSprinkles(responseProperties, typoProperties, colorProperties);

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
