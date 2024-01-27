import { fontFace, globalStyle } from '@vanilla-extract/css';

import { baseToken, colorToken } from '@/theme/theme.css';

// export const notoSans = fontFace([
//   {
//     src: 'url("./font/NotoSans.ttf")',
//   },
//   {
//     src: 'url("./font/NotoSansKR.ttf")',
//   },
// ]);

globalStyle('html, body', {
  width: '100vw',
  height: '100vh',
});

globalStyle('body', {
  color: colorToken['text.primary'],
  backgroundColor: colorToken['background.surface'],
  ...baseToken.fontSize['18'],
  ...baseToken.transition.colors,
});
