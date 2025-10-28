import React from 'react';

export default function NavigationBar({ onPrev, onNext, isFirst, isLast }) {
  return (
    <div className="flex items-center justify-between mt-6">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-sm border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ← Previous
      </button>
      <button
        onClick={onNext}
        className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm border border-emerald-300 bg-emerald-600 text-white hover:bg-emerald-700"
      >
        {isLast ? 'Finish' : 'Next →'}
      </button>
    </div>
  );
}
