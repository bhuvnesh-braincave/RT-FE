import { useCallback, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { updateThemeSetting } from "../../../../Utility/API/system";


export default function NotificationPosition({getThemeSettingData,data}) {
    
const [show,setShow] = useState(false)
const [toast,setToast] = useState({})
const [updateData,setUpdateData] = useState(null)
const getValue = useCallback((field,check=false)=>{
  if(check){
    if(updateData && updateData[field]!=undefined) return updateData[field]
    else if(data && data[field]!=undefined) return data[field]
    else return false
  }
    if(updateData&&updateData[field] !=undefined) return updateData[field]
    else if(data&&data[field]) return data[field]
    else return ""
},[updateData,data])

const handleSubmit = useCallback(async (dataToUpdate)=>{
  if(!dataToUpdate) return
let formData = new FormData()

for( let key in dataToUpdate){
  formData.append(key,dataToUpdate[key])
}
  let res = await updateThemeSetting("notificationPosition",formData)

  if(res.status ===204){
    setToast({message:"update Successfull",bg:"success"})
    setShow(true)
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
        <h4>Notification Position</h4>
        <form action="">
            <div class="row">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label">Positions</label> <br/>
                        <select
                        value={getValue("position")}
                        onChange={e=>setUpdateData(preVal=>({...preVal,position:e.target.value}))}
                        class="form-control select2-templating " style={{width: "100%"}}>
                            <option value="TR">Top Right</option>
                            <option value="BR">Bottom Right</option>
                            <option value="BL">Bottom Left</option>
                            <option value="TL">Top Left</option>
                            <option value="TC">Top Center</option>

                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label">Enable Close Button </label> <br/>
                        <input
                        checked={getValue("enableCloseButton",true)}
                        onChange={e=>setUpdateData(preVal=>({...preVal,enableCloseButton:e.target.checked}))}
                        type="checkbox" id="switch1" switch="bool" />
                        <label for="switch1" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label">Progress Bar </label> <br/>
                        <input
                        checked={getValue("progressBar",true)}
                        onChange={e=>setUpdateData(preVal=>({...preVal,progressBar:e.target.checked}))}
                        type="checkbox" id="switch2" switch="bool" />
                        <label for="switch2" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                </div>
            </div>
            <button onClick={()=>handleSubmit(updateData)} type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
        </form>

    </div>
    )
};
