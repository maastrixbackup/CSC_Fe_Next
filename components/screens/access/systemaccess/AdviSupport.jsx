import React from 'react'
import AccessNav from '../AccessNav';

function AdviSupport() {
  return (
    <div>
        <AccessNav />

           <section id="advisory-support" className="py-[88px] max-md:py-[72px] max-sm:py-[72px]">
          <div className="max-w-[1240px] mx-auto px-5">
            <div className="inline-flex items-center gap-2 px-[14px] py-2 rounded-full bg-[#eaf2fb] text-[#173b61] text-xs font-bold uppercase tracking-wide mb-[18px]">Optional Add-On</div>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.03em] m-0 mb-[14px]">Advisory Support</h2>
            <p className="max-w-[760px] text-[#5c6b78] text-base md:text-lg m-0">
              Advisory services are available to support implementation, refinement, and standardization
              of documentation governance systems.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-[42px]">
              {/* Structured Review Card */}
              <article className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[28px] max-sm:p-6">
                <div className="text-[#1f4f82] text-[0.82rem] font-extrabold uppercase tracking-wide">Structured Review</div>
                <h3 className="text-[1.45rem] leading-[1.2] tracking-[-0.03em] mt-2.5 m-0">Structured Documentation Readiness Review</h3>
                <div className="text-[2rem] font-extrabold tracking-[-0.04em] mt-3.5">$950</div>
                <p className="text-[#5c6b78] min-h-[70px] mt-2.5">A focused engagement for evaluating current documentation structure and identifying readiness gaps.</p>
                <ul className="list-none p-0 m-[22px_0_0] grid gap-3 text-[#14202b] text-sm">
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">45-minute structured review</li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Documentation evaluation</li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Written summary output</li>
                </ul>
                <div className="mt-[22px]">
                  <a href="/intake/documentation-readiness-review" className="inline-flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-white text-[#14202b] border border-[#b9c5d1] font-bold text-sm hover:border-[#1f4f82] hover:text-[#1f4f82] transition-all duration-200">Request Review</a>
                </div>
              </article>

              {/* Framework Advisory Card */}
              <article className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[28px] max-sm:p-6">
                <div className="text-[#1f4f82] text-[0.82rem] font-extrabold uppercase tracking-wide">Framework Advisory</div>
                <h3 className="text-[1.45rem] leading-[1.2] tracking-[-0.03em] mt-2.5 m-0">Governance Framework Advisory</h3>
                <div className="text-[2rem] font-extrabold tracking-[-0.04em] mt-3.5">$3,750</div>
                <p className="text-[#5c6b78] min-h-[70px] mt-2.5">Structured advisory support for organizations building or refining documentation governance workflows.</p>
                <ul className="list-none p-0 m-[22px_0_0] grid gap-3 text-[#14202b] text-sm">
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Workflow structuring guidance</li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Documentation sequencing</li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Implementation roadmap</li>
                </ul>
                <div className="mt-[22px]">
                  <a href="/intake/governance-framework-advisory" className="inline-flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-white text-[#14202b] border border-[#b9c5d1] font-bold text-sm hover:border-[#1f4f82] hover:text-[#1f4f82] transition-all duration-200">Request Advisory Intake</a>
                </div>
              </article>

              {/* Enterprise Advisory Card */}
              <article className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[28px] max-sm:p-6">
                <div className="text-[#1f4f82] text-[0.82rem] font-extrabold uppercase tracking-wide">Enterprise Advisory</div>
                <h3 className="text-[1.45rem] leading-[1.2] tracking-[-0.03em] mt-2.5 m-0">Enterprise Advisory Engagement</h3>
                <div className="text-[2rem] font-extrabold tracking-[-0.04em] mt-3.5">Custom</div>
                <p className="text-[#5c6b78] min-h-[70px] mt-2.5">Multi-project governance support for standardization, executive alignment, and portfolio implementation.</p>
                <ul className="list-none p-0 m-[22px_0_0] grid gap-3 text-[#14202b] text-sm">
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Multi-project governance review</li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Executive advisory sessions</li>
                  <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Standardization framework</li>
                </ul>
                <div className="mt-[22px]">
                  <a href="/intake/enterprise-advisory" className="inline-flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-[#1f4f82] text-white font-bold text-sm shadow-[0_12px_24px_rgba(31,79,130,0.2)] hover:bg-[#173b61] hover:-translate-y-px transition-all duration-200">Request Enterprise Advisory</a>
                </div>
              </article>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AdviSupport
