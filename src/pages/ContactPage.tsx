import ContactContainer from "components/Contact/ContactContainer";
import ThemeContext from "context/ThemeContext";
import { useContext } from "react";

function ContactPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="container mb-5"
      style={{ minHeight: "65vh" }}
      data-bs-theme={theme}
    >
      <h1 className="py-5">Contact</h1>
      <ContactContainer />
    </div>
  );
}

export default ContactPage;
