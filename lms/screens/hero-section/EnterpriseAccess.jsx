import Link from "next/link";

const EnterpriseAccess = () => {
  return (
    <div className="py-12 md:py-14">
      <section
        className="relative overflow-hidden py-8 md:py-10"
        style={{
          background:
            "linear-gradient(135deg, #1C2F5C 0%, #162448 60%, #0f1a35 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d6deeb]">
            Enterprise Access
          </div>
          <h2 className="mt-3 max-w-4xl text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Controlled portal access for members, teams, and enterprise
            stakeholders.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            This area is positioned for member login, role-based entry, and
            enterprise-facing portal access with a clean, controlled visual
            treatment rather than a consumer-style sign-in experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/access"
              className="w-full rounded-xl border-2 border-white bg-[#1a237e] px-6 py-3 text-center text-sm font-semibold tracking-wide text-white shadow-2xl transition-all duration-300 hover:bg-[#0d47a1] hover:shadow-[#1a237e]/50 sm:px-8 sm:py-4 sm:text-base md:w-auto md:min-w-[260px]"
            >
              Request Portal Access
            </Link>
            <Link
              href="/member-login"
              className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold tracking-wide text-white shadow-2xl transition-all duration-300 hover:bg-white/20 hover:shadow-[#ffffff]/50 sm:px-8 sm:py-4 sm:text-base md:w-auto md:min-w-[260px]"
            >
              Member Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseAccess;
