const Positioning = () => {
  return (
    <section
      className="relative overflow-hidden px-4 py-8 md:px-6 md:py-10"
      style={{
        background: "linear-gradient(135deg, #1C2F5C 0%, #162448 60%, #0f1a35 100%)",
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

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6">
          <div className="text-center">
            <p className="mx-auto max-w-6xl text-center font-bold leading-tight text-white md:text-2xl lg:text-3xl">
              Documentation Governance, Not Documentation Management
            </p>

            <div className="mx-auto mt-5 max-w-7xl space-y-4 text-center text-lg leading-relaxed text-white/80 md:text-xl">
              <p>
                Most systems focus on collecting and storing documentation.
                That creates visibility, but not control.
              </p>

              <p>
                ClaimScope
                <span className="align-super text-sm text-white/75">TM</span>{" "}
                establishes a governance layer that defines how documentation
                is structured, validated, and carried forward across workflows.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-3xl rounded-2xl border border-white  px-4 py-3 text-center shadow-[0_0_0_1px_rgba(251,146,60,0.12)] backdrop-blur-[2px]">
              <p className="text-lg font-semibold leading-snug text-white md:text-xl">
                We do not manage documents We establish control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
