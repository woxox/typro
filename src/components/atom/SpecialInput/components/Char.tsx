import clsx from 'clsx';
import { useMemo } from 'react';

import { Box } from '../../Box';
import { Text, TextProps } from '../../Text';
import { charInnerVariant, charOuterStyle } from '../specialInput.css';

interface CharProps extends TextProps {
  char: string;
  past?: boolean;
  wrong?: boolean;
  cursor?: boolean;
}

export const Char: React.FC<CharProps> = ({
  char,
  past,
  wrong,
  cursor,
  className,
  children,
  ...props
}) => {
  const character = useMemo(() => {
    if (char === ' ' && wrong) {
      return '_';
    }

    return char;
  }, [char, wrong]);

  return (
    <Box className={charOuterStyle}>
      <Text
        className={clsx(
          charInnerVariant({
            past,
            wrong,
            cursor,
          }),
          className,
        )}
        {...props}
      >
        {character}
      </Text>
      {children}
    </Box>
  );
};
