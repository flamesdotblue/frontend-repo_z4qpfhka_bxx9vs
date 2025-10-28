import React from 'react';

function Stat({ label, value, color = 'slate' }) {
  const colorMap = {
    slate: 'bg-slate-50 text-slate-700 ring-slate-200',
    emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    amber: 'bg-amber-50 text-amber-700 ring-amber-200',
    indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-200',
  };
  return (
    <div className={`rounded-xl p-3 ring-1 ${colorMap[color]} flex items-center justify-between`}> 
      <span className="text-xs font-medium">{label}</span>
      <span className="text-base font-semibold">{value}</span>
    </div>
  );
}

export default function ProgressPanel({
  total,
  attempted,
  skipped,
  completed,
  currentIndex,
  statuses,
  onJumpTo,
}) {
  return (
    <aside className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-5 md:p-6">
      <h3 className="text-sm font-semibold text-slate-900">Progress</h3>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <Stat label="Total" value={total} color="slate" />
        <Stat label="Completed" value={completed} color="indigo" />
        <Stat label="Attempted" value={attempted} color="emerald" />
        <Stat label="Skipped" value={skipped} color="amber" />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium text-slate-600">Question Navigator</p>
          <div className="flex items-center gap-2 text-[10px] text-slate-500">
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Attempted</span>
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" /> Skipped</span>
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-indigo-500" /> Current</span>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: total }).map((_, i) => {
            const st = statuses[i] || 'unseen';
            const isCurrent = i === currentIndex;
            const base = 'inline-flex items-center justify-center h-9 rounded-lg text-sm font-medium transition border';
            const colors = isCurrent
              ? 'bg-indigo-600 text-white border-indigo-600 shadow'
              : st === 'attempted'
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : st === 'skipped'
              ? 'bg-amber-50 text-amber-700 border-amber-200'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50';
            return (
              <button
                key={i}
                onClick={() => onJumpTo(i)}
                className={`${base} ${colors}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
