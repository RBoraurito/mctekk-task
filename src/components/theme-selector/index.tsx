'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

export const THEMES = ['light', 'dark', 'party'];

interface ThemeSelectorProps {
  setTheme(theme: string): void;
  theme: (typeof THEMES)[number];
  children: ReactNode;
}

export function ThemeSelector({ setTheme, theme: currentTheme, children }: ThemeSelectorProps) {
  const activeClass = 'bg-slate-50 text-slate-900';
  return (
    <div className="flex justify-between border-b border-slate-50 p-2">
      <div className="flex gap-2">
        {THEMES.map((theme) => (
          <button
            key={theme}
            onClick={() => setTheme(theme)}
            className={clsx(
              'rounded-lg border border-slate-50 px-3 py-1 hover:bg-slate-50 hover:text-slate-900',
              theme === currentTheme ? activeClass : 'bg-slate-800',
            )}
          >
            {theme}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
