'use client';

import { Box } from '@/components/atom/Box';
import { Button } from '@/components/atom/Button';
import { PlaceholderInput } from '@/components/atom/SpecialInput';
import { Text } from '@/components/atom/Text';
import { useThemeStore } from '@/store/themeStore';

export default function Home() {
  const { toggleDarkMode } = useThemeStore();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      fontSize={{ all: '20', '2xl': '24' }}
    >
      <PlaceholderInput
        value="This is sample text. 샘플 텍스트."
        placeholder="This is sample text. 샘플 텍스트."
        disabled
      />
      <PlaceholderInput placeholder="This is sample text. 샘플 텍스트." />
    </Box>
  );
}
