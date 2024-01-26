'use client';

import { Box } from '@/components/atom/Box';
import { ReplaceTextArea } from '@/components/atom/ReplaceTextArea';
import { Text } from '@/components/atom/Text';

export default function Home() {
  const targetText: string = 'this is a target text';

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
      <Text fontSize={'14'}>{targetText}</Text>
      <ReplaceTextArea targetText={targetText}></ReplaceTextArea>
    </Box>
  );
}
