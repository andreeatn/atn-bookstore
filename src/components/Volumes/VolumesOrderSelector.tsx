import VolumeQueryContext from "context/VolumeQueryContext";
import { useContext } from "react";

function VolumesOrderSelector() {
  const { volumeQuery, setVolumeQuery } = useContext(VolumeQueryContext);
  const handleOrderSelect = (selectedOrder: string) => {
    setVolumeQuery({ ...volumeQuery, orderBy: selectedOrder });
  };

  return (
    <div className="container mt-5 mb-4">
      <div className="row">
        <div className="col col-12 col-md-6 col-lg-4">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectOrderBy"
              defaultValue={volumeQuery.orderBy}
              onChange={(event) => handleOrderSelect(event.target.value)}
            >
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </select>
            <label htmlFor="floatingSelectOrderBy">Order by</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolumesOrderSelector;
