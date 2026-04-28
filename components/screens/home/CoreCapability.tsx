const CoreCapablity = () => {
  return (
    <div className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e] leading-tight">
            The Control Layer Behind Consistent Operations
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ClaimScope™ establishes a structured governance layer across documentation workflows, 
            ensuring that records are not only created, but consistently aligned, validated, 
            and maintained throughout the operational lifecycle.
          </p>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our capabilities are designed to eliminate inconsistency, reduce execution gaps, 
            and support long-term documentation continuity across projects, teams, and environments.
          </p>
        </div>

        {/* Capability Blocks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Documentation Structure */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#1a237e]">
            <div className="w-14 h-14 bg-[#1a237e] text-white rounded-2xl flex items-center justify-center text-3xl font-bold mb-6">
              1
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Documentation Structure
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Establishes a standardized framework for how documentation is created, organized, 
              and maintained across all projects to ensure consistency and clarity from intake through completion.
            </p>
          </div>

          {/* Record Alignment */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#1a237e]">
            <div className="w-14 h-14 bg-[#1a237e] text-white rounded-2xl flex items-center justify-center text-3xl font-bold mb-6">
              2
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Record Alignment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ensures documentation remains consistent across scope, tracking, and field execution. 
              Reducing discrepancies and preventing misalignment across teams and workflows.
            </p>
          </div>

          {/* Operational Transparency */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#1a237e]">
            <div className="w-14 h-14 bg-[#1a237e] text-white rounded-2xl flex items-center justify-center text-3xl font-bold mb-6">
              3
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Operational Transparency
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Provides clear visibility into documentation status, completeness, and structure 
              to support internal awareness and informed decision-making.
            </p>
          </div>

          {/* Governance Continuity */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#1a237e]">
            <div className="w-14 h-14 bg-[#1a237e] text-white rounded-2xl flex items-center justify-center text-3xl font-bold mb-6">
              4
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Governance Continuity
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Maintains documentation consistency across the full project lifecycle, 
              ensuring that structure and alignment are preserved as projects evolve and scale.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoreCapablity;