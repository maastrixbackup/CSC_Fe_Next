import React from "react";
import { FileText, Download } from "lucide-react";

const defaultResources = [
  "Disaster Documentation Checklist",
  "FEMA IA/PA Intake Template",
  "Contractor Workflow Guide",
  "Governance Audit Framework",
  "Evidence Organization Standards",
  "Continuity Planning Workbook",
  "Field Log Template",
  "Claim Readiness Assessment",
];

const DownloadableResources = ({ resources = defaultResources }) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-14">
      <section>
        <div className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-[0_18px_45px_rgba(14,70,168,0.08)] sm:p-8 md:rounded-3xl md:p-10">

          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  Downloadable Resources
                </span>
              </div>
              <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Templates, PDFs, checklists, and governance materials.
              </h2>
            </div>

            {/* <button className="inline-flex items-center gap-2 self-start md:self-auto rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors whitespace-nowrap">
              <Download className="h-4 w-4" />
              Download all
            </button> */}
          </div>

          {/* Grid */}
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {resources.map((resource) => (
              <div
                key={resource}
                className="group relative cursor-pointer rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-slate-50 p-4 transition-all duration-200 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100 sm:p-5"
              >
                {/* Top row: icon + download hint */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-blue-100 text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200">
                    <FileText className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono text-blue-300 group-hover:text-blue-500 transition-colors duration-200 mt-1">
                    PDF
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold leading-snug text-slate-800 group-hover:text-blue-800 transition-colors duration-200">
                  {resource}
                </h3>

                {/* Download row */}
                <div className="mt-4 flex items-center gap-1.5 opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100">
                  <Download className="h-3 w-3 text-blue-500" />
                  <span className="text-xs font-medium text-blue-500">Download</span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default DownloadableResources;
