'use client';

import { useCallback, useState } from 'react';

import { Box } from '@/components/atom/Box';
import { Button } from '@/components/atom/Button';
import { PlaceholderInput } from '@/components/atom/SpecialInput';
import { Text } from '@/components/atom/Text';
import { useThemeStore } from '@/store/themeStore';

export default function Home() {
  const [input, setInput] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [sentencies, setSentencies] = useState<string[]>([
    '확실한 손길이 좋은 작품을 만든다.',
    '한 걸음씩 나아가는 것이 중요하다.',
    '우정은 어려움을 함께 이겨낸다.',
    '꿈을 키우는 데는 인내가 필요하다.',
    '희망은 어둠을 밝히는 불빛이다.',
  ]);

  const handleInputSubmit = useCallback(() => {
    if (sentencies[sentenceIndex + 1] === undefined) return;

    setSentenceIndex((p) => p + 1);
    setInput('');
  }, [sentenceIndex, sentencies]);

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      fontSize={{ all: '20', '2xl': '24' }}
    >
      <PlaceholderInput
        value={sentencies[sentenceIndex]}
        placeholder={sentencies[sentenceIndex]}
        disabled
      />
      <PlaceholderInput
        value={input}
        onChange={setInput}
        placeholder={sentencies[sentenceIndex]}
        onSubmit={handleInputSubmit}
      />
    </Box>
  );
}
