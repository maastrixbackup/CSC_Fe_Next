import React from 'react'
import AccessNav from '../AccessNav';

const EnterpriseLicence = () => {
  return (
    <div>
        <AccessNav />
         <section id="enterprise-licensing" className="py-[88px] max-md:py-[72px] max-sm:py-[72px]">
          <div className="max-w-[1240px] mx-auto px-5">
            <div className="bg-[#0f1720] text-white rounded-3xl shadow-[0_18px_40px_rgba(15,23,32,0.08)] p-[52px] max-md:p-[34px] grid md:grid-cols-[1fr_auto] gap-7 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-[14px] py-2 rounded-full bg-[#eaf2fb] text-[#173b61] text-xs font-bold uppercase tracking-wide mb-[18px]">Enterprise Licensing &amp; Governance</div>
                <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] tracking-[-0.03em] m-0 text-white">Standardized documentation governance for organizations operating across multiple projects, teams, or portfolios.</h2>
                <p className="mt-3.5 text-white/80 max-w-[760px]">
                  ClaimScope™ Enterprise Licensing is designed for organizations requiring multi-user system access,
                  portfolio-level governance, controlled internal training deployment, and structured advisory integration.
                </p>
                <ul className="mt-6 p-0 list-none grid sm:grid-cols-2 gap-3 gap-x-[18px]">
                  <li className="relative pl-[22px] text-white/90 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#8fc1ff]">Multi-user system access</li>
                  <li className="relative pl-[22px] text-white/90 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#8fc1ff]">Portfolio-level governance</li>
                  <li className="relative pl-[22px] text-white/90 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#8fc1ff]">Standardization protocols</li>
                  <li className="relative pl-[22px] text-white/90 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#8fc1ff]">Advisory integration</li>
                </ul>
              </div>
              <div className="md:text-right">
                <a href="/intake/enterprise-licensing" className="inline-flex items-center justify-center min-h-[52px] px-[22px] rounded-full bg-[#1f4f82] text-white font-bold text-sm shadow-[0_12px_24px_rgba(31,79,130,0.2)] hover:bg-[#173b61] hover:-translate-y-px transition-all duration-200">Request Enterprise Licensing</a>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default EnterpriseLicence
