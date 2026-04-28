"use client";

import { useState } from "react";

export default function TermsModal({
  isOpen,
  onClose,
  onAcknowledge,
  setHasScrolledToBottom,
}) {
  const [isChecked, setIsChecked] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={() => {
        setIsChecked(false);
        if (setHasScrolledToBottom) setHasScrolledToBottom(true);
        onClose();
      }}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 border-b border-[#d9e0e7] bg-white px-6 py-4">
          <h2 className="text-xl font-bold text-[#1a237e]">
            ClaimScope Terms &amp; Compliance Notice
          </h2>
          <button
            type="button"
            onClick={() => {
              setIsChecked(false);
              if (setHasScrolledToBottom) setHasScrolledToBottom(true);
              onClose();
            }}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-2xl text-white transition hover:bg-red-700 focus:outline-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="max-h-[calc(85vh-200px)] space-y-4 overflow-y-auto px-6 py-4">
          <p className="text-sm leading-relaxed text-[#14202b]">
            ClaimScope Consulting, LLC provides documentation readiness
            consulting, governance support, and system access only.
          </p>

          <p className="text-sm leading-relaxed text-[#14202b]">
            ClaimScope does not provide claim negotiation, representation,
            advocacy, legal advice, claim evaluation, application submission, or
            third-party communication on behalf of any user, client,
            contractor, property owner, municipality, or organization.
          </p>

          <p className="text-sm leading-relaxed text-[#14202b]">
            All outputs generated through ClaimScope systems or advisory
            workflows are draft-only and intended for internal documentation
            use. Users remain solely responsible for reviewing, validating, and
            determining how any documentation is used.
          </p>

          <p className="text-sm leading-relaxed text-[#14202b]">
            Submission of this form does not guarantee approval, access,
            engagement, outcome, or eligibility. Requests may be reviewed,
            flagged, delayed, or declined based on system logic, documentation
            posture, administrative review, or compliance requirements.
          </p>

          <p className="text-sm leading-relaxed text-[#14202b]">
            By proceeding, you acknowledge that ClaimScope is a consulting-only
            and documentation-governance platform and that no adjuster, legal,
            advocacy, or third-party representation services are being
            provided.
          </p>

          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">
              System Notice:
            </p>
            <p className="text-sm text-amber-700">
              ClaimScope does not participate in or influence claim outcomes.
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-[#d9e0e7] bg-[#f6f9fc] p-4">
            <label className="flex items-start gap-3 text-sm text-[#14202b]">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(event) => setIsChecked(event.target.checked)}
                className="mt-0.5 h-4 w-4 accent-[#1f4f82]"
              />
              <span>
                I have read and agree to the Terms &amp; Compliance Notice
                above.
                <span className="text-red-600">*</span>
              </span>
            </label>
          </div>
        </div>

        <div className="sticky bottom-0 z-10 border-t border-[#d9e0e7] bg-white px-6 py-4">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                setIsChecked(false);
                if (setHasScrolledToBottom) setHasScrolledToBottom(true);
                onClose();
              }}
              className="flex-1 rounded-full border border-[#c8d2dd] bg-white px-5 py-2.5 text-sm font-medium text-[#14202b] transition hover:bg-gray-50 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (isChecked && onAcknowledge) {
                  onAcknowledge();
                  setIsChecked(false);
                  if (setHasScrolledToBottom) setHasScrolledToBottom(true);
                }
              }}
              disabled={!isChecked}
              className={`flex-1 rounded-full px-5 py-2.5 text-sm font-medium text-white transition focus:outline-none ${
                isChecked
                  ? "cursor-pointer bg-[#1f4f82] hover:bg-[#173b61]"
                  : "cursor-not-allowed bg-gray-400 opacity-50"
              }`}
            >
              Acknowledge &amp; Accept
            </button>
          </div>
          {!isChecked ? (
            <p className="mt-2 text-center text-xs text-red-500">
              Please check the acknowledgment box to continue
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
