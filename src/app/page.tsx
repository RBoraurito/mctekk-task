import { Editor } from '@/components/editor';

export default function Home() {
  return (
    <main className="h-screen bg-slate-900 py-8 lg:py-16">
      <h1 className="mb-8 text-center text-2xl font-bold text-slate-100">Markdown previewer</h1>
      <Editor />
    </main>
  );
}
