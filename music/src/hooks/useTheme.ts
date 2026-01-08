'use client';

import { useState, useEffect } from 'react';
import { Theme, themes } from '@/utils/themes';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('miami');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && themes.includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  return { theme, setTheme, mounted };
}
