import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee Exit</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <div className="row">

<div className="col-md-6 mb-2">
    <label for="">Company</label> <br/>
    <select className="form-control select2-templating" style={{width: "100%"}}>
        <option value="KMAC">KMAC International Pte Ltd</option>
    </select>
</div>
<div className="col-md-6 mb-2">
    <label for="">Employee To Exit</label> <br/>
    <select className="form-control select2-templating" style={{width: "100%"}}>
        <option value=""></option>
    </select>
</div>
<div className="col-md-6">
    <div className="mb-3">
        <label for="">Exit Date</label>
        <input type="date" className="form-control" placeholder=""/>
    </div>
</div>
<div className="col-md-6 mb-2">
    <label for="">Type of Exit</label> <br/>
    <select className="form-control select2-templating" style={{width: "100%"}}>
        <option value="res">Resign</option>
        <option value="ter">Terminated</option>
    </select>
</div>
<div className="col-md-6 mb-2">
    <label for="">Exit Interview</label> <br/>
    <select className="form-control select2-templating" style={{width: "100%"}}>
        <option value="Yes">Yes</option>
        <option value="No.">No.</option>
    </select>
</div>
<div className="col-md-6 mb-2">
    <label for="">Disable Account</label> <br/>
    <select className="form-control select2-templating" style={{width: "100%"}}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
    </select>
</div>
<div className="col-md-12">
    <div className="mb-3">
        <label for="">Description</label>
        <textarea name="" id="" cols="30" rows="10" style={{height: "70px"}} className="form-control"></textarea>
    </div>
</div>

<div className="col-md-12" style={{textAlign: "right"}}>
    <button className="btn btn-primary">Save</button>
</div>

</div>
          </Modal.Body>
        </Modal>
    )
};