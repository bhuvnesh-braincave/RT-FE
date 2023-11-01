import { Modal } from "react-bootstrap";

export default function AddNew({show,setShow}) {
    return(
        <Modal size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">Select Year</label> <br/>
                                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="2021">2021</option>
                                                                    <option value="2022">2022</option>
                                                                    <option value="2023">2023</option>
                                                                   

                                                                </select>
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
