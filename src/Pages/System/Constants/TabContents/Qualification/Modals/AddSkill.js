import { Modal } from "react-bootstrap";
import { addConstant } from "../../../../../../Utility/API/constant";
import { useState } from "react";

export default function AddSkill({getAll,show,setShow}) {
  const [name,setName] = useState("")
  async function handleSubmit(e){
    e.preventDefault()
    if(!name) return
    let res = await addConstant("skill",{name})

    if(res.status ===204){
      getAll();
      setShow(false);
    }
  }

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Skill</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <label for="">skill</label>
                <input
                value={name}
                onChange={e=>setName(e.target.value)}
                  type="text"
                  class="form-control"
                  placeholder="Enter skill"
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
