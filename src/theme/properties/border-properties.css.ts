import { defineProperties } from '@vanilla-extract/sprinkles';

import { conditions } from './conditions';

export const borderProperties = defineProperties({
  conditions,
  defaultCondition: 'all',
  properties: {
    border: {
      none: 'none',
      solid: 'solid',
    },
    borderRight: {
      none: 'none',
      cursor: 'solid 1px',
    },
  },
});
