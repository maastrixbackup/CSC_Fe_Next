"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { API_URL } from "@/utils/config";

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  understood: boolean;
  honeypot: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialFormState: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  understood: false,
  honeypot: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitSuccessMessage, setSubmitSuccessMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors: ContactFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^[\d\s\-+()]+$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !phoneRegex.test(formData.phone) ||
      formData.phone.replace(/\D/g, "").length < 7
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!formData.understood) {
      newErrors.understood = "You must acknowledge this statement";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = "checked" in e.target ? e.target.checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name as keyof ContactFormState]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (submitError) {
      setSubmitError("");
    }

    if (submitted) {
      setSubmitted(false);
      setSubmitSuccessMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.honeypot) return;

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const payload = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone_number: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        consent_given: Boolean(formData.understood),
      };

      const response = await fetch(`${API_URL}contact/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.message || `Failed to submit form (${response.status})`,
        );
      }

      setSubmitSuccessMessage(
        data?.message || "Inquiry received. We'll be in touch soon.",
      );
      setSubmitted(true);
      setFormData(initialFormState);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit your inquiry. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6 py-12">
      <div className="relative z-10 mx-auto mt-12 py-14 max-w-7xl">
        <div className="animate-fade-in mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Contact ClaimScope
            <span className="align-super text-lg md:text-xl">TM</span>
          </h1>
          <p className="mx-auto mb-2 max-w-3xl text-lg leading-relaxed text-gray-600">
            Documentation readiness and governance consulting inquiries only.
          </p>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600">
            Fill out the form below and we&apos;ll get back to you as soon as
            possible. Structured advisory support focused on documentation
            clarity, organization, and readiness.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            style={{ animation: "slideInLeft 0.8s ease-out" }}
          >
            <Image
              src="/assets/ContactPage .webp"
              alt="Contact Us"
              width={1200}
              height={900}
              priority
              className="h-[400px] w-full object-cover lg:h-[500px]"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent p-8">
              <div className="text-white">
                <h3 className="mb-2 text-2xl font-bold">
                  Start Documentation Intake
                </h3>
                <h3 className="text-lg font-semibold">
                  Structured advisory support for documentation clarity,
                  organization, and readiness.
                </h3>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-6"
            style={{ animation: "slideInRight 0.8s ease-out" }}
          >
            <div className="rounded-2xl border-l-4 border-r-4 border-slate-600 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-slate-100 p-3">
                  <Mail className="h-6 w-6 text-slate-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    Email Address
                  </h3>
                  <p className="break-all text-sm text-gray-600 sm:text-base">
                    contact@claimscopeconsulting.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-l-4 border-r-4 border-slate-600 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-slate-100 p-3">
                  <Phone className="h-6 w-6 text-slate-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    Phone Number
                  </h3>
                  <p className="text-gray-600">256-212-7273</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-l-4 border-r-4 border-slate-600 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-slate-100 p-3">
                  <MapPin className="h-6 w-6 text-slate-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    Office Location
                  </h3>
                  <p className="text-gray-600">
                    Headquartered in Alabama (remote / multi-state consulting)
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-l-4 border-r-4 border-slate-600 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/claimscope-consulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-gray-600 transition-all duration-300 hover:scale-110 hover:bg-slate-600 hover:text-white"
                >
                  <span className="text-xl font-bold">in</span>
                </a>

                <a
                  href="https://www.youtube.com/@ClaimScopeConsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-gray-600 transition-all duration-300 hover:scale-110 hover:bg-slate-600 hover:text-white"
                >
                  <Image
                    src="/assets/youtube.png"
                    alt="YouTube"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
            <div className="w-full max-w-md scale-100 rounded-3xl bg-white p-8 text-center shadow-2xl transition-all duration-300">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-7 w-7 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-slate-800">
                Thank You!
              </h3>

              <p className="mb-6 leading-relaxed text-slate-600">
                {submitSuccessMessage}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setSubmitSuccessMessage("");
                }}
                className="w-full rounded-xl bg-[#1a237e] py-3 font-semibold text-white transition-all duration-200 hover:bg-slate-900"
              >
                Close
              </button>
            </div>
          </div>
        ) : null}

        {submitError ? (
          <div className="animate-fade-in mx-auto mb-8 max-w-4xl">
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4 shadow-md">
              <p className="font-medium text-red-700">{submitError}</p>
            </div>
          </div>
        ) : null}

        <div
          className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl md:p-12"
          style={{ animation: "fadeInUp 0.8s ease-out" }}
        >
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Documentation Readiness & Governance Inquiry
            </h2>
            <p className="text-gray-600">
              Fill out the form and we&apos;ll be in touch as soon as possible
            </p>
          </div>

          <div className="mb-6 rounded-md border-l-4 border-r-4 border-amber-500 bg-amber-50 p-3">
            <p className="text-sm font-medium text-amber-800">
              This intake is designed for documentation structure, governance,
              and readiness advisory needs only.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="hidden">
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group">
                <label className="mb-2 block font-medium text-slate-700">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-300 ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-300 focus:border-slate-500"
                  }`}
                />
                {errors.fullName ? (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                ) : null}
              </div>

              <div className="group">
                <label className="mb-2 block font-medium text-slate-700">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-300 ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-300 focus:border-slate-500"
                  }`}
                />
                {errors.email ? (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="group">
                <label className="mb-2 block font-medium text-slate-700">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-300 ${
                    errors.phone
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-300 focus:border-slate-500"
                  }`}
                />
                {errors.phone ? (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                ) : null}
              </div>

              <div className="group">
                <label className="mb-2 block font-medium text-slate-700">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Business consulting inquiry"
                  className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-300 ${
                    errors.subject
                      ? "border-red-500 focus:border-red-500"
                      : "border-slate-300 focus:border-slate-500"
                  }`}
                />
                {errors.subject ? (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                ) : null}
              </div>
            </div>

            <div className="group">
              <label className="mb-2 block font-medium text-slate-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your documentation readiness and advisory consulting needs. (Advisory services only - no claim handling, representation, or third-party communications)"
                rows={6}
                className={`w-full resize-none rounded-lg border bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-300 ${
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-300 focus:border-slate-500"
                }`}
              />
              {errors.message ? (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              ) : null}
            </div>

            <div className="rounded-xl border-2 border-slate-200 bg-slate-50 p-5">
              <label className="flex cursor-pointer items-start">
                <input
                  type="checkbox"
                  name="understood"
                  checked={formData.understood}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 cursor-pointer rounded border-gray-300 text-slate-700 focus:ring-2 focus:ring-slate-500"
                />
                <span className="ml-3 text-sm text-gray-700">
                  <span className="font-semibold text-slate-900">
                    I understand ClaimScope Consulting, LLC provides
                    documentation readiness and governance consulting only.
                    ClaimScope does not handle claim submissions, negotiation,
                    representation, application preparation, or communication
                    with insurers, FEMA, contractors, or third parties. All
                    services are advisory, educational, and draft-only. Final
                    decisions and use of documentation remain the responsibility
                    of the user.
                  </span>
                </span>
              </label>
              {errors.understood ? (
                <p className="ml-8 mt-2 text-sm text-red-500">
                  {errors.understood}
                </p>
              ) : null}
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 px-12 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-slate-800 hover:to-slate-950 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50 disabled:transform-none"
              >
                {submitting ? "Sending..." : "Submit Documentation Intake"}
                <Send className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-center text-sm text-gray-500">
              Fields marked with <span className="text-red-500">*</span> are
              required
            </p>
          </form>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-4 text-sm text-amber-900 shadow-md sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-3">
            <span className="flex-shrink-0 text-base font-bold text-orange-600">
              Important Notice:
            </span>
            <span className="leading-relaxed">
              ClaimScope Consulting, LLC provides documentation readiness and
              governance consulting only. ClaimScope does not perform claim
              handling, negotiation, representation, application submission, or
              communication with insurers, FEMA, or any third parties. All
              services are advisory, educational, and draft-only. Final
              decisions and use of documentation remain the responsibility of
              the user.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
