"use client";

import { useState } from "react";
import Link from "next/link";

import AccessNav from "@/components/screens/access/AccessNav";
import { API_URL } from "@/utils/config";

const initialFormState = {
  name: "",
  email: "",
  role: "",
  documentation_status: "",
  use_case: "",
  plan: "",
  advisory_type: "",
  primary_goal: "",
  project_type: "",
};

export default function AdvisoryRequestForm({ title }) {
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}intake/create-advisory`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source_page:
            typeof window !== "undefined" ? window.location.pathname : "",
          ip_address: "",
          device_info:
            typeof navigator !== "undefined" ? navigator.userAgent : "",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();
      setSuccess(true);
      setFormData(initialFormState);
    } catch (submitError) {
      console.error("Submit error:", submitError);
      setError("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa] px-0 py-0">
      <AccessNav />
      <div className="mx-auto w-full max-w-3xl px-4 py-6">
        <div className="mb-6 flex items-center justify-start">
          <Link
            href="/access"
            className="flex items-center gap-2 rounded-sm border border-blue-600 bg-white px-5 py-2.5 text-sm font-semibold text-[#1f4f82] transition-all hover:border-[#1f4f82] hover:bg-[#f0f4f8]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to System
          </Link>
        </div>

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1a237e]">
            {title}
          </h1>
          <p className="mt-2 text-slate-600">
            Complete all required fields to submit your advisory request.
          </p>
        </div>

        <div className="w-full rounded-3xl border-2 border-[#d9e0e7] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,32,0.08)] md:p-8">
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Name <span className="text-red-600">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={120}
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full text-gray-600 rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full text-gray-600 rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Role <span className="text-red-600">*</span>
              </label>
              <input
                id="role"
                name="role"
                type="text"
                required
                value={formData.role}
                onChange={handleChange}
                placeholder="e.g. Contractor, Owner, Investor"
                className="w-full text-gray-600 rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
            </div>

            <div>
              <label
                htmlFor="documentation_status"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Documentation status <span className="text-red-600">*</span>
              </label>
              <select
                id="documentation_status"
                name="documentation_status"
                required
                value={formData.documentation_status}
                onChange={handleChange}
                className="w-full text-gray-600 rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              >
                <option value="">Select documentation status</option>
                <option value="Disorganized">Disorganized</option>
                <option value="Some Structure">Some Structure</option>
                <option value="Mostly Structured">Mostly Structured</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="use_case"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Use case <span className="text-red-600">*</span>
              </label>
              <textarea
                id="use_case"
                name="use_case"
                required
                rows={3}
                value={formData.use_case}
                onChange={handleChange}
                placeholder="Describe your use case"
                className="w-full text-gray-600 rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
            </div>

            <div>
              <label
                htmlFor="plan"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Plan <span className="text-red-600">*</span>
              </label>
              <select
                id="plan"
                name="plan"
                required
                value={formData.plan}
                onChange={handleChange}
                className="w-full text-gray-600 rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              >
                <option value="">Select a plan</option>
                <option value="foundation">Foundation</option>
                <option value="professional">Professional</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="advisory_type"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Advisory type <span className="text-red-600">*</span>
              </label>
              <select
                id="advisory_type"
                name="advisory_type"
                required
                value={formData.advisory_type}
                onChange={handleChange}
                className="w-full text-gray-600 rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              >
                <option value="">Select advisory type</option>
                <option value="review">Review</option>
                <option value="framework">Framework</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="primary_goal"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Primary goal <span className="text-red-600">*</span>
              </label>
              <input
                id="primary_goal"
                name="primary_goal"
                type="text"
                required
                value={formData.primary_goal}
                onChange={handleChange}
                placeholder="Your primary goal"
                className="w-full text-gray-600 rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
            </div>

            <div>
              <label
                htmlFor="project_type"
                className="mb-2 block text-sm font-semibold text-[#14202b]"
              >
                Project type <span className="text-red-600">*</span>
              </label>
              <input
                id="project_type"
                name="project_type"
                type="text"
                required
                value={formData.project_type}
                onChange={handleChange}
                placeholder="e.g. New Build, Renovation, Portfolio"
                className="w-full text-gray-600 rounded-2xl border border-[#c8d2dd] px-4 py-3 text-sm outline-none transition focus:border-[#1f4f82] focus:ring-2 focus:ring-[#1f4f82]/20"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#1f4f82] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#173b61] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Advisory Request"}
            </button>

            {error ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                {error}
              </div>
            ) : null}

            {success ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                Form submitted successfully.
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
