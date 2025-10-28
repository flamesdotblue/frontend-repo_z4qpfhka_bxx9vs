import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden rounded-2xl shadow-lg">
      <Spline
        scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="backdrop-blur-sm bg-white/50 rounded-xl px-6 py-4 md:px-10 md:py-6 shadow-xl">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Multiple Choice Test
          </h1>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-slate-600 max-w-2xl">
            A clean, focused interface for completing assessments with real‑time progress.
          </p>
        </div>
      </div>
    </section>
  );
}
