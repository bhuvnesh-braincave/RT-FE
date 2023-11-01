import { Modal } from "react-bootstrap";

export default function AddNew({ show, setShow }) {
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Empolyee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label for="">CPF Submission Number</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label for="">Select Month</label>
              <input type="date" className="form-control" placeholder="" />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
      <button type="button" className="btn btn-success">Generate</button>
      </Modal.Footer>
    </Modal>
  );
}
