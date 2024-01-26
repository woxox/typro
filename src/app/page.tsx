'use client';

import { Box } from '@/components/atom/Box';
import { Button } from '@/components/atom/Button';
import { SpecialInput } from '@/components/atom/SpecialInput';
import { Text } from '@/components/atom/Text';
import { useThemeStore } from '@/store/themeStore';

export default function Home() {
  const { toggleDarkMode } = useThemeStore();

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
      <Text fontSize={'14'}>Type this text.</Text>
      <Text fontSize={'14'} opacity={'disabled'}>
        Type this text.
      </Text>
      <SpecialInput placeholder="This is sample text. 샘플 텍스트." />
    </Box>
  );
}
