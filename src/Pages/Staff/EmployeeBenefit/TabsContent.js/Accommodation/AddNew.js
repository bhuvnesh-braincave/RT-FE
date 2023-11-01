import { Modal } from "react-bootstrap";

export default function AddNew({ show, setShow }) {
  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Empolyee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label for="">Accommodation Title</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="">Address Line 1</label>
              <input
                type="text"
                className="form-control"
                placeholder="address line 1"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="">Address Line 2</label>
              <input
                type="text"
                className="form-control"
                placeholder="address line 2"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="">Period Form </label>
              <input type="date" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="">Period To</label>
              <input type="date" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Accommodation Type
              </label>{" "}
              <br />
              <select
                className="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value="owned">Owned</option>
                <option value="rented">Rented</option>
              </select>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-success">
          SAVE
        </button>
      </Modal.Footer>
    </Modal>
  );
}
