import React from 'react';

export default function QuestionCard({
  question,
  options,
  index,
  total,
  selectedOption,
  onSelect,
  status,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">
            Question {index + 1} of {total}
          </p>
          <h2 className="mt-1 text-lg md:text-xl font-semibold text-slate-900 leading-snug whitespace-pre-line">
            {question}
          </h2>
        </div>
        <span
          className={
            'shrink-0 rounded-full px-3 py-1 text-xs font-medium ' +
            (status === 'attempted'
              ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
              : status === 'skipped'
              ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200'
              : 'bg-slate-50 text-slate-600 ring-1 ring-slate-200')
          }
        >
          {status === 'attempted' ? 'Attempted' : status === 'skipped' ? 'Skipped' : 'Unseen'}
        </span>
      </div>

      <div className="mt-6 grid gap-3">
        {options.map((opt, i) => {
          const isSelected = selectedOption === opt.value;
          return (
            <label
              key={opt.value}
              className={
                'flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition shadow-sm ' +
                (isSelected
                  ? 'border-emerald-300 bg-emerald-50'
                  : 'border-slate-200 bg-white hover:border-slate-300')
              }
            >
              <input
                type="radio"
                name={`q-${index}`}
                value={opt.value}
                checked={isSelected}
                onChange={() => onSelect(opt.value)}
                className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500"
              />
              <div className="">
                <div className="text-slate-900 font-medium">{opt.label}</div>
                {opt.description ? (
                  <div className="text-sm text-slate-600 mt-0.5">{opt.description}</div>
                ) : null}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
