import { Modal } from "react-bootstrap";

export default function AddNew({ show, setShow }) {
  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Empolyee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Accommodation
              </label>{" "}
              <br />
              <select
                className="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value=""> </option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Address</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Accommodation Period</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Company
              </label>{" "}
              <br />
              <select
                className="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value="KMAC"> KMAC International pte ltd</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Employee
              </label>{" "}
              <br />
              <select
                className="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Accommodation From</label>
              <input type="date" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Accommodation To</label>
              <input type="date" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Employee Rent Paid</label>
              <input type="text" className="form-control" placeholder="" />
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
