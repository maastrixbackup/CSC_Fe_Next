import { formatEffectiveDate, type LegalDocument } from "./legalDocuments";

type LegalDocumentPageProps = {
  document: LegalDocument | null;
  emptyMessage: string;
  error?: string | null;
  keywords?: string;
  canonicalPath?: string;
  showEffectiveDate?: boolean;
};

export default function LegalDocumentPage({
  document,
  emptyMessage,
  error,
  showEffectiveDate = true,
}: LegalDocumentPageProps) {
  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-24">
        <p className="text-center text-red-500">{error}</p>
      </main>
    );
  }

  if (!document) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-24">
        <p className="text-center text-gray-600">{emptyMessage}</p>
      </main>
    );
  }

  const effectiveDate = formatEffectiveDate(document.effective_date);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-26 md:px-16">
      <section className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow-lg sm:p-8 md:p-12">
        <h1 className="text-center text-3xl font-bold text-blue-900 md:text-4xl">
          {document.title || "Policy"}
        </h1>

        {document.short_desc ? (
          <p className="mt-4 text-center text-sm text-gray-500">
            {document.short_desc}
          </p>
        ) : null}

        {showEffectiveDate ? (
          <p className="mb-8 mt-6 text-gray-600">
            Effective Date: {effectiveDate ?? "-"}
          </p>
        ) : null}

        <div
          className="blog-content legal-document-content"
          dangerouslySetInnerHTML={{ __html: document.content || "" }}
        />
      </section>

      {document.footer_desc || document.footer_short_desc ? (
        <section className="px-6 py-6 text-center md:px-16">
          {document.footer_desc ? (
            <p className="mx-auto max-w-4xl text-sm text-gray-600">
              {document.footer_desc}
            </p>
          ) : null}

          {document.footer_short_desc ? (
            <p className="mx-auto mt-3 max-w-4xl text-xs text-gray-500">
              {document.footer_short_desc}
            </p>
          ) : null}
        </section>
      ) : null}
    </main>
  );
}
