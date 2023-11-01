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
        <Modal.Title>View Award</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Award Name</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.awardType?.name}</p>
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
              <strong>Employee</strong>
            </p>
          </div>
          <div className="col-md-8">
          <p>{viewData?.employee ? viewData?.employee?.fName+ " "+viewData?.employee?.lName:"not available"}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Cash</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.cash}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Gift</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.gift}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Month And Year</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.monthAndYear}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Date</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.date?.slice(0,10).split("-").reverse().join("/")}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Info</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.awardInfo}</p>
          </div>
        </div>
       
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Description</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.description}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Attachment</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.filename?.slice(8)}  <a target="_blank" download={viewData?.filename} href={"http://localhost:8080/image/"+viewData?.filename}>Download</a></p>
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
