import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';
import { useMemo } from 'react';

import { Box } from '../../Box';
import { Text, TextProps } from '../../Text';
import { charInnerVariant, charOuterStyle } from '../specialInput.css';

type CharProps = RecipeVariants<typeof charInnerVariant> &
  TextProps & {
    char: string;
  };

export const Char: React.FC<CharProps> = ({
  char,
  past,
  wrong,
  size,
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
            size,
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
