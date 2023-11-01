import { useEffect } from "react";
import { Modal } from "react-bootstrap";

export default function View({ viewData, setViewData, show, setShow }) {
  useEffect(() => {
    return () => {
      setViewData(null);
    };
  }, []);
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Location</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Company</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.company?.name}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Location Name</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.name}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Location Head</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.head?.fName + " " + viewData?.head?.lName}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Email</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.email}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Phone</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.phone}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Fax Number</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.faxNumber}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong> Address</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p> {viewData?.line1 + " " + viewData?.line2}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>City</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.city}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>State / Province</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.state}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Zip Code</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.zipCode}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Country</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.country}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-danger" onClick={()=>setShow(false)}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
