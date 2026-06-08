"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import {
  DocumentationInventory,
  intakeFormData,
  roleToTrackSuggestion,
} from "@/utils/constants";

const IntakeForm = () => {
  const [form, setForm] = useState(intakeFormData);
  const searchParams = useSearchParams();

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [prohibitedContentFlags, setProhibitedContentFlags] = useState([]);
  const [photoCategories, setPhotoCategories] = useState({});
  const [trackManuallySelected, setTrackManuallySelected] = useState(false);

  useEffect(() => {
    const trackId = searchParams.get("id");
    const trackTitle = searchParams.get("title");

    if (!trackId && !trackTitle) return;

    setForm((prev) => ({
      ...prev,
      track_selection: trackId || prev.track_selection,
      engagement_type: trackTitle || prev.engagement_type,
    }));
  }, [searchParams]);

  const checkProhibitedContent = (text) => {
    const prohibitedPatterns = [
      { pattern: /\bnegotiat(e|ion|ing|or)\b/i, keyword: "negotiation" },
      { pattern: /\brepresent(ation|ative|ing|ed)\b/i, keyword: "representation" },
      { pattern: /\b(settle|settlement)\b/i, keyword: "settlement negotiation" },
      {
        pattern: /\b(coverage|claim amount|pay me|payment|increase|reduce)\b.*\b(determin|decid|evaluat|adjust)\b/i,
        keyword: "coverage determination",
      },
      {
        pattern: /\b(influence|affect|impact|change).{0,20}\b(outcome|result|decision|reservation)\b/i,
        keyword: "outcome influence",
      },
      {
        pattern: /\b(hire|engage|represent|act on my behalf|legal action|sue|attorney|lawyer)\b/i,
        keyword: "representation request",
      },
      {
        pattern: /\b(bad faith|complaint|department of insurance|DOI)\b/i,
        keyword: "regulatory action",
      },
    ];
    //   prohibitedPatterns.forEach(({ pattern, keyword }) => {  
    //   if (pattern.test(text)) {
    //     console.warn(`Prohibited content detected: ${keyword}`);
    //   }
    // });

    const found = [];
    for (const { pattern, keyword } of prohibitedPatterns) {
      if (pattern.test(text)) {
        found.push(keyword);
      }
    }
    return found;
  };
 

  // Helper to toggle array values
  const toggleArrayValue = (array, value) => {
    if (array.includes(value)) {
      return array.filter(item => item !== value);
    } else {
      return [...array, value];
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle array fields
    const arrayFields = [
      'engagement_goal', 'document_types', 'prior_assistance', 
      'informational_parties', 'scope_analysis', 'complexity_flags', 
      'fema_education', 'compliance_confirmation'
    ];
    
    if (arrayFields.includes(name) && type === 'checkbox') {
      setForm(prev => ({
        ...prev,
        [name]: toggleArrayValue(prev[name], value)
      }));
      return;
    }
    
    // Handle all boolean fields (will be converted to 0/1 in submit)
    if (type === "checkbox") {
      const booleanFields = [
        'documentation_collected', 'submitted_third_party', 'mitigation_performed',
        'repairs_completed', 'consent_logging_storage', 'photos', 'contractor_estimate',
        'insurance_estimate', 'mitigation_invoice', 'engineering_report', 'denial_letter',
        'receipts', 'docs_not_organized', 'compliance_acknowledged', 'temporary_repairs', 
        'fema_flag', 'requires_admin_review'
      ];
      
      if (booleanFields.includes(name)) {
        setForm(prev => ({ ...prev, [name]: checked }));
        return;
      }
    }
    
    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (name === "track_selection") {
        setTrackManuallySelected(true);
      }

      if (name === "client_role" && !trackManuallySelected) {
        const suggestedTrack = roleToTrackSuggestion[value] || "track_3";
        updated.track_selection = suggestedTrack;
      }

      // Handle "none" for informational parties
      if (name === "informational_parties" && value === "None" && checked) {
        updated.informational_parties = ["None"];
      } else if (name === "informational_parties" && value === "None" && !checked) {
        updated.informational_parties = updated.informational_parties.filter(item => item !== "None");
      } else if (name === "informational_parties" && updated.informational_parties.includes("None") && checked) {
        updated.informational_parties = [value];
      }

      return updated;
    });
  };

  const handleAdditionalContextChange = (e) => {
    const value = e.target.value;
    const violations = checkProhibitedContent(value);
    setProhibitedContentFlags(violations);
    setForm({
      ...form,
      additional_context: value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length === 0) return;

    setFiles((prevFiles) => {
      const merged = [...prevFiles, ...selectedFiles];
      return merged.slice(0, 25);
    });

    setForm((prev) => ({ ...prev, photos: true }));
    
    // Set upload mode based on which input was used
    if (e.target.id === 'photo-upload-files') {
      setForm(prev => ({ ...prev, photos_upload_mode: "UPLOAD" }));
    } else if (e.target.id === 'photo-capture-camera') {
      setForm(prev => ({ ...prev, photos_upload_mode: "CAPTURE" }));
    }

    e.target.value = "";
  };

  const removeFile = (indexToRemove) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );

    if (files.length === 1) {
      setForm((prev) => ({ ...prev, photos: false }));
    }

    setPhotoCategories((prev) => {
      const updated = { ...prev };
      delete updated[indexToRemove];
      return updated;
    });
  };

  const validateCompliance = () => {
    const requiredConfirmations = [
      "consulting_only",
      "no_negotiation",
      "no_third_party",
      "draft_only"
    ];
    
    const hasAllConfirmations = requiredConfirmations.every(
      confirmation => form.compliance_confirmation.includes(confirmation)
    );

    if (!hasAllConfirmations) return false;
    if (!form.compliance_acknowledged) return false;
    if (prohibitedContentFlags.length > 0) return false;

    return true;
  };

  const validateRequiredFields = () => {
    const missingFields = [];

    if (!form.track_selection) missingFields.push("Track Selection");
    if (!form.state.trim()) missingFields.push("State");
    if (!form.property_address.trim()) missingFields.push("Property Address");
    if (!form.city.trim()) missingFields.push("City");
    if (!form.zip_code.trim()) missingFields.push("Zip Code");
    if (form.engagement_goal.length === 0) missingFields.push("Engagement Goal (select at least one)");
    
    // Check third_party_details if submitted_third_party is true
    if (form.submitted_third_party && !form.third_party_details.trim()) {
      missingFields.push("Third Party Details (required since documents were submitted to third party)");
    }

    return missingFields;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const missingFields = validateRequiredFields();
    if (missingFields.length > 0) {
      setMessage(`Please complete required fields: ${missingFields.join(", ")}`);
      setMessageType("error");
      return;
    }

    if (!validateCompliance()) {
      if (prohibitedContentFlags.length > 0) {
        setMessage(
          `Compliance Violation: The following prohibited content was detected - ${prohibitedContentFlags.join(", ")}. Please remove any negotiation, representation, outcome influence, or coverage determination requests.`
        );
      } else {
        setMessage("Please confirm all compliance conditions to proceed.");
      }
      setMessageType("error");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const formData = new FormData();

      // Append all form fields with proper array syntax
      Object.keys(form).forEach((key) => {
        if (Array.isArray(form[key])) {
          // Handle array fields - append with [] suffix
          const arrayKey = `${key}[]`;
          form[key].forEach(value => {
            if (value && value !== "") {
              formData.append(arrayKey, value);
            }
          });
        } else if (typeof form[key] === "boolean") {
          // Convert boolean to 1/0 integer for all boolean fields including:
          // mitigation_performed, repairs_completed, temporary_repairs, 
          // mitigation_invoice, documentation_collected, requires_admin_review, etc.
          formData.append(key, form[key] ? "1" : "0");
        } else if (form[key] !== null && form[key] !== "") {
          formData.append(key, form[key]);
        }
      });

      // Add photo categories as array with [] suffix
      const photoCategoriesList = Object.values(photoCategories).filter(cat => cat);
      photoCategoriesList.forEach(category => {
        formData.append("photo_categories[]", category);
      });

      // Append files with correct field name
      files.forEach((file) => {
        formData.append("photos_files", file);
      });

      // Log the FormData contents for debugging
      console.log("Submitting form data:");
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      const res = await fetch("/api/intake/submit", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(
          errorData?.message || `Failed to submit intake (${res.status})`
        );
      }

      const data = await res.json();

      setMessage(data.message || "Intake submitted successfully!");
      setMessageType("success");

      // Reset form after successful submission
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } catch (err) {
      console.error("Submission error:", err);
      setMessage(
        err instanceof Error
          ? err.message
          : "Failed to submit intake. Please try again."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-300 to-blue-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#1a237e] tracking-tight">
            CSC Enterprise Intake Form
          </h1>
          <p className="text-slate-600 mt-2">
            Documentation Consulting Support Only
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-orange-50 rounded-3xl shadow-pink-200/60 shadow-2xl p-10 space-y-12 border-2 border-slate-100"
        >
          {/* Identity & Role */}
          <section className="border-b-2 border-slate-200 pb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="text-blue-600"></span> Identity & Role
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="client_full_name"
                  value={form.client_full_name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="client_email"
                  value={form.client_email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  placeholder="client@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="client_phone"
                  value={form.client_phone}
                  required
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Client Role
                </label>
                <select
                  name="client_role"
                  value={form.client_role}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                >
                  {/* Contractor Options */}
                  <option value="contractor">Contractor</option>
                  <option value="roofer">Roofer</option>
                  <option value="mitigation company">Mitigation Company</option>
                  <option value="general contractor">General Contractor</option>
                  <option value="trade partner">Trade Partner</option>
                  
                  {/* Property Owner Options */}
                  <option value="property owner">Property Owner</option>
                  <option value="homeowner">Homeowner</option>
                  <option value="investor">Investor</option>
                  <option value="investor / reo">Investor / REO</option>
                  <option value="bank / asset manager">Bank / Asset Manager</option>
                  <option value="property manager">Property Manager</option>
                  <option value="municipality / public entity">Municipality / Public Entity</option>
                  <option value="nonprofit">Nonprofit</option>
                  <option value="small business">Small Business</option>
                  
                  {/* Internal Options */}
                  <option value="internal staff">Internal Staff</option>
                  <option value="admin">Admin</option>
                  <option value="reviewer">Reviewer</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Track Selection <span className="text-red-500">*</span>
                </label>
                <select
                  name="track_selection"
                  value={form.track_selection}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                >
                  <option value="">Select a service track</option>
                  <option value="track_1">Track 1: Contractor Documentation Support</option>
                  <option value="track_2">Track 2: Real Estate / REO Documentation Readiness</option>
                  <option value="track_3">Track 3: Disaster Documentation Readiness + FEMA Education</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Florida, Texas, California"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>
          </section>

          {/* Engagement & Documentation Status */}
          <section className="border-b-2 border-slate-200 pb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="text-green-600"></span> Engagement & Documentation Status
            </h2>

            {/* Engagement Goal - Array format */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Engagement Goal <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  { value: "Documentation Readiness", label: "Documentation Readiness" },
                  { value: "Organization", label: "Organization" },
                  { value: "Education", label: "Education" },
                  { value: "Template Request", label: "Template Request" },
                  { value: "File Inventory", label: "File Inventory" },
                ].map((goal) => (
                  <label
                    key={goal.value}
                    className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 cursor-pointer hover:bg-blue-50 transition"
                  >
                    <input
                      type="checkbox"
                      name="engagement_goal"
                      value={goal.value}
                      checked={form.engagement_goal.includes(goal.value)}
                      onChange={handleChange}
                      className="w-5 h-5 accent-green-600"
                    />
                    <span className="text-slate-700">{goal.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Documentation Status */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Documentation Status <span className="text-red-500">*</span>
              </label>
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="documentation_collected"
                    checked={form.documentation_collected}
                    onChange={handleChange}
                    className="w-5 h-5 accent-green-600"
                  />
                  <span className="text-slate-700">
                    Do you currently have documents collected?
                  </span>
                </label>

                {form.documentation_collected && (
                  <div className="ml-8 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      What types of documents do you have?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { value: "Photos", label: "Photos" },
                        { value: "Invoices", label: "Invoices" },
                        { value: "Estimates", label: "Estimates" },
                        { value: "Reports", label: "Reports" },
                      ].map((type) => (
                        <label key={type.value} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="document_types"
                            value={type.value}
                            checked={form.document_types.includes(type.value)}
                            onChange={handleChange}
                            className="w-4 h-4 accent-green-600"
                          />
                          <span>{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submission Status */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer mb-3">
                <input
                  type="checkbox"
                  name="submitted_third_party"
                  checked={form.submitted_third_party}
                  onChange={handleChange}
                  className="w-5 h-5 accent-blue-600"
                />
                <span className="text-slate-700">
                  Have any documents already been submitted to a third party?
                </span>
              </label>

              {form.submitted_third_party && (
                <div className="ml-8">
                  <textarea
                    name="third_party_details"
                    value={form.third_party_details}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                    placeholder="What was submitted and when? (e.g., Photos submitted to insurance adjuster on 01/15/2024)"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Loss Summary */}
          <section className="border-b-2 border-slate-200 pb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="text-blue-600"></span> Loss Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Property Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="property_address"
                  value={form.property_address}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Zip Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="zip_code"
                  value={form.zip_code}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Property Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="property_type"
                  value={form.property_type}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Multi-Family">Multi-Family</option>
                  <option value="Public/Municipal">Public / Municipal</option>
                  <option value="Mixed Use">Mixed Use</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Loss Date
                </label>
                <input
                  type="date"
                  name="loss_date"
                  value={form.loss_date}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Event Type
                </label>
                <select
                  name="event_type"
                  value={form.event_type}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="Water">Water Damage</option>
                  <option value="Fire">Fire</option>
                  <option value="Wind">Wind</option>
                  <option value="Hurricane">Hurricane</option>
                  <option value="Flood">Flood</option>
                  <option value="Hail">Hail</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Estimated Loss Size
                </label>
                <select
                  name="estimated_loss_size"
                  value={form.estimated_loss_size}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="<10K">&lt;10K</option>
                  <option value="10k-50k">10K-50K</option>
                  <option value="50k-150k">50K-150K</option>
                  <option value="150K+">150K+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Timeline Urgency
                </label>
                <select
                  name="timeline_urgency"
                  value={form.timeline_urgency}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="standard">Standard</option>
                  <option value="expedited">Expedited</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Document Volume
                </label>
                <select
                  name="document_volume"
                  value={form.document_volume}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="1-10">1-10</option>
                  <option value="10-50">10-50</option>
                  <option value="50-150">50-150</option>
                  <option value="150+">150+</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="mitigation_performed"
                  checked={form.mitigation_performed}
                  onChange={handleChange}
                  className="w-5 h-5 accent-blue-600"
                />
                <span className="text-slate-700">Mitigation Performed</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="repairs_completed"
                  checked={form.repairs_completed}
                  onChange={handleChange}
                  className="w-5 h-5 accent-blue-600"
                />
                <span className="text-slate-700">Repairs Completed</span>
              </label>
            </div>

            {/* Prior Assistance - Array format */}
            <div className="mt-8">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Has anyone else already assisted with documentation?
              </label>

              <div className="flex gap-6 mb-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="has_prior_assistance"
                    checked={form.prior_assistance.length > 0}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        prior_assistance: [
                          "Contractor",
                          "Adjuster",
                          "Attorney",
                          "Other",
                        ],
                      }))
                    }
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span>Yes</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="has_prior_assistance"
                    checked={form.prior_assistance.length === 0}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        prior_assistance: [],
                        prior_assistance_other_details: "",
                      }))
                    }
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span>No</span>
                </label>
              </div>

              {form.prior_assistance.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  {[
                    { value: "Contractor", label: "Contractor" },
                    { value: "Adjuster", label: "Adjuster" },
                    { value: "Attorney", label: "Attorney" },
                    { value: "Other", label: "Other" },
                  ].map((assistance) => (
                    <label key={assistance.value} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="prior_assistance"
                        value={assistance.value}
                        checked={form.prior_assistance.includes(assistance.value)}
                        onChange={handleChange}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span>{assistance.label}</span>
                    </label>
                  ))}

                  {form.prior_assistance.includes("Other") && (
                    <div className="sm:col-span-2 md:col-span-4">
                      <input
                        type="text"
                        name="prior_assistance_other_details"
                        value={form.prior_assistance_other_details}
                        onChange={handleChange}
                        placeholder="Please specify"
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Informational Parties - Array format */}
            <div className="mt-8">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Informational party involvement (select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {[
                  { value: "Contractor", label: "Contractor" },
                  { value: "Insurance Carrier", label: "Insurance Carrier" },
                  { value: "Adjuster", label: "Adjuster" },
                  { value: "Attorney", label: "Attorney" },
                  { value: "None", label: "None" },
                ].map((party) => (
                  <label key={party.value} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="informational_parties"
                      value={party.value}
                      checked={form.informational_parties.includes(party.value)}
                      onChange={handleChange}
                      className="w-4 h-4 accent-blue-600"
                    />
                    <span>{party.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Logging/Storage Consent */}
            <div className="mt-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent_logging_storage"
                  checked={form.consent_logging_storage}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 accent-blue-600"
                />
                <span className="text-slate-700 text-sm">
                  I understand submitted information will be securely stored and
                  logged for documentation and compliance purposes.
                  <span className="text-red-500"> *</span>
                </span>
              </label>
            </div>
          </section>

          {/* REO Section */}
          {form.track_selection === "track_2" && (
            <section className="border-b-2 border-slate-200 pb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-blue-600"></span> REO Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Inspection Date
                  </label>
                  <input
                    type="date"
                    name="inspection_date"
                    value={form.inspection_date}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Inspection Status
                  </label>
                  <select
                    name="inspection_status"
                    value={form.inspection_status}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="PENDING">Pending</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Vendor Bids
                  </label>
                  <select
                    name="vendor_bids"
                    value={form.vendor_bids}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="NONE">None</option>
                    <option value="1-2">1-2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
              </div>
            </section>
          )}

          {/* Disaster Section */}
          {form.track_selection === "track_3" && (
            <section className="border-b-2 border-slate-200 pb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-blue-600"></span> Disaster Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mitigation Status
                  </label>
                  <select
                    name="mitigation_status"
                    value={form.mitigation_status}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="not_started">Not Started</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Temporary Repairs
                  </label>
                  <select
                    name="temporary_repairs"
                    value={form.temporary_repairs}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Displacement Status
                  </label>
                  <select
                    name="displacement_status"
                    value={form.displacement_status}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select</option>
                    <option value="None">None</option>
                    <option value="Temporary">Temporary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    FEMA Declaration
                  </label>
                  <select
                    name="fema_flag"
                    value={form.fema_flag}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>
            </section>
          )}

          {/* Documentation Inventory */}
          <section className="border-b-2 border-slate-200 pb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="text-blue-600"></span> Documentation Inventory
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {DocumentationInventory.map((item) => (
                <label
                  key={item.name}
                  className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 p-5 rounded-2xl border border-slate-200 cursor-pointer transition-all"
                >
                  <input
                    type="checkbox"
                    name={item.name}
                    checked={form[item.name]}
                    onChange={handleChange}
                    className="w-5 h-5 accent-blue-600 rounded"
                  />
                  <span className="text-slate-700">{item.label}</span>
                </label>
              ))}
            </div>

            {/* Photo Upload Section */}
            <div className="mt-8">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Upload Photos of Damage
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <label
                  htmlFor="photo-upload-files"
                  className="cursor-pointer px-4 py-3 rounded-xl bg-blue-600 text-white text-center font-medium"
                >
                  Upload Files
                </label>

                <label
                  htmlFor="photo-capture-camera"
                  className="cursor-pointer px-4 py-3 rounded-xl bg-emerald-600 text-white text-center font-medium"
                >
                  Take Photo (Mobile)
                </label>
              </div>

              <div className="border-2 border-dashed border-slate-300 hover:border-blue-400 rounded-3xl p-10 transition-all bg-slate-50 hover:bg-blue-50/50 text-center">
                <input
                  type="file"
                  id="photo-upload-files"
                  multiple
                  accept="image/jpeg,image/png,image/jpg,image/heic,image/heif"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <input
                  type="file"
                  id="photo-capture-camera"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <p className="text-slate-600 text-sm">
                  Upload from gallery/files or open camera directly
                </p>
                <p className="text-slate-500 text-xs mt-1">
                  JPEG, PNG, HEIC up to 10MB each (max 25 files)
                </p>
              </div>

              {files.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-medium text-slate-700 mb-3">
                    Selected Photos ({files.length}/25)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {files.map((file, index) => (
                      <div
                        key={file.name + "-" + index}
                        className="flex flex-col gap-2 bg-slate-50 border rounded-2xl p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-1 truncate">
                            <p className="font-medium truncate">{file.name}</p>
                            <p className="text-slate-500 text-xs">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 text-2xl"
                          >
                            ×
                          </button>
                        </div>

                        <select
                          onChange={(e) =>
                            setPhotoCategories({
                              ...photoCategories,
                              [index]: e.target.value,
                            })
                          }
                          value={photoCategories[index] || ""}
                          className="border rounded-2xl p-2 bg-slate-50"
                          required
                        >
                          <option value="">Select Category *</option>
                          <option value="Exterior">Exterior</option>
                          <option value="Interior">Interior</option>
                          <option value="Roof">Roof</option>
                          <option value="Equipment">Equipment</option>
                          <option value="Structural">Structural</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-xs text-gray-500 mt-2">
                Photos are collected for documentation organization and
                readiness support only. ClaimScope does not perform inspections,
                evaluations, or coverage determinations.
              </p>
            </div>
          </section>

          {/* Scope Analysis */}
          {(form.contractor_estimate || form.insurance_estimate) && (
            <section className="bg-amber-50 border border-amber-200 p-8 rounded-3xl">
              <h2 className="text-2xl font-semibold text-amber-900 mb-6 flex items-center gap-3">
                <span className="text-amber-600"></span> Scope Analysis
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { value: "Multiple Estimates Received", label: "Multiple Estimates Received" },
                  { value: "Estimates Materially Different", label: "Estimates Materially Different" },
                  { value: "Missing Line Items Suspected", label: "Missing Line Items Suspected" },
                  { value: "Multiple Trades Involved", label: "Multiple Trades Involved" },
                  { value: "Roof Involved", label: "Roof Involved" },
                ].map((item) => (
                  <label
                    key={item.value}
                    className="flex items-center gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-200 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="scope_analysis"
                      value={item.value}
                      checked={form.scope_analysis.includes(item.value)}
                      onChange={handleChange}
                      className="w-5 h-5 accent-amber-500"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </section>
          )}

          {/* Complexity Factors */}
          <section className="border-b-2 border-slate-200 pb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="text-blue-600"></span> Complexity Indicators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { value: "Damage Across Multiple Areas", label: "Damage Across Multiple Areas" },
                { value: "High Dollar Loss", label: "High Dollar Loss (> $50K)" },
                { value: "Denial or Partial Denial", label: "Denial or Partial Denial" },
                { value: "Engineering Involved", label: "Engineering Involved" },
                { value: "Mold, Asbestos, or Structural Issues", label: "Mold, Asbestos, or Structural Issues" },
                { value: "Client Feels Overwhelmed", label: "Client Feels Overwhelmed" },
              ].map((item) => (
                <label
                  key={item.value}
                  className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 p-5 rounded-2xl border border-slate-200 cursor-pointer transition-all"
                >
                  <input
                    type="checkbox"
                    name="complexity_flags"
                    value={item.value}
                    checked={form.complexity_flags.includes(item.value)}
                    onChange={handleChange}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span className="text-slate-700">{item.label}</span>
                </label>
              ))}
            </div>
          </section>

          {/* FEMA Education */}
          {form.track_selection === "track_3" && (
            <section className="border-b-2 border-slate-200 pb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
                <span className="text-blue-600"></span> FEMA Education Requested
              </h2>
              <div className="flex flex-wrap gap-6">
                {[
                  { value: "FEMA Individual Assistance (IA)", label: "FEMA Individual Assistance (IA)" },
                  { value: "FEMA Public Assistance (PA)", label: "FEMA Public Assistance (PA)" },
                ].map((item) => (
                  <label key={item.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="fema_education"
                      value={item.value}
                      checked={form.fema_education.includes(item.value)}
                      onChange={handleChange}
                      className="w-5 h-5 accent-blue-600"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </section>
          )}

          {/* Enterprise Preferences */}
          <section className="border-b-2 border-slate-200 pb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center gap-3">
              <span className="text-blue-600"></span> Enterprise Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Output Preference
                </label>
                <select
                  name="output_preference"
                  value={form.output_preference}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="PDF Summary">PDF Summary</option>
                  <option value="Structured Checklist">Structured Checklist</option>
                  <option value="Worksheet and Narrative">Worksheet and Narrative</option>
                  <option value="Documentation Folder Plan">Documentation Folder Plan</option>
                  <option value="Structured Draft Communication (neutral, non-advisory)">
                    Structured Draft Communication (neutral, non-advisory)
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Engagement Type
                </label>
                <select
                  name="engagement_type"
                  value={form.engagement_type}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="Single Matter">Single Matter</option>
                  <option value="Portfolio">Portfolio</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Additional Context{" "}
                <span className="text-orange-600 text-xs">
                  (Documentation Only – No Outcome Requests)
                </span>
              </label>
              <textarea
                name="additional_context"
                value={form.additional_context}
                onChange={handleAdditionalContextChange}
                rows={4}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-y min-h-[100px]"
                placeholder="Please provide additional context about your documentation needs. Note: Do not include negotiation requests, representation requests, or requests to influence outcomes. This form is for documentation consulting support only."
              />
              {prohibitedContentFlags.length > 0 && (
                <div className="mt-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  <strong>Compliance Alert:</strong> The following prohibited
                  content was detected: {prohibitedContentFlags.join(", ")}.
                  <br />
                  Please remove any negotiation, representation, outcome
                  influence, or coverage determination requests.
                </div>
              )}
            </div>
          </section>

          {/* Compliance Confirmation */}
          <section className="bg-blue-50 border border-blue-200 p-8 rounded-3xl">
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              ✅ Compliance Confirmation (Required)
            </h2>
            
            <div className="mb-4">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="compliance_acknowledged"
                  checked={form.compliance_acknowledged}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 accent-blue-600 rounded focus:ring-blue-500"
                  required
                />
                <span className="text-slate-700 group-hover:text-slate-900">
                  I acknowledge and agree to all compliance conditions below
                </span>
              </label>
            </div>
            
            <div className="space-y-5 text-sm ml-9">
              {[
                { value: "consulting_only", label: "I understand this is a consulting engagement only" },
                { value: "no_negotiation", label: "I am not currently requesting negotiation or representation services" },
                { value: "no_third_party", label: "I understand no third-party communications will be made without further agreement" },
                { value: "draft_only", label: "I understand all outputs are advisory drafts only" },
              ].map((item) => (
                <label
                  key={item.value}
                  className="flex items-start gap-4 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    name="compliance_confirmation"
                    value={item.value}
                    checked={form.compliance_confirmation.includes(item.value)}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 accent-blue-600 rounded focus:ring-blue-500"
                    required
                  />
                  <span className="text-slate-700 group-hover:text-slate-900">
                    {item.label}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-5 rounded-2xl text-xl shadow-xl shadow-blue-500/30 transition-all duration-200 flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-4 border-white border-t-transparent animate-spin rounded-full" />
                Submitting Intake...
              </>
            ) : (
              "Submit Intake Form"
            )}
          </button>

          {message && (
            <div
              className={`p-5 rounded-2xl text-center font-medium ${messageType === "success" ? "bg-green-100 text-green-800 border border-green-200" : "bg-red-100 text-red-800 border border-red-200"}`}
            >
              {message}
            </div>
          )}
        </form>

        <p className="text-center text-slate-500 text-sm mt-8">
          All information is kept strictly confidential and secure. This is a
          consulting-only engagement.
        </p>
      </div>
    </div>
  );
};

export default IntakeForm;
