'use client';

import { Box } from '@/components/atom/Box';
import { Button } from '@/components/atom/Button';
import { Text } from '@/components/atom/Text';
import { useThemeStore } from '@/store/themeStore';

export default function Home() {
  const { toggleDarkMode } = useThemeStore();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      height={'full'}
    >
      <Box
        backgroundColor={'background.container'}
        borderRadius={'xs'}
        minWidth={'96'}
        paddingY={'4'}
      >
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} paddingX={'4'}>
          <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <Text fontSize={'18'}>Typro</Text>
            <Box display={'flex'} height={'5'} width={'0.5'} backgroundColor={'text.primary'} />
            <Text fontSize={'18'} opacity={'disabled'}>
              grammer
            </Text>
          </Box>
          <Button onClick={toggleDarkMode}>Toggle Theme</Button>
        </Box>

        <Box backgroundColor={'background.surface'} width={'full'} height={'0.5'} marginY={'4'} />

        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-between'}
          paddingX={'4'}
        >
          <Text fontSize={'14'}>Type this text.</Text>
          <Text fontSize={'14'} opacity={'disabled'}>
            Type this text.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
