'use client';

import { marked } from 'marked';
import { CSSProperties, useState } from 'react';
import { THEMES, ThemeSelector } from '../theme-selector';
import styles from '@/assets/styles/themes.module.css';
import clsx from 'clsx';
import { Controls } from '../controls';

export function Editor() {
  const [markdown, setMarkdown] = useState('');
  const [theme, setTheme] = useState<(typeof THEMES)[number]>(THEMES[0]);
  const [size, setSize] = useState(16);

  return (
    <section className="mx-auto grid min-h-96 max-w-6xl px-4 lg:grid-cols-2 lg:px-8">
      <div className="border border-slate-100">
        <textarea
          name="markdown"
          id="markdown"
          onChange={(e) => setMarkdown(e.target.value)}
          className="m-0 h-full w-full p-3"
        >
          {markdown}
        </textarea>
      </div>
      <div className="flex flex-col border border-slate-100 text-slate-50">
        <ThemeSelector theme={theme} setTheme={setTheme}>
          <Controls size={size} setSize={setSize} />
        </ThemeSelector>
        <div
          style={{'--text-base': `${size}px`} as CSSProperties}
          className={clsx('p-3', styles.container, styles[theme])}
          dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
        ></div>
      </div>
    </section>
  );
}
