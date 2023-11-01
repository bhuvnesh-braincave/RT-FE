import { Modal } from "react-bootstrap";
import { addConstant } from "../../../../../Utility/API/constant";
import { useState } from "react";

export default function AddNew({show,setShow,getAll}) {
  const [name,setName] = useState("")
  async function handleSubmit(e){
    e.preventDefault()
    if(!name) return
    let res = await addConstant("document",{name})

    if(res.status ===204){
      getAll();
      setShow(false);
    }
  }
    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Document Type</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <label for="">Document Type</label>
                <input
                onChange={e=>setName(e.target.value)}
                value={name}
                  type="text"
                  class="form-control"
                  placeholder="Enter Document type"
                />
          </Modal.Body>
          <Modal.Footer>
          <button onClick={handleSubmit} type="button" class="btn btn-success">
                  Save
                </button>
          </Modal.Footer>
        </Modal>
      );
};
