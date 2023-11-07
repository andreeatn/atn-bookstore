import VolumeQueryContext from "context/VolumeQueryContext";
import Subjects from "data/Subjects";
import VolumeQuery from "entities/VolumeQuery";
import { useContext } from "react";

function VolumesSubjectMenu() {
  const subjects = Subjects;
  const { volumeQuery, setVolumeQuery } = useContext(VolumeQueryContext);
  const handleSubjectSelect = (subjectId: string) => {
    window.scroll(0, 0);
    setVolumeQuery({
      ...volumeQuery,
      volumeSubject: subjectId,
      startIndex: 1,
    } as VolumeQuery);
  };

  return (
    <>
      <button
        className="btn btn-warning mb-4 d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSubjects"
        aria-controls="offcanvasSubjects"
      >
        Subjects
      </button>

      <div>
        <h4 className="d-none d-lg-block mb-3">Subjects</h4>
      </div>

      <div
        className="offcanvas-lg offcanvas-start"
        id="offcanvasSubjects"
        aria-labelledby="offcanvasSubjects"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSubjects">
            Subjects
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasSubjects"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <select
            className="form-select overflow-hidden"
            size={subjects.length}
            aria-label="select-subject"
            onChange={(event) => handleSubjectSelect(event.target.value)}
            defaultValue={volumeQuery.volumeSubject}
          >
            {subjects.map((subject, index) => (
              <option className="py-2" value={subject.id} key={index}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default VolumesSubjectMenu;
