import LegalDocumentPage from "./LegalDocumentPage";
import { fetchLegalDocument } from "./legalDocuments";

const PrivacyPolicy = async () => {
  let policy = null;
  let error = null;

  try {
    policy = await fetchLegalDocument("cms/policy");
  } catch {
    error = "Failed to load policy";
  }

  return (
    <LegalDocumentPage
      document={policy}
      emptyMessage="No policy found"
      error={error}
    />
  );
};

export default PrivacyPolicy;
