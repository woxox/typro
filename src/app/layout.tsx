'use client';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { HiMoon, HiSun } from 'react-icons/hi';

import { Box } from '@/components/atom/Box';
import { Button } from '@/components/atom/Button';
import { Text } from '@/components/atom/Text';
import { useThemeStore } from '@/store/themeStore';
import { baseTokenClass, darkThemeClass, lightThemeClass } from '@/theme/theme.css';

import './global-style.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: "Create Turborepo",
//   description: "Generated by create turbo",
// };

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <html lang="en" className={clsx(inter.className)}>
      <body className={clsx(baseTokenClass, darkMode ? darkThemeClass : lightThemeClass)}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          height={'full'}
          gap={'1'}
        >
          <Box
            backgroundColor={'background.container'}
            borderRadius={'sm'}
            minWidth={'180'}
            padding={'4'}
            borderBottomLeftRadius="0"
            borderBottomRightRadius="0"
          >
            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <Text fontSize={'18'}>Typro</Text>
                <Box display={'flex'} height={'5'} width={'0.5'} backgroundColor={'text.primary'} />
                <Text fontSize={'18'} opacity={'disabled'}>
                  grammer
                </Text>
              </Box>
              <Button onClick={toggleDarkMode}>
                <Box display="flex">{darkMode ? <HiSun /> : <HiMoon />}</Box>
              </Button>
            </Box>
          </Box>

          <Box
            backgroundColor={'background.container'}
            borderRadius={'sm'}
            padding={'4'}
            minWidth={'180'}
            borderTopLeftRadius="0"
            borderTopRightRadius="0"
          >
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
