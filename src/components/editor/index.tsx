'use client';

import { marked } from 'marked';
import { useState } from 'react';

export function Editor() {
  const [markdown, setMarkdown] = useState('');

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
      <div
        className="border border-slate-100 p-3 text-slate-50"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      ></div>
    </section>
  );
}
