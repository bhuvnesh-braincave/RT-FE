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
        <Modal.Title>View Document</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Document Name</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.name}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Company</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.company.name}</p>
          </div>
        </div>
        
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Document Type</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.documentType.name}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>License No</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.licenseNumber}</p>
          </div>
        </div>
       
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Expiry Date</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.expiryDate.slice(0,10).split("-").reverse().join("/")}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Alarm</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.alarm}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Attachment</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.filename} " " <a target="_blank" download={viewData.filename} href={"http://localhost:8080/files/"+viewData.filename}>Download</a></p>
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
