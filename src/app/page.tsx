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
      <Text>Type this text.</Text>
      <Text opacity={'disabled'}>This is sample text. 샘플 텍스트.</Text>
      <SpecialInput
        value="This is sample text. 샘플 텍스트."
        placeholder="This is sample text. 샘플 텍스트."
        focusable={false}
      />
      <SpecialInput placeholder="This is sample text. 샘플 텍스트." />
    </Box>
  );
}
