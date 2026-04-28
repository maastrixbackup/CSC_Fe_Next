import LegalDocumentPage from "./LegalDocumentPage";
import { fetchLegalDocument } from "./legalDocuments";

const Terms = async () => {
  let terms = null;
  let error = null;

  try {
    terms = await fetchLegalDocument("cms/terms");
  } catch {
    error = "Failed to load terms";
  }

  return (
    <LegalDocumentPage
      document={terms}
      emptyMessage="No terms found"
      error={error}
    />
  );
};

export default Terms;
