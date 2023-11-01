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
        <Modal.Title>View Travel</Modal.Title>
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
               Start Date</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.start?.slice(0,10).split("-").reverse().join("/")}</p>
          </div>
        </div>
        

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
               End Date</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.end?.slice(0,10).split("-").reverse().join("/")}</p>
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Expected Budget</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.expectedBudget}</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Actual Budget</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.actualBudget}</p>
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
              Purpose Of Visit</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.purpose}</p>
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Place Of Visit</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.place}</p>
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Travel Mode</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.travelMode}</p>
          </div>
        </div>


        <div className="row mb-2">
          <div className="col-md-4">
            <p>
              <strong>
                Travel Arrangement</strong>
            </p>
          </div>
          <div className="col-md-8">
            <p>{viewData?.travelType ? viewData?.travelType.name:"NA"}</p>
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
