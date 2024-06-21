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

  async function download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(await marked.parse(markdown)));
    element.setAttribute('download', 'exported-html');
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  return (
    <section className="">
      <div className="mx-auto grid h-[80vh] max-w-6xl px-4 lg:grid-cols-2 lg:px-8">
        <div className="border border-slate-100 overflow-auto">
          <textarea
            name="markdown"
            id="markdown"
            onChange={(e) => setMarkdown(e.target.value)}
            className="m-0 h-full w-full p-3"
          >
            {markdown}
          </textarea>
        </div>
        <div className="flex flex-col border border-slate-100 text-slate-50 overflow-auto">
          <ThemeSelector theme={theme} setTheme={setTheme}>
            <Controls size={size} setSize={setSize} />
          </ThemeSelector>
          <div
            style={{'--text-base': `${size}px`} as CSSProperties}
            className={clsx('p-3', styles.container, styles[theme])}
            dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
          ></div>
        </div>
      </div>
      <button onClick={download} className='px-4 py-2 border border-slate-400 bg-slate-100 rounded-xl text-slate-900 hover:bg-opacity-50 mx-auto my-12 block text-2xl font-bold'>
        Download HTML
      </button>
    </section>
  );
}
