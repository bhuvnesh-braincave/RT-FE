import { Modal } from "react-bootstrap";
import { addConstant } from "../../../../../Utility/API/constant";
import { useState } from "react";

export default function AddNew({getAll,show,setShow}) {
  const [data,setData] = useState({name:"",company:""})
  async function handleSubmit(e){
    e.preventDefault()
    if(!data.name || !data.company) return
    let res = await addConstant("expense",data)

    if(res.status ===204){
      getAll();
      setShow(false);
    }
  }

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Expense Type</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <label className="mb-2">Company</label>
                <input
                value={data.company}
                onChange={e=>setData(preVal=>({...preVal,company:e.target.value}))}
                  type="text"
                  class="form-control"
                  placeholder="Enter Company Name"
                />
          <label className="mb-2">Expense Type</label>
                <input
                value={data.name}
                onChange={e=>setData(preVal=>({...preVal,name:e.target.value}))}
                  type="text"
                  class="form-control"
                  placeholder="Enter Expense type"
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
