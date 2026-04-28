import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tracks = [
  {
    href: "/solutions/contractor-tracks",
    title: "Contractor Documentation Support",
    description:
      "Structured documentation governance for field and office operations.",
  },
  {
    href: "/solutions/reo-tracks",
    title: "Real Estate / REO Documentation Readiness",
    description:
      "Governance and reporting alignment across portfolio workflows.",
  },
  {
    href: "/solutions/disaster",
    title: "Disaster Documentation Readiness + FEMA IA/PA Education",
    description:
      "Advisory support for disaster readiness, intake, and documentation continuity.",
  },
];

export const metadata = {
  title: "Solutions | ClaimScope Consulting",
  description:
    "Explore ClaimScope documentation governance solutions for contractors, REO portfolios, and disaster readiness.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 pb-20 pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1a237e]">
            Solutions
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Structured documentation systems for high-friction operations.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Choose the operational environment that best matches your needs and
            go straight into the relevant ClaimScope framework.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {tracks.map((track) => (
            <Link
              key={track.href}
              href={track.href}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex w-fit rounded-full bg-[#e8eaf6] px-4 py-2 text-sm font-semibold text-[#1a237e]">
                Track
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">
                {track.title}
              </h2>
              <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                {track.description}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#1a237e]">
                Explore Track
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
