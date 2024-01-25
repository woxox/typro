'use client';

import { Box } from '@/components/atom/Box';
import { Button } from '@/components/atom/Button';
import { Text } from '@/components/atom/Text';
import { useThemeStore } from '@/store/themeStore';

export default function Home() {
  const { toggleDarkMode } = useThemeStore();

  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'full'}>
      <Box
        backgroundColor={'background.container'}
        borderRadius={'xs'}
        display={'flex'}
        flexDirection={'column'}
        padding={'6'}
        minWidth={'96'}
      >
        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
          <Button onClick={toggleDarkMode}>Toggle Theme</Button>
        </Box>
        <Text fontSize={'18'}>Type this text.</Text>
        <Text fontSize={'18'} paddingTop={'4'}>
          Type this text.
        </Text>
      </Box>
    </Box>
  );
}
