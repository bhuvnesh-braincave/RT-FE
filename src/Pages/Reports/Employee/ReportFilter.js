import { Modal } from "react-bootstrap";

export default function ReportFilter({show,setShow}) {
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Report Filters</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <div class="row">
                                        <div class="col-md-3">
                                            <div class="mb-3">
                                                <label for="formrow-firstname-input" class="form-label">Company</label> <br/>
                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="All">All </option>
                                                    <option value="Super Admin">KMAC International Pte Ltd</option>                                                                                                                          

                                                </select>
                                            </div>
                                        </div>   
                                        <div class="col-md-3">
                                            <div class="mb-3">
                                                <label for="formrow-firstname-input" class="form-label">Department</label> <br/>
                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="All Department">All Department</option>                                                                                                             

                                                </select>
                                            </div>
                                        </div> 
                                        <div class="col-md-3">
                                            <div class="mb-3">
                                                <label for="formrow-firstname-input" class="form-label">Designation</label> <br/>
                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="All Designation">All Designation</option>                                                                                                                          

                                                </select>
                                            </div>
                                        </div> 
                                        <div class="col-md-3">
                                            
                                        </div>                                                                                             
                                    </div>
          </Modal.Body>
          <Modal.Footer>
          <button type="button" class="btn btn-success">Get</button>
          </Modal.Footer>
        </Modal>
    )
};


