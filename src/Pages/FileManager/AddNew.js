import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Files</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="formrow-firstname-input" class="form-label">Department</label> <br/>
                                                                            <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                                <option value="HR">HR</option>
                                                                                <option value="Operation">Operation</option>
                                                                                <option value="Accountant">Accountant</option>                                                              
                
                                                                            </select>
                                                                        </div>
                                                                    </div>     
                                                                    <div class="col-md-12">
                                                                        <div class="mb-3">
                                                                            <label for="">Document File</label>
                                                                            <input type="file" class="form-control" placeholder=""/>
                                                                        </div>
                                                                    </div>                                                                                          
                
                                                                    
                
                
                                                                </div>
          </Modal.Body>
          <Modal.Footer>
          <button type="button" class="btn btn-success">Get</button>
  
          </Modal.Footer>
        </Modal>
    )
};