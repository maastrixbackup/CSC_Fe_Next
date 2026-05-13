import React from 'react'

const GovernanceSection = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-14">
         <section className="relative overflow-hidden">
          <div className="rounded-[24px] border border-[#e1d1ab] bg-[linear-gradient(135deg,#fff9ea_0%,#f4ead1_100%)] p-6 shadow-[0_18px_45px_rgba(16,32,51,0.05)] sm:p-8 md:rounded-[30px] md:p-10">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7c6844]">
              Compliance &amp; Governance
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#102033] sm:text-3xl md:text-4xl">
              Compliance-safe operational language for enterprise environments.
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#5e543f] sm:text-base">
              Educational content, templates, and workflows should be presented
              as internal readiness resources intended to support documentation
              discipline, continuity planning, and governance-aware operations.
              This design space is appropriate for enterprise disclaimers,
              internal-use notices, and controlled training language.
            </p>
          </div>
        </section> 
    </div>
  )
}

export default GovernanceSection
