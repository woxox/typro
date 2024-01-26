import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { Box } from '../Box';
import { Text } from '../Text';
import { replaceTextAreaVariants } from './replace-text-area.css';

export type ReplaceTextAreaProps = React.HTMLAttributes<HTMLTextAreaElement> &
  RecipeVariants<typeof replaceTextAreaVariants> & { targetText: string };

export const ReplaceTextArea: React.FC<ReplaceTextAreaProps> = ({
  targetText,
  className,
  children,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>('');
  const [cursorIndex, setCursorIndex] = useState<number>(0);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onSelect = (e: React.SyntheticEvent<HTMLTextAreaElement, Event>) => {
    setCursorIndex(e.currentTarget.selectionStart);
  };

  const focusToTextArea = () => {
    textAreaRef.current?.focus();
  };

  useEffect(() => {
    if (!textAreaRef.current) return;
  }, []);

  return (
    <pre>
      <Box display={'flex'} flexDirection={'row'} onClick={focusToTextArea}>
        <Text>
          {text.split('').map((char, index) => {
            const isWrong: boolean = char !== targetText[index];

            return (
              <span
                key={index}
                style={{
                  color: isWrong ? 'red' : 'inherit',
                  borderLeft: index === cursorIndex ? 'solid 0.2px' : 'none',
                }}
              >
                {char === ' ' ? (isWrong ? '_' : ' ') : char}
              </span>
            );
          })}
        </Text>
        <Text opacity={'disabled'}>{targetText.substring(text.length, targetText.length)}</Text>
      </Box>
      <textarea
        ref={textAreaRef}
        className={clsx(replaceTextAreaVariants(), className)}
        onChange={onChange}
        onSelect={onSelect}
      >
        {children}
      </textarea>
    </pre>
  );
};
