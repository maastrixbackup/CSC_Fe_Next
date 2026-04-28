import React from 'react'
import AccessNav from '../AccessNav';
function AcessSystem() {
  return (
    <div>
        <AccessNav />
             <section id="system-access" className="py-[88px] max-md:py-[72px] max-sm:py-[72px]">
          <div className="max-w-[1240px] mx-auto px-5">
            <div className="inline-flex items-center gap-2 px-[14px] py-2 rounded-full bg-[#eaf2fb] text-[#173b61] text-xs font-bold uppercase tracking-wide mb-[18px]">System Access</div>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.03em] m-0 mb-[14px]">ClaimScope™ System Access</h2>
            <p className="max-w-[760px] text-[#5c6b78] text-base md:text-lg m-0">
              Access structured documentation governance tools, training modules, and implementation-ready
              workflows designed to improve organization, standardization, and audit readiness.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-[42px]">
              {/* Foundation Access Card */}
              <article className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[30px] max-sm:p-6 flex flex-col h-[700px] overflow-hidden">
                <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                  <div className="text-[#1f4f82] text-[0.88rem] font-extrabold uppercase tracking-[0.08em] mb-2.5">Foundation Access</div>
                  <h3 className="text-[1.65rem] leading-[1.15] tracking-[-0.03em] m-0">For baseline documentation structure</h3>
                  <div className="flex items-baseline gap-1.5 mt-[18px]">
                    <strong className="text-[2.6rem] leading-none tracking-[-0.05em]">$199</strong>
                    <span className="text-[#5c6b78] font-semibold">/ month</span>
                  </div>
                  <p className="text-[#5c6b78] text-sm mt-4">Built for individuals establishing a disciplined documentation process and foundational workflow structure.</p>
                  <div className="inline-flex self-start mt-[18px] px-3 py-2 rounded-full bg-[#f3f6f9] text-[#14202b] text-[0.85rem] font-bold">Best for early-stage implementation</div>
                  <ul className="list-none p-0 m-[22px_0_0] grid gap-3 text-[#14202b] text-sm">
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Core documentation structuring workflows</li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Limited governance templates</li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Introductory training modules</li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Single-user access</li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Basic checklist system</li>
                  </ul>
                </div>
                <div className="pt-[22px] shrink-0">
                  <a href="/intake/access-foundation" className="flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-white text-[#14202b] border border-[#b9c5d1] font-bold text-sm hover:border-[#1f4f82] hover:text-[#1f4f82] transition-all duration-200">Start Foundation Access</a>
                </div>
              </article>

              {/* Professional Access Card (Featured) */}
              <article className="relative bg-white border border-[#1f4f82] rounded-3xl shadow-[0_24px_48px_rgba(31,79,130,0.14)] p-[30px] max-sm:p-6 flex flex-col h-[700px] overflow-hidden -translate-y-1">
                <div className="absolute top-[18px] right-[18px] px-3 py-[7px] rounded-full bg-[#1f4f82] text-white text-[0.75rem] font-extrabold uppercase tracking-wide z-10">Most Popular</div>
                <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                  <div className="text-[#1f4f82] text-[0.88rem] font-extrabold uppercase tracking-[0.08em] mb-2.5">Professional Access</div>
                  <h3 className="text-[1.65rem] leading-[1.15] tracking-[-0.03em] m-0">For active project documentation governance</h3>
                  <div className="flex items-baseline gap-1.5 mt-[18px]">
                    <strong className="text-[2.6rem] leading-none tracking-[-0.05em]">$499</strong>
                    <span className="text-[#5c6b78] font-semibold">/ month</span>
                  </div>
                  <p className="text-[#5c6b78] text-sm mt-4">Full documentation governance system access for teams managing active project environments and structured workflows.</p>
                  <div className="inline-flex self-start mt-[18px] px-3 py-2 rounded-full bg-[#f3f6f9] text-[#14202b] text-[0.85rem] font-bold">Built for active project environments</div>
                  <ul className="list-none p-0 m-[22px_0_0] grid gap-3 text-[#14202b] text-sm">
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Full documentation governance system</li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Complete template library</li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Readiness workflow tools</li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">LMS training system access</li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Up to 3 users</li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Structured documentation checklists</li>
                    <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Readiness scoring visibility</li>
                  </ul>
                </div>
                <div className="pt-[22px] shrink-0">
                  <a href="/intake/access-professional" className="flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-[#1f4f82] text-white font-bold text-sm shadow-[0_12px_24px_rgba(31,79,130,0.2)] hover:bg-[#173b61] hover:-translate-y-px transition-all duration-200">Start Professional Access</a>
                </div>
              </article>

              {/* Enterprise Access Card */}
              <article className="bg-white border border-[#d9e0e7] rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[30px] max-sm:p-6 flex flex-col h-[700px] overflow-hidden">
                <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                  <div className="text-[#1f4f82] text-[0.88rem] font-extrabold uppercase tracking-[0.08em] mb-2.5">Enterprise Access</div>
                  <h3 className="text-[1.65rem] leading-[1.15] tracking-[-0.03em] m-0">For portfolio-level documentation governance and operational standardization</h3>
                  <div className="flex items-baseline gap-1.5 mt-[18px] flex-wrap">
                    <strong className="text-[2rem] leading-none tracking-[-0.05em]">$2,000 - $4,000+</strong>
                    <span className="text-[#5c6b78] font-semibold">/ month</span>
                  </div>
                  <p className="text-[#5c6b78] text-sm mt-2">Based on team size, deployment scope, and governance requirements</p>
                  <p className="text-[#5c6b78] text-sm mt-2">Built for organizations managing multiple projects, teams, or property portfolios. Deploy a structured documentation governance framework designed to improve consistency, reduce decision friction, and establish audit-ready operational standards across your organization.</p>
                  <div className="inline-flex self-start mt-[18px] px-3 py-2 rounded-full bg-[#f3f6f9] text-[#14202b] text-[0.85rem] font-bold">Designed for multiple teams or projects</div>

                  {/* What This Enables */}
                  <div className="mt-5 pt-2">
                    <div className="text-[#1f4f82] text-[0.75rem] font-extrabold uppercase tracking-wide mb-2">What This Enables</div>
                    <ul className="list-none p-0 m-0 grid gap-2 text-[#14202b] text-sm">
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Multi-user system access across teams and roles</li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Portfolio-level documentation structure and oversight</li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Standardized workflows across projects and locations</li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Custom framework configuration aligned to your operations</li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Internal training system deployment (LMS access)</li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Readiness visibility across active documentation environments</li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Priority advisory access for implementation alignment</li>
                    </ul>
                  </div>

                  {/* Designed For */}
                  <div className="mt-5 pt-2">
                    <div className="text-[#1f4f82] text-[0.75rem] font-extrabold uppercase tracking-wide mb-2">Designed For</div>
                    <ul className="list-none p-0 m-0 grid gap-2 text-[#14202b] text-sm">
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Contractor organizations managing multiple crews or jobs</li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Real estate portfolios (REO, investors, property managers)</li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Disaster response environments requiring structured documentation</li>
                      <li className="relative pl-[26px] before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[10px] before:h-[10px] before:rounded-full before:bg-[#1f4f82]">Organizations requiring internal standardization across teams</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-[22px] shrink-0">
                  <a href="/intake/enterprise-licensing" className="flex w-full items-center justify-center min-h-[52px] px-[22px] rounded-full bg-white text-[#14202b] border border-[#b9c5d1] font-bold text-sm hover:border-[#1f4f82] hover:text-[#1f4f82] transition-all duration-200">Request Enterprise Access</a>
                </div>
              </article>
            </div>

            <div className="mt-[28px] p-5 rounded-2xl bg-[#edf7f0] text-[#224b31] text-sm border border-[#d9e0e7]">
              <strong>Important System Notice:</strong> System access provides documentation structuring tools and workflows only.
              All outputs are draft-only and intended for internal use. ClaimScope™ Consulting provides advisory support only and does not engage in representation or third-party communications.
            </div>
          </div>
        </section>
    </div>
  )
}

export default AcessSystem
