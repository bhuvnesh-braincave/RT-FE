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
                Transfered From Department</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.from?.department? viewData.from.department.name : "not available"}</p>
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Transfered From Subdepartment</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.from?.subdepartment? viewData.from.subdepartment.name : "not available"}</p>
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Transfered From Location</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.from?.location? viewData.from.location.name : "not available"}</p>
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Transfered to Department</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.to?.department? viewData.to.department.name : "not available"}</p>
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Transfered to Subdepartment</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.to?.subdepartment? viewData.to.subdepartment.name : "not available"}</p>
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Transfered to Location</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.to?.location? viewData.to.location.name : "not available"}</p>
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

      </Modal.Body>
      <Modal.Footer>
        <button type="button" className="btn btn-danger" onClick={()=>setShow(false)}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
