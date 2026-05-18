import { Building2, CheckCircle2, Droplet, House, XCircle } from "lucide-react";

export const capabilityItems = [
  "Standardized scope narratives",
  "Field-to-office alignment",
  "Documentation validation workflows",
  "Operational tracking consistency",
];

export const outcomeItems = [
  "Reduced execution friction",
  "Aligned teams and documentation",
  "Increased operational clarity",
  "Scalable project workflows",
];

export const frameworkSteps = [
  "Intake & Defined Scope",
  "Input & Assumption Validation",
  "Field Execution Alignment",
  "Continuous Revalidation",
];

export const capabilityItemsD = [
  "Disaster documentation readiness",
  "FEMA IA/PA education (advisory)",
  "Structured intake workflows",
  "Documentation validation",
];

export const outcomeItemsD = [
  "Increased readiness",
  "Improved documentation clarity",
  "Structured disaster workflows",
  "Scalable response systems",
];

export const audienceItemsD = [
  "Organizations preparing for disaster events",
  "Organizations responding to disaster events",
];

//Case Studies
export const caseStudies = [
  {
    id: "roofing",
    slug: "roofing",
    title: "Roofing Contractor",
    subtitle: "Startup to scalable operations",
    iconBg: "bg-blue-50",
    accentColor: "#1a237e",
    accentBg: "#E6F1FB",
    isFlagship: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          stroke="#1a237e"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="#E6F1FB"
        />
      </svg>
    ),
    engagementContext: {
      industry: "Roofing Contractor",
      environment: "Multi-project operations",
      initialState: "Fragmented documentation across field and office",
      duration: "12–24 month operational transition",
    },
    before: [
      "Documentation varied across projects and crews",
      "Scope was not consistently carried into execution",
      "Field and office workflows were disconnected",
      "Tracking did not reflect actual job progress",
      "Limited ability to scale operations consistently",
      "Field and office misalignment reduced execution consistency across projects."
    ],
    after: [
      "Standardized documentation across all projects",
      "Scope, tracking, and execution aligned",
      "Consistent workflows between field and office",
      "Improved visibility into project documentation",
      "Established foundation for scalable operations",
    ],
    summary:
      "Over a two-year period, the contractor implemented structured documentation practices across active projects. By aligning scope definition, field documentation, and tracking workflows, the organization transitioned from inconsistent execution to a repeatable and scalable operational model. This transformation was achieved through documentation governance, not increased workload.",
  },
  {
    id: "water",
    slug: "water-mitigation",
    title: "Water mitigation company",
    subtitle: "Multi-project emergency response",
    iconBg: "bg-teal-50",
    accentColor: "#1a237e",
    accentBg: "#E1F5EE",
    isFlagship: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C12 2 4 10 4 15a8 8 0 0016 0C20 10 12 2 12 2z"
          fill="#E1F5EE"
          stroke="#1a237e"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    engagementContext: {
      industry: "Water Mitigation Company",
      environment: "Multi-project emergency response",
      initialState: "Inconsistent documentation under time pressure",
      duration: "6–18 month operational transition",
    },
    before: [
      "Inconsistent documentation across emergency jobs",
      "Field teams documenting differently under time pressure",
      "Scope not consistently aligned with work performed",
      "Limited visibility across active mitigation projects",
      "Disorganized photo and moisture documentation",
      "Time-sensitive environments amplified the impact of documentation inconsistency."
    ],
    after: [
      "Standardized documentation across all mitigation jobs",
      "Consistent field logs and moisture tracking",
      "Alignment between scope, tracking, and execution",
      "Clear visibility into all active projects",
      "Organized and repeatable documentation structure",
    ],
    summary:
      "Over time, the company implemented structured documentation practices across emergency response projects. This resulted in consistent field documentation, improved internal coordination, and a repeatable system that supported scaling operations without increasing confusion or documentation gaps.",
  },
  {
    id: "realty",
    slug: "real-estate",
    title: "Real estate professional",
    subtitle: "Multi-property portfolio management",
    iconBg: "bg-violet-50",
    accentColor: "#1a237e",
    accentBg: "#EEEDFE",
    isFlagship: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 12L12 4l9 8"
          stroke="#534AB7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"
          stroke="#534AB7"
          strokeWidth="1.5"
          fill="#EEEDFE"
          fillOpacity="0.6"
        />
      </svg>
    ),
    engagementContext: {
      industry: "Real Estate Professional",
      environment: "Multi-property portfolio management",
      initialState: "Inconsistent documentation across properties",
      duration: "6–12 month operational transition",
    },
    before: [
      "Each property documented differently",
      "Inconsistent tracking of property status and timelines",
      "Reporting varied across properties",
      "Difficulty maintaining organization across multiple assets",
      "Limited standardization across transactions",
      "Portfolio-level inconsistency led to reporting drift and decision variability."
    ],
    after: [
      "Standardized documentation across all properties",
      "Consistent tracking of status, timelines, and records",
      "Aligned reporting structure across portfolio",
      "Improved organization across all assets",
      "Repeatable documentation system for property management",
    ],
    summary:
      "The real estate professional implemented a structured documentation framework across multiple properties. This created consistency in how records were maintained, improved clarity across transactions, and established a scalable system for managing a growing portfolio.",
  },
];
export const caseStudiesFlagship = [
  {
    id: "roofing",
    route: "/case-study/roofing",
    Icon: House,
    title: "Roofing Contractor",
    subtitle: "Startup to scalable operations",
    borderColor: "border-[#c7d2fe]",
    headerBg: "bg-[#1a237e]",
    badgeBg: "bg-[#e8eaf6]",
    badgeText: "text-[#1a237e]",
    before: [
      "Documentation varied across projects and crews",
      "Scope not consistently carried into execution",
    ],
    after: [
      "Standardized documentation across all projects",
      "Scope, tracking, and execution aligned",
    ],
  },
  {
    id: "water",
    route: "/case-study/water-mitigation",
    Icon: Droplet,
    title: "Water Mitigation Company",
    subtitle: "Multi-project emergency response",
    borderColor: "border-[#bfdbfe]",
    headerBg: "bg-[#1a237e]",
    badgeBg: "bg-[#e0f2fe]",
    badgeText: "text-[#1e3a8a]",
    before: [
      "Inconsistent documentation across emergency jobs",
      "Limited visibility across active projects",
    ],
    after: [
      "Standardized docs and moisture tracking",
      "Clear visibility into all active projects",
    ],
  },
  {
    id: "realty",
    route: "/case-study/real-estate",
    Icon: Building2,
    title: "Real Estate Professional",
    subtitle: "Multi-property portfolio management",
    borderColor: "border-[#cbd5e1]",
    headerBg: "bg-[#1a237e]",
    badgeBg: "bg-[#e8eaf6]",
    badgeText: "text-[#1a237e]",
    before: [
      "Each property documented differently",
      "Reporting varied across properties",
    ],
    after: [
      "Standardized documentation across all properties",
      "Repeatable system for portfolio management",
    ],
  },
];

//Intake Modules
export const intakeFormData ={
      // A) Identity & Role
        client_full_name: "",
        client_email: "",
        client_phone: "",
        client_role: "contractor", // Updated default value
    
        // Track Selection (Required)
        track_selection: "track_3", // Set default for testing
    
        // State (Required)
        state: "",
    
        // Engagement Goal (Array format with [])
        engagement_goal: [],
    
        // Documentation Status
        documentation_collected: false,
        document_types: [],
        submitted_third_party: false,
        third_party_details: "",
    
        // Loss Summary
        property_type: "Commercial",
        loss_date: "",
        event_type: "Hurricane",
        mitigation_performed: false,
        repairs_completed: false,
        property_address: "",
        city: "",
        zip_code: "",
        estimated_loss_size: "",
        timeline_urgency: "",
        document_volume: "",
    
        // Prior Assistance (Array format)
        prior_assistance: [],
        prior_assistance_other_details: "",
    
        // Informational Parties (Array format)
        informational_parties: [],
    
        // Logging / Storage Consent
        consent_logging_storage: false,
    
        // REO Fields
        inspection_date: "",
        inspection_status: "",
        vendor_bids: "",
    
        // Disaster Fields
        mitigation_status: "",
        temporary_repairs: false,
        displacement_status: "",
        requires_admin_review: false,
        fema_flag: false,
    
        // Documentation Inventory
        photos: false,
        photos_upload_mode: "", // Track upload mode
        contractor_estimate: false,
        insurance_estimate: false,
        mitigation_invoice: false,
        engineering_report: false,
        denial_letter: false,
        receipts: false,
        docs_not_organized: false,
    
        // Scope Analysis (Array format)
        scope_analysis: [],
    
        // Complexity Flags (Array format)
        complexity_flags: [],
    
        // FEMA Education (Array format)
        fema_education: [],
    
        // Preferences
        output_preference: "PDF Summary",
        engagement_type: "Single Matter",
        additional_context: "",
    
        // Compliance
        compliance_acknowledged: false,
        compliance_confirmation: [],
}

export const roleToTrackSuggestion = {
    contractor: "track_1",
    roofer: "track_1",
    "mitigation company": "track_1",
    "general contractor": "track_1",
    "trade partner": "track_1",
    "property owner": "track_3",
    homeowner: "track_3",
    investor: "track_2",
    "investor / reo": "track_2",
    "bank / asset manager": "track_2",
    "property manager": "track_2",
    "municipality / public entity": "track_3",
    nonprofit: "track_3",
    "small business": "track_3",
    "internal staff": "track_3",
    admin: "track_3",
    reviewer: "track_3",
  };
//  export const prohibitedPatterns = [
//       { pattern: /\bnegotiat(e|ion|ing|or)\b/i, keyword: "negotiation" },
//       { pattern: /\brepresent(ation|ative|ing|ed)\b/i, keyword: "representation" },
//       { pattern: /\b(settle|settlement)\b/i, keyword: "settlement negotiation" },
//       {
//         pattern: /\b(coverage|claim amount|pay me|payment|increase|reduce)\b.*\b(determin|decid|evaluat|adjust)\b/i,
//         keyword: "coverage determination",
//       },
//       {
//         pattern: /\b(influence|affect|impact|change).{0,20}\b(outcome|result|decision|reservation)\b/i,
//         keyword: "outcome influence",
//       },
//       {
//         pattern: /\b(hire|engage|represent|act on my behalf|legal action|sue|attorney|lawyer)\b/i,
//         keyword: "representation request",
//       },
//       {
//         pattern: /\b(bad faith|complaint|department of insurance|DOI)\b/i,
//         keyword: "regulatory action",
//       },
//     ];

export const DocumentationInventory= [
                { name: "photos", label: "Photos of Damage" },
                { name: "contractor_estimate", label: "Contractor Estimate" },
                { name: "insurance_estimate", label: "Carrier / Insurance Estimate" },
                { name: "mitigation_invoice", label: "Mitigation Invoice" },
                { name: "engineering_report", label: "Engineering Report" },
                { name: "denial_letter", label: "Denial Letter" },
                { name: "receipts", label: "Receipts / Invoices" },
                { name: "docs_not_organized", label: "Documents Not Organized" },
                { name: "requires_admin_review", label: "Requires Admin Review" },
              ]
