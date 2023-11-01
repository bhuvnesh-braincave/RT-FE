import { useCallback, useEffect, useState } from "react";
import MainPage from "../../../Components/Common/MainPage";
import AddNew from "./AddNew";
import Table from "./Table";
import { getAllLanguage } from "../../../Utility/API/system";
import { Toast, ToastContainer } from "react-bootstrap";

export default function Language() {
  const [show,setShow] = useState(false)
  const [toast,setToast] = useState({})
  const [isOpen,setIsOpen] = useState(false)
  const [data,setData] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const [isError,setIsError] = useState(false)
const getLanguages = useCallback(async ()=>{
  setIsLoading(true)
  let res = await getAllLanguage()

  if(res.status===200){
    setData(res.data.languages)
    setIsLoading(false)
  }else{
    console.log(res)
    setIsLoading(false)
    setIsError(true)
    setData(null)
  }
},[])

useEffect(()=>{
  getLanguages()
},[])


  return (
    <MainPage title={"Language"}>
      <ToastContainer containerPosition="bottom-end" position="top-right" style={{zIndex:1,position:"fixed",top:"100px", right:"5px"}}>
              <Toast style={{width:"auto"}} className="p-1" onClose={()=>setShow(false)} show={show} delay={3000} bg={toast.bg} autohide>
                <Toast.Body className="text-white">
                  {toast.message}
                </Toast.Body>
              </Toast>
            </ToastContainer>
        {isOpen && <AddNew setToastShow={setShow} setToast={setToast} show={isOpen} getLanguages={getLanguages} setShow={setIsOpen}/>}
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <p class="card-title-desc" style={{ textAlign: "right" }}>
                <button
                  class="btn btn-primary text-right"
                  onClick={()=>setIsOpen(true)}
                >
                  Add Language
                </button>
              </p>
              <Table setShow={setShow} getLanguages={getLanguages} setToast={setToast} isLoading={isLoading} isError={isError} data={data || []} />
            </div>
          </div>
        </div>
      </div>
    </MainPage>
  );
}
