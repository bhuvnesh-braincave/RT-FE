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
        <Modal.Title>View Transfer</Modal.Title>
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
              <strong>Employee</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.employee.fName+" "+viewData?.employee.lName}</p>
          </div>
        </div>
        
        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
               Notice Date</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.noticeDate?.slice(0,10).split("-").reverse().join("/")}</p>
          </div>
        </div>
        

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
               Resignation Date</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.resignationDate?.slice(0,10).split("-").reverse().join("/")}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Resignation Reason</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.resignationReason}</p>
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
