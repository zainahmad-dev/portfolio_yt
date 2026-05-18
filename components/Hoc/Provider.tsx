"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ResolvedTheme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  systemTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'system';
    }

    const storedTheme = window.localStorage.getItem('theme');

    if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
      return storedTheme;
    }

    return 'system';
  });
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => getSystemTheme());

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const updateSystemTheme = () => setSystemTheme(getSystemTheme());

    updateSystemTheme();
    media.addEventListener('change', updateSystemTheme);

    return () => media.removeEventListener('change', updateSystemTheme);
  }, []);

  useEffect(() => {
    const resolvedTheme = theme === 'system' ? systemTheme : theme;

    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [systemTheme, theme]);

  const value = useMemo(
    () => ({
      theme,
      systemTheme,
      setTheme,
    }),
    [systemTheme, theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within Provider');
  }

  return context;
};

export default Provider;
