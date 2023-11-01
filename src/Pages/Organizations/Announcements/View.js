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
        <Modal.Title>View Grouping</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Announcement Title</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.title}</p>
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
              <strong>Department Name</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.department.name}</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Location Name</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.location.name}</p>
          </div>
        </div>
        
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Start</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData.start ? viewData?.start.slice(0,10).split("-").reverse().join("/"):"not availabel"}</p>
          </div>
        </div>
        
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>End</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData.end ? viewData?.end?.slice(0,10).split("-").reverse().join("/") : "not available"}</p>
          </div>
        </div>
        
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Summary</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.summary}</p>
          </div>
        </div>
        
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>Description</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.description}</p>
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
