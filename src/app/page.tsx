'use client';

import { Box } from '@/components/atom/Box';
import { Button } from '@/components/atom/Button';
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
    </Box>
  );
}
