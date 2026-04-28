const Positioning = () => {
  return (
    <div className="py-8 md:py-16 px-2 md:px-6 bg-[#1C2F5C]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Documentation Governance, Not Documentation Management
        </h2>

        {/* Body Content */}
        <div className="space-y-2 text-lg md:text-xl text-white/80 leading-relaxed max-w-7xl py-6">

          <p>
            Most organizations focus on collecting, storing, and organizing documentation.
            That approach creates visibility, but not control.
          </p>

          <p>
            Documentation does not fail because it is missing.
            It fails because it is not structured, aligned, or consistently carried from scope to tracking to field execution.
          </p>

          <p className="font-medium text-white">
            ClaimScope™ was built to address that gap.{" "}
            <span className="font-bold text-orange-500">
              We do not manage documents. We establish control.
            </span>
          </p>

          <p>
            We establish{" "}
            <span className="font-semibold text-white underline decoration-white/40 underline-offset-2">
              documentation governance
            </span>{" "}
            — a structured system that defines how documentation is created,
            validated, aligned, and maintained across operational workflows.
          </p>

          <p>
            This approach transforms documentation from static records into a
            controlled, consistent, and verifiable system that supports operational clarity,
            internal accountability, and long-term scalability.
          </p>

          {/* Closing Impact Statement */}
          <div className="pt-6 border-t border-white/20">
            <p className="text-md md:text-xl font-semibold text-white leading-tight italic">
              Structure creates clarity.
              Governance creates consistency.
              Continuity creates control.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Positioning;