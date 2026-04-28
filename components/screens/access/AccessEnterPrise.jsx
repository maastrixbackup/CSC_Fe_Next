"use client";

import { useState } from "react";
import Link from "next/link";

import AccessNav from "@/components/screens/access/AccessNav";
import TermsModal from "@/components/screens/access/TermsModal";
import { API_URL } from "@/utils/config";

const initialFormState = {
  type: "ENTERPRISE",
  full_name: "",
  email: "",
  organization: "",
  active_projects: "",
  users_count: "",
  objective: "",
  description: "",
  documentation_workflow: "",
  terms_accepted: false,
  internal_use_confirmed: false,
};

export default function AccessEnterPrise() {
  const [formData, setFormData] = useState(initialFormState);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [termsValidationError, setTermsValidationError] = useState("");
  const [internalUseError, setInternalUseError] = useState("");
  const [hasAcknowledged, setHasAcknowledged] = useState(false);

  const remainingSummaryChars = 1000 - formData.description.length;

  const isFormComplete = () =>
    formData.full_name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.organization.trim() !== "" &&
    formData.active_projects !== "" &&
    formData.users_count !== "" &&
    formData.objective !== "" &&
    formData.description.trim() !== "" &&
    formData.terms_accepted &&
    formData.internal_use_confirmed;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "terms_accepted" && checked) setTermsValidationError("");
    if (name === "internal_use_confirmed" && checked) setInternalUseError("");
  };

  const handleTermsAcknowledgment = () => {
    setHasAcknowledged(true);
    setFormData((prev) => ({ ...prev, terms_accepted: true }));
    setTermsValidationError("");
    setIsTermsModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.terms_accepted) {
      setTermsValidationError(
        "You must accept the Terms & Compliance Notice to continue.",
      );
      return;
    }

    if (!formData.internal_use_confirmed) {
      setInternalUseError(
        "You must confirm that this system is for internal documentation use only.",
      );
      return;
    }

    setTermsValidationError("");
    setInternalUseError("");
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch(`${API_URL}intake/create-intake-v2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          terms_accepted: formData.terms_accepted ? 1 : 0,
          terms_version: "v1.0",
          terms_timestamp: new Date().toISOString(),
          internal_use_confirmed: formData.internal_use_confirmed ? 1 : 0,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
      setFormData(initialFormState);
      setHasAcknowledged(false);
      setSuccess(true);
    } catch (submitError) {
      console.error("Error:", submitError);
      setError("Failed to submit form. Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AccessNav />

      <div className="bg-[#f7f8fa] pt-6">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <p className="text-sm font-medium text-[#1f4f82]">Step 3 of 3</p>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[#e0e7ed]">
              <div className="h-full w-full rounded-full bg-[#1f4f82]" />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#f7f8fa] px-4 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <Link
              href="/access"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#1f4f82] bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-[#f0f4f8] hover:text-[#173b61]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to System Access
            </Link>
            <p className="mt-2 text-xs text-[#5c6b78]">
              Need to review options again? Return to System Access.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl rounded-3xl border border-[#d9e0e7] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,32,0.08)] md:p-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1a237e]">
              Enterprise Access Intake
            </h1>
            <p className="mt-2 text-slate-600">
              Complete all required fields to create your Enterprise Access
              request.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="full_name"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Full name <span className="text-red-600">*</span>
              </label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                required
                maxLength={120}
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Email address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
            </div>

            <div>
              <label
                htmlFor="organization"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Organization <span className="text-red-600">*</span>
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                required
                maxLength={150}
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enter organization name"
                className="w-full rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
            </div>

            <div>
              <label
                htmlFor="active_projects"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Active Projects <span className="text-red-600">*</span>
              </label>
              <select
                id="active_projects"
                name="active_projects"
                required
                value={formData.active_projects}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              >
                <option value="">Select project range</option>
                <option value="1-5">1-5 projects</option>
                <option value="6-10">6-10 projects</option>
                <option value="11-20">11-20 projects</option>
                <option value="21-50">21-50 projects</option>
                <option value="50+">50+ projects</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="users_count"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Users <span className="text-red-600">*</span>
              </label>
              <select
                id="users_count"
                name="users_count"
                required
                value={formData.users_count}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              >
                <option value="">Select user range</option>
                <option value="1-10">1-10 users</option>
                <option value="11-25">11-25 users</option>
                <option value="26-50">26-50 users</option>
                <option value="51-100">51-100 users</option>
                <option value="100+">100+ users</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="objective"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Objective <span className="text-red-600">*</span>
              </label>
              <select
                id="objective"
                name="objective"
                required
                value={formData.objective}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              >
                <option value="">Select primary objective</option>
                <option value="Automation & Scaling">
                  Automation &amp; Scaling
                </option>
                <option value="Organization">Organization</option>
                <option value="Audit Readiness">Audit Readiness</option>
                <option value="Governance">Governance</option>
                <option value="Enterprise-wide Standardization">
                  Enterprise-wide Standardization
                </option>
                <option value="Compliance & Risk Management">
                  Compliance &amp; Risk Management
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                maxLength={1000}
                rows={5}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your documentation needs and current challenges"
                className="w-full rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
              <p className="mt-2 text-xs text-[#5c6b78]">
                {remainingSummaryChars} characters remaining
              </p>
            </div>

            <div>
              <label
                htmlFor="documentation_workflow"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Current documentation workflow description{" "}
                <span className="text-xs font-normal text-gray-400">
                  (Optional)
                </span>
              </label>
              <textarea
                id="documentation_workflow"
                name="documentation_workflow"
                maxLength={500}
                rows={3}
                value={formData.documentation_workflow}
                onChange={handleChange}
                placeholder="Describe your current documentation workflow, tools, and processes..."
                className="w-full rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
            </div>

            <div className="rounded-2xl border border-[#d9e0e7] bg-[#f6f9fc] p-4">
              <label className="flex items-start gap-3 text-sm text-[#14202b]">
                <input
                  name="terms_accepted"
                  type="checkbox"
                  required
                  checked={formData.terms_accepted}
                  onChange={handleChange}
                  disabled={!hasAcknowledged}
                  className="mt-1 h-4 w-4 accent-[#1f4f82] disabled:opacity-50"
                />
                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setIsTermsModalOpen(true)}
                    className="font-medium text-[#1f4f82] underline transition hover:text-[#173b61]"
                  >
                    Terms &amp; Compliance Notice
                  </button>
                  <span className="text-red-600">*</span>
                  {!hasAcknowledged ? (
                    <span className="ml-2 text-xs text-amber-600">
                      (You must open and accept the Terms)
                    </span>
                  ) : null}
                </span>
              </label>
              {termsValidationError ? (
                <p className="mt-2 text-sm text-red-600">
                  {termsValidationError}
                </p>
              ) : null}
            </div>

            <div className="rounded-2xl border border-[#d9e0e7] bg-[#fef9e6] p-4">
              <label className="flex items-start gap-3 text-sm text-[#14202b]">
                <input
                  name="internal_use_confirmed"
                  type="checkbox"
                  required
                  checked={formData.internal_use_confirmed}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-[#1f4f82]"
                />
                <span>
                  I understand this system is for internal documentation use
                  only.
                  <span className="text-red-600">*</span>
                </span>
              </label>
              {internalUseError ? (
                <p className="mt-2 text-sm text-red-600">{internalUseError}</p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={loading || !isFormComplete()}
              className={`w-full rounded-full px-5 py-3 text-sm font-bold text-white transition ${
                isFormComplete() && !loading
                  ? "cursor-pointer bg-[#1f4f82] hover:bg-[#173b61]"
                  : "cursor-not-allowed bg-gray-400 opacity-50"
              }`}
            >
              {loading ? "Submitting..." : "Submit Enterprise Access"}
            </button>

            {!isFormComplete() && !loading ? (
              <p className="text-center text-xs text-amber-600">
                Please complete all required fields and acknowledgments to
                submit.
              </p>
            ) : null}

            {error ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                {error}
              </div>
            ) : null}

            {success && !error ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                Form submitted successfully.
              </div>
            ) : null}
          </form>
        </div>
      </div>

      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        onAcknowledge={handleTermsAcknowledgment}
        setHasScrolledToBottom={() => {}}
      />
    </>
  );
}
