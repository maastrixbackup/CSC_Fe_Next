import React from 'react'
import { BookOpen } from "lucide-react";

const TrainingCategories = () => {
    const trainingCategories = [
  "Documentation readiness",
  "Continuity training",
  "FEMA educational awareness",
  "Contractor workflows",
  "Audit-aware practices",
];
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-14">
        
        <section >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[24px] bg-blue-900 p-6 text-white shadow-[0_20px_55px_rgba(16,32,51,0.18)] sm:p-8 md:rounded-[30px] md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d5dde7]">
                Training Categories
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                Core categories aligned to documentation governance needs.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Category design emphasizes internal education, documentation
                discipline, and continuity support without drifting into
                overstated compliance claims.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trainingCategories.map((category) => (
                <div
                  key={category}
                  className="rounded-[20px] border border-[#d8e0e8] bg-white p-5 shadow-[0_15px_40px_rgba(16,32,51,0.05)] sm:p-6 md:rounded-[24px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f7] text-[#102033]">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold text-[#102033] sm:text-lg">
                      {category}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default TrainingCategories
