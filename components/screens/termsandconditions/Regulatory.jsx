import LegalDocumentPage from "./LegalDocumentPage";
import { fetchLegalDocument } from "./legalDocuments";

const RegulatoryPolicy = async () => {
  let policy = null;
  let error = null;

  try {
    policy = await fetchLegalDocument("cms/regulatory");
  } catch {
    error = "Failed to load regulatory policy";
  }

  return (
    <LegalDocumentPage
      document={policy}
      emptyMessage="No policy found"
      error={error}
      showEffectiveDate={false}
    />
  );
};

export default RegulatoryPolicy;
