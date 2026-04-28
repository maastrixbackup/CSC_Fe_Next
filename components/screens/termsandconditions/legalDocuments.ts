import { API_URL } from "@/utils/config";

export type LegalDocument = {
  content?: string | null;
  effective_date?: string | null;
  footer_desc?: string | null;
  footer_short_desc?: string | null;
  short_desc?: string | null;
  slug?: string | null;
  title?: string | null;
};

function normalizeDocumentPayload(payload: unknown): LegalDocument | null {
  if (Array.isArray(payload)) {
    return (payload[0] as LegalDocument) ?? null;
  }

  if (
    payload &&
    typeof payload === "object" &&
    "data" in payload &&
    Array.isArray((payload as { data?: unknown[] }).data)
  ) {
    return (((payload as { data?: unknown[] }).data ?? [])[0] as LegalDocument) ?? null;
  }

  if (payload && typeof payload === "object") {
    return payload as LegalDocument;
  }

  return null;
}

export async function fetchLegalDocument(
  endpoint: string,
): Promise<LegalDocument | null> {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  const data = await response.json();

  console.log(`Legal document response for ${endpoint}:`, data);

  return normalizeDocumentPayload(data);
}

export function formatEffectiveDate(value?: string | null) {
  if (!value || value === "1899-11-29T18:38:50.000Z") {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
