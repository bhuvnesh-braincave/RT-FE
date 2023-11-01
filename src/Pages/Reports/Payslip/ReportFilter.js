import { Modal } from "react-bootstrap";

export default function ReportFilter({show,setShow}) {
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Report Filters</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label for="formrow-firstname-input" class="form-label">Company</label> <br/>
                                                            <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                <option value="Company">All Company</option>                                                                                                                              

                                                            </select>
                                                        </div>
                                                    </div>    
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label for="formrow-firstname-input" class="form-label">Employee</label> <br/>
                                                            <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                <option value="employee">Choose an employee</option>                                                                                                                              

                                                            </select>
                                                        </div>
                                                    </div>      
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label for="">Month & Year</label>
                                                            <input type="date" class="form-control" placeholder=""/>
                                                        </div>
                                                    </div>                                                                                             

                                                    


                                                </div>
          </Modal.Body>
          <Modal.Footer>
          <button type="button" class="btn btn-success">Generate</button>
          </Modal.Footer>
        </Modal>
    )
};


