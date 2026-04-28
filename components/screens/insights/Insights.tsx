import Link from "next/link";

import BlogScreen from "@/components/screens/insights/BlogScreen";
import GovernanceModel from "./GovernanceModel";

const thinkingFramework = [
  {
    title: "Structure Drives Execution",
    description:
      "Well-organized documentation creates operational clarity and reduces friction during high-stakes execution.",
  },
  {
    title: "Documentation Is a Control System",
    description:
      "Documentation functions as a governance and accountability mechanism, not just a record-keeping exercise.",
  },
  {
    title: "Readiness Before Response",
    description:
      "Strong documentation systems must be built and maintained before an event occurs, not after.",
  },
  {
    title: "Governance Creates Continuity",
    description:
      "Consistent governance ensures documentation remains reliable across teams, projects, and crisis situations.",
  },
];

const insightCategories = [
  "Documentation Governance",
  "Contractor Documentation Systems",
  "Real Estate / REO Documentation",
  "Disaster Documentation Readiness",
];

export default function Insights() {
  return (
    <div className="bg-gray-50 pb-12 pt-24 text-gray-800">
      <section className="bg-gray-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-3xl font-bold text-[#1a237e] md:text-4xl">
            ClaimScope Insights
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-gray-600">
            Structured insights on documentation governance, operational
            clarity, and documentation readiness systems across contractor, real
            estate, and disaster environments.
          </p>
          <div className="mx-auto inline-block max-w-2xl rounded-xl border border-orange-200 bg-orange-50 px-8 py-4 text-sm">
            All insights are provided within a consulting-only, advisory, and
            educational framework.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 text-center">
        <h2 className="mb-8 text-3xl font-semibold text-[#1a237e] md:text-4xl">
          Documentation Governance Built for Operational Credibility
        </h2>
        <p className="text-lg leading-relaxed text-gray-600">
          ClaimScope provides structured insights into documentation governance
          and readiness systems designed to improve clarity, organization, and
          execution alignment across operational environments.
        </p>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-gray-700">
            ClaimScope operates strictly in a consulting-only capacity. All
            insights are advisory and educational in nature.
          </p>
          <div className="mt-6 inline-block rounded-xl border border-orange-200 bg-white px-8 py-4 text-sm">
            No claim negotiation, representation, legal advice, or third-party
            communication is provided.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border-4 border-[#1a237e] bg-white p-8 shadow-lg">
            <h2 className="mb-8 text-2xl font-semibold text-[#1a237e]">
              What ClaimScope Provides
            </h2>
            <ul className="space-y-5 text-gray-700">
              <li>Documentation governance insights</li>
              <li>Documentation readiness frameworks</li>
              <li>Organizational documentation structure</li>
              <li>FEMA IA/PA documentation education</li>
            </ul>
          </div>

          <div className="rounded-2xl border-4 border-red-200 bg-white p-8 shadow-lg">
            <h2 className="mb-8 text-2xl font-semibold text-red-700">
              What ClaimScope Does Not Provide
            </h2>
            <ul className="space-y-5 text-gray-700">
              <li>Claim negotiation</li>
              <li>Insurance representation</li>
              <li>Legal advice</li>
              <li>Third-party communications</li>
            </ul>
          </div>
        </div>
      </section>
           <section className="py-16 px-6">
        <GovernanceModel />
      </section>
      
   <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#1a237e]">
            Explore Insights by Category
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {insightCategories.map((category) => (
              <Link
                key={category}
                href="/blog"
                className="rounded-2xl border-2 border-[#1a237e] bg-white px-8 py-4 text-center font-medium text-[#1a237e] transition-all duration-300 hover:bg-[#1a237e] hover:text-white"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl">
          <BlogScreen />
        </div>
      </section>

       <footer className="bg-gray-900 text-gray-300 text-sm py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p>
            ClaimScope™ Consulting, LLC provides documentation governance and readiness insights in a consulting-only capacity. 
            No claim handling, negotiation, representation, legal advice, or third-party communication is provided. 
            All content is advisory, educational, and draft-only.
          </p>
        </div>
      </footer>
    </div>
  );
}
