import { useCallback, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { updateThemeSetting } from "../../../../Utility/API/system";

    export default function PayrollLogo({getThemeSettingData,data}) {
        let [key,setKey] = useState(0)
        const [show,setShow] = useState(false)
const [toast,setToast] = useState({})
const [updateData,setUpdateData] = useState(null)


const handleSubmit = useCallback(async (dataToUpdate)=>{
  if(!dataToUpdate) return
let formData = new FormData()

for( let key in dataToUpdate){
  formData.append(key,dataToUpdate[key])
}
  let res = await updateThemeSetting("payRollLogo",formData)

  if(res.status ===204){
    setToast({message:"update Successfull",bg:"success"})
    setShow(true)
    setKey(++key)
    getThemeSettingData()
    setUpdateData(null)
  }
},[])

            
    return(
        <div class="tab-pane">
            <ToastContainer containerPosition="bottom-end" position="top-right" style={{zIndex:1,position:"fixed",top:"100px", right:"5px"}}>
              <Toast style={{width:"auto"}} className="p-1" onClose={()=>setShow(false)} show={show} delay={3000} bg={toast.bg} autohide>
                <Toast.Body className="text-white">
                  {toast.message}
                </Toast.Body>
              </Toast>
            </ToastContainer>
        <h4>Payroll Logo (for payroll pdf)</h4>
        <form action="">
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="">Logo</label>
                        <input
                        key={key}
                        onChange={e=>setUpdateData({payRollLogo:e.target.files[0]})}
                        type="file" class="form-control"/>
                        <small>- Upload files only: gif,png,jpg,jpeg</small> <br/>
                        <small>- Best Size: 137x40</small> <br/>
                    </div>


                </div>
            </div>
            <button onClick={()=>handleSubmit(updateData)} type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
        </form>

    </div>
    )
};
