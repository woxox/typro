'use client';

import { Button } from '@/components/atom/Button';
import { useThemeStore } from '@/store/themeStore';

export default function Home() {
  const { toggleDarkMode } = useThemeStore();

  return (
    <div>
      <Button onClick={toggleDarkMode}>default</Button>
      <Button disabled>disabled</Button>
    </div>
  );
}
