import VolumeDetailsContainer from "components/VolumeDetails/VolumeDetailsContainer";
import ThemeContext from "context/ThemeContext";
import { useContext } from "react";

function VolumeDetailsPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="container mb-5"
      style={{ minHeight: "65vh" }}
      data-bs-theme={theme}
    >
      <VolumeDetailsContainer />
    </div>
  );
}

export default VolumeDetailsPage;
