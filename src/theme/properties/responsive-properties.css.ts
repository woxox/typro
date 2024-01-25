import { defineProperties } from '@vanilla-extract/sprinkles';

import { colorToken } from '../theme.css';
import { height } from '../token/height';
import { radius } from '../token/radius';
import { spacing } from '../token/spacing';
import { width } from '../token/width';
import { conditions } from './conditions';

export const responseProperties = defineProperties({
  conditions,
  defaultCondition: 'all',
  properties: {
    backgroundColor: colorToken,
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    flex: {
      full: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    boxSizing: ['border-box', 'content-box'],
    gap: spacing,
    opacity: {
      invisible: 0,
      visible: 1,
      disabled: 0.3,
    },
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    width,
    minWidth: width,
    maxWidth: width,
    height,
    minHeight: height,
    maxHeight: height,
    borderRadius: radius,
    // etc.
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});
