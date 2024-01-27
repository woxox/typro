import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';

import { useControlled } from '@/hooks/useControlled';

import { Char } from './components/Char';
import { cursorStyle, speicalInputStyle, textAreaStyle } from './specialInput.css';

interface SpecialInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  placeholder: string;
  value?: string;
  focusable?: boolean;
  stiffness?: number;
  damping?: number;
  onSubmit?: (data: string) => void;
}

export const SpecialInput: React.FC<SpecialInputProps> = ({
  placeholder,
  value,
  focusable = true,
  stiffness = 2000,
  damping = 75,
  className,
  onSubmit,
  ...rest
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useControlled('', value);
  const [focused, setFocused] = useState(false);
  const [cursor, setCursor] = useState(0);

  const handleInputEnd = useCallback(() => {
    onSubmit?.(input);
  }, [input, onSubmit]);

  const handleKeyDown = useCallback<React.KeyboardEventHandler<HTMLTextAreaElement>>(
    (e) => {
      const BLOCKED_KEYS = ['Enter'];

      if (e.key === 'Enter') {
        e.preventDefault();
        handleInputEnd();
      }

      if (BLOCKED_KEYS.includes(e.key) || e.ctrlKey) {
        e.preventDefault();
      }
    },
    [handleInputEnd],
  );

  const handleBeforeInput = useCallback<React.FormEventHandler<HTMLTextAreaElement>>(
    (e) => {
      if (placeholder.length === input.length) {
        e.preventDefault();
        handleInputEnd();
      }
    },
    [handleInputEnd, input.length, placeholder.length],
  );

  return (
    <div
      onClick={() => {
        console.log(textareaRef.current);
        textareaRef.current?.focus();
      }}
      className={clsx(speicalInputStyle, className)}
      {...rest}
    >
      <textarea
        ref={textareaRef}
        className={textAreaStyle}
        value={input}
        onKeyDown={handleKeyDown}
        onSelect={(e) => {
          setCursor(e.currentTarget.selectionStart);
        }}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onBeforeInput={handleBeforeInput}
        disabled={!focusable}
      />
      <AnimatePresence>
        {placeholder.split('').map((char, idx, arr) => (
          <Char
            key={idx}
            char={input[idx] ?? char}
            past={idx < input.length}
            wrong={idx < input.length && char !== input[idx]}
            // cursor={focused && (cursor === idx || (arr.length <= idx + 1 && cursor >= idx))}
          >
            {focused && (cursor === idx || (arr.length <= idx + 1 && cursor >= idx)) && (
              <motion.div
                className={cursorStyle}
                layoutId="cursor"
                transition={{ type: 'spring', stiffness, damping }}
              />
            )}
          </Char>
        ))}
      </AnimatePresence>
    </div>
  );
};
