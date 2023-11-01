import { useState } from "react";
import { Modal } from "react-bootstrap";
import { addConstant } from "../../../../../Utility/API/constant";

export default function AddNew({getAll,show,setShow}) {
   const [data,setData] = useState("")
  async function handleSubmit(e){
    e.preventDefault()
    if(!data.name || ! data.code || !data.symbol) return
    let res = await addConstant("currency",data)

    if(res.status ===204){
      getAll();
      setShow(false);
    }
  }

    return (
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Currency  Type</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <label className="mb-3" for="">Currency Type Name</label>
                <input
                value={data.name}
                onChange={e=>setData(preVal=>({...preVal,name:e.target.value}))}
                  type="text"
                  class="form-control"
                  placeholder="Enter Currency type Name"
                />
                <label className="mb-3" for="">Currency Type Code</label>
                <input
                value={data.code}
                onChange={e=>setData(preVal=>({...preVal,code:e.target.value}))}
                  type="text"
                  class="form-control"
                  placeholder="Enter Currency type Code"
                />
                <label className="mb-3" for="">Currency Type Symbol</label>
                <input
                value={data.symbol}
                onChange={e=>setData(preVal=>({...preVal,symbol:e.target.value}))}
                  type="text"
                  class="form-control"
                  placeholder="Enter Currency type Symbol"
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
