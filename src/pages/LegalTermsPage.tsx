import LegalTermsContainer from "components/LegalTerms/LegalTermsContainer";
import ThemeContext from "context/ThemeContext";
import { useContext } from "react";

function LegalTermsPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className="container mb-5"
        style={{ minHeight: "65vh" }}
        data-bs-theme={theme}
      >
        <h1 className="py-5">Legal</h1>
        <LegalTermsContainer />
      </div>
    </>
  );
}

export default LegalTermsPage;
