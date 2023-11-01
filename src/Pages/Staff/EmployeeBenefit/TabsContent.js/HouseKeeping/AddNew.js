import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Housekeeping</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Benefits Year</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="2023">2023 </option>
                                                                            <option value="2022">2022</option>
                                                                            <option value="2021">2021</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Housekeeping Services</label> <br/>
                                                                        <select className="select2 form-control select2-multiple"
                                                                        multiple="multiple" style={{width: "100%"}}>
                                                                        <optgroup >
                                                                            <option value="">Housekeeping Service</option>
                                                                            <option value="">Remarks</option>
                                                                            <option value="">Annual Wage</option>
                                                                        </optgroup>
                                                                        
                                                                    </select>
            
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Remark</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Annual Wages</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>



                                                            </div>
          </Modal.Body>
          <Modal.Footer>
          <button type="button" className="btn btn-success">SAVE</button>

          </Modal.Footer>
        </Modal>
    )
};