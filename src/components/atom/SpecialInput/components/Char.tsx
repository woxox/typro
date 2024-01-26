import clsx from 'clsx';
import { useMemo } from 'react';

import { chatVariant } from './chat.css';

interface CharProps extends React.HTMLAttributes<HTMLDivElement> {
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
    <span
      className={clsx(
        chatVariant({
          past,
          wrong,
          cursor,
        }),
        className,
      )}
      {...props}
    >
      {character}
      {children}
    </span>
  );
};
