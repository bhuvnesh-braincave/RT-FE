import { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import { addLanguage } from "../../../Utility/API/system";

export default function AddNew({show,setShow,getLanguages,setToast,setToastShow}) {
    const [language,setLanguage] = useState({})

    const handleSubmit = useCallback(async (data)=>{
        if(!language || !language.name || !language.code) return (setToast({message:"input field are required",bg:"danger"}),setToastShow(true))
        let res = await addLanguage(data)
        if(res.status ===201){
            setToast({message:"language added successfully",bg:"success"})
            setToastShow(true)
            getLanguages()
            setShow(false)

        }
    })
    return(
        <Modal size="sm" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Language</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <div class="row">
                <div class="col-md-12 mb-2">
                    <label for="">Language Name</label>
                    <input
                    value={language.name}
                    onChange={e=>setLanguage(preVal=>({...preVal,name:e.target.value}))}
                    type="text" class="form-control" placeholder=""/>
                </div>
                <div class="col-md-12 mb-2">
                    <label for="">Language Code</label>
                    <input
                    value={language.code}
                    onChange={e=>setLanguage(preVal=>({...preVal,code:e.target.value}))}
                    type="text" class="form-control" placeholder=""/>
                </div>
                <div class="col-md-12">
                    <button onClick={()=>handleSubmit(language)} class="btn btn-info">Add Language</button>
                </div>
            </div>
          </Modal.Body>
        </Modal>
    )
};
