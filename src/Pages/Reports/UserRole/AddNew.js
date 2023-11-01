import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="sm" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Report Filters</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label for="formrow-firstname-input" class="form-label">User Roles</label> <br/>
                                                            <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                <option value="All Roles">All Roles</option>
                                                                <option value="Super Admin">Super Admin</option>
                                                                <option value="Admin">Admin</option>                                                                 

                                                            </select>
                                                        </div>
                                                    </div>                                                                                               

                                                    


                                                </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" class="btn btn-success ">Get</button>
          </Modal.Footer>
          

        </Modal>
    )
};
