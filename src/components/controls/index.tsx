interface ControlsProps {
  size: number;
  setSize: (value: number) => void;
}

export function Controls({ size, setSize }: ControlsProps) {
  function handleIncrement() {
    setSize(size + 1);
  }

  function handleDecrement() {
    setSize(size - 1);
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={handleIncrement}
        className="rounded-lg border border-slate-50 bg-slate-800 px-3 py-1 hover:bg-slate-50 hover:text-slate-900"
      >
        +
      </button>
      <input
        type="text"
        readOnly
        value={size}
        className="w-10 rounded text-center text-slate-900"
      />
      <button
        onClick={handleDecrement}
        className="rounded-lg border border-slate-50 bg-slate-800 px-3 py-1 hover:bg-slate-50 hover:text-slate-900"
      >
        －
      </button>
    </div>
  );
}
