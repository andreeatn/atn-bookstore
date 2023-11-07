import VolumesCardsContainer from "components/Volumes/VolumesCardsContainer";
import VolumesOrderSelector from "components/Volumes/VolumesOrderSelector";
import VolumesSubjectMenu from "components/Volumes/VolumesSubjectMenu";
import ThemeContext from "context/ThemeContext";
import { useContext } from "react";

function VolumesPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container mb-5" data-bs-theme={theme}>
      <h1 className="py-5">All Volumes</h1>
      <div className="row">
        <div className="col">
          <VolumesSubjectMenu />
        </div>
        <div className="col col-12 col-lg-10">
          <VolumesOrderSelector />
          <VolumesCardsContainer />
        </div>
      </div>
    </div>
  );
}

export default VolumesPage;
