"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Minus, Plus } from "lucide-react";

import { API_URL } from "@/utils/config";

type RawFaq = {
  question?: string;
  answer?: string;
  status?: string | number;
  sort_order?: string | number;
};

type RawFaqSection = {
  title?: string;
  category_title?: string;
  categoryTitle?: string;
  category?: {
    title?: string;
  };
  question?: string;
  answer?: string;
  status?: string | number;
  sort_order?: string | number;
  faqs?: RawFaq[];
};

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSection = {
  title: string;
  faqs: FaqItem[];
};

function normalizeFaqResponse(payload: unknown): FaqSection[] {
  const source =
    payload &&
    typeof payload === "object" &&
    "data" in payload &&
    Array.isArray((payload as { data?: unknown }).data)
      ? (payload as { data: RawFaqSection[] }).data
      : payload;

  const list = Array.isArray(source) ? (source as RawFaqSection[]) : [];

  if (!list.length) return [];

  const first = list[0];

  if (first && Array.isArray(first.faqs)) {
    return list
      .map((section) => {
        const rawFaqs = Array.isArray(section.faqs) ? section.faqs : [];
        const faqs = rawFaqs
          .filter((faq) => String(faq.status ?? 1) === "1")
          .map((faq) => ({
            question: faq.question || "",
            answer: faq.answer || "",
          }))
          .filter((faq) => faq.question && faq.answer);

        return {
          title: section.title || section.category_title || "General FAQ",
          faqs,
        };
      })
      .filter((section) => section.faqs.length > 0);
  }

  const grouped = list.reduce<Record<string, Array<FaqItem & { sort_order: number }>>>(
    (acc, item) => {
      const isActive = String(item.status ?? 1) === "1";
      if (!isActive) return acc;

      const title =
        item.category_title ||
        item.categoryTitle ||
        item.category?.title ||
        item.title ||
        "General FAQ";

      if (!acc[title]) acc[title] = [];

      acc[title].push({
        question: item.question || "",
        answer: item.answer || "",
        sort_order: Number(item.sort_order ?? 9999),
      });

      return acc;
    },
    {},
  );

  return Object.keys(grouped).map((title) => {
    const faqs = grouped[title]
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((faq) => ({
        question: faq.question,
        answer: faq.answer,
      }))
      .filter((faq) => faq.question && faq.answer);

    return { title, faqs };
  });
}

export default function AllFaq() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [faqSections, setFaqSections] = useState<FaqSection[]>([]);
  const [loadingFaqs, setLoadingFaqs] = useState(true);
  const [faqError, setFaqError] = useState("");
  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    const fetchFaqs = async () => {
      setLoadingFaqs(true);
      setFaqError("");

      try {
        const response = await fetch(`${API_URL}cms/getCategoryFaq`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load FAQs");
        }

        const payload = await response.json();
        const normalized = normalizeFaqResponse(payload);

        if (mounted) setFaqSections(normalized);
      } catch (error) {
        console.error("FAQ fetch error:", error);
        if (mounted) {
          setFaqError("Unable to load FAQs right now. Please try again shortly.");
        }
      } finally {
        if (mounted) setLoadingFaqs(false);
      }
    };

    fetchFaqs();

    return () => {
      mounted = false;
    };
  }, []);

  const toggleFaq = (sectionIdx: number, questionIdx: number) => {
    const key = `${sectionIdx}-${questionIdx}`;
    setOpenIndex((prev) => (prev === key ? null : key));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-24 transition-colors">
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Have Questions? We are Here to Help
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            The following questions explain ClaimScope documentation governance
            consulting services, operational documentation governance
            frameworks, documentation infrastructure consulting approaches, and
            disaster documentation readiness consulting advisory engagements.
          </p>

          <div className="space-y-3">
            {[
              ["Clear answers", "to help you understand our consulting services"],
              ["Transparent information", "about pricing and processes"],
              ["State-specific guidance", "for your documentation needs"],
            ].map(([title, copy]) => (
              <div key={title} className="flex items-start space-x-3">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1a237e]">
                  <span className="text-sm text-white">✓</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">{title}</span> {copy}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base italic text-gray-600">
            Can not find what you are looking for? Reach out to us directly for
            personalized assistance.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/assets/faq.jpg"
            alt="FAQ Support"
            width={960}
            height={720}
            priority
            className="h-64 w-full rounded-2xl object-cover shadow-xl md:h-80 lg:h-96"
            style={{ animation: "fadeIn 0.8s ease-out" }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        {loadingFaqs ? (
          <div className="rounded-xl border border-gray-100 bg-white p-8 text-center text-gray-600 shadow-md">
            Loading FAQs...
          </div>
        ) : faqError ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-8 text-center text-red-700 shadow-md">
            {faqError}
          </div>
        ) : faqSections.length === 0 ? (
          <div className="rounded-xl border border-gray-100 bg-white p-8 text-center text-gray-600 shadow-md">
            No FAQs available right now.
          </div>
        ) : (
          <div className="space-y-12">
            {faqSections.map((section, sectionIdx) => (
              <div key={section.title} className="space-y-4">
                <h2 className="mb-6 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-[#1a237e] md:text-3xl">
                  {section.title}
                </h2>

                {section.faqs.map((faq, questionIdx) => {
                  const key = `${sectionIdx}-${questionIdx}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={key}
                      className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                      style={{
                        animation: `slideUp 0.5s ease-out ${
                          sectionIdx * 0.1 + questionIdx * 0.05
                        }s both`,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(sectionIdx, questionIdx)}
                        className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-gray-50"
                      >
                        <span className="pr-4 text-base font-semibold text-gray-800 transition-colors duration-200 group-hover:text-[#1a237e] md:text-lg">
                          {faq.question}
                        </span>

                        <div
                          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-blue-100 ${
                            isOpen ? "rotate-180 bg-[#1a237e]" : ""
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="h-5 w-5 text-white" />
                          ) : (
                            <Plus className="h-5 w-5 text-gray-600 group-hover:text-[#1a237e]" />
                          )}
                        </div>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6 pt-2">
                          <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                          <p className="text-sm leading-relaxed text-gray-600 transition-colors md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 rounded-xl border-l-4 border-[#1a237e] bg-blue-50 p-6 shadow-md">
          <h3 className="mb-3 text-lg font-semibold text-gray-800 md:text-xl">
            Compliance Notice (Applies to All States)
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 md:text-base">
            ClaimScope Consulting provides consulting-only, advisory, and
            educational services. We do not negotiate claims, provide
            representation or advocacy, offer legal advice, or communicate with
            insurers, FEMA, or agencies on behalf of clients.
          </p>
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-gray-800 to-gray-900 p-10 text-center text-white shadow-xl">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            Still Have Questions?
          </h2>

          <p className="mb-6 text-base text-blue-100 md:text-lg">
            Our team is ready to provide clarity, structure, and confidence for
            your documentation governance and documentation readiness needs.
          </p>

          <button
            type="button"
            onClick={() => router.push("/schedule")}
            className="transform rounded-xl bg-[#1a237e] px-12 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#0d47a1] hover:shadow-2xl"
          >
            Schedule Consultation
          </button>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
