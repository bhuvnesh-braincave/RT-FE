import { useCallback, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { updateThemeSetting } from "../../../../Utility/API/system";


export default function OrganizationChart({getThemeSettingData,data}) {

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
  let res = await updateThemeSetting("organizationChart",formData)

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
        <h4>Organization Chart</h4>
        <form action="">
            <div class="row">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label">Chart Layout</label> <br/>
                        <select
                        value={getValue("chartLayout")}
                        onChange={e=>setUpdateData(preVal=>({...preVal,chartLayout:e.target.value}))}
                        class="form-control select2-templating " style={{width: "100%"}}>
                            <option value="RtoL">Right to Left</option>
                            <option value="LtoR">Left to Right</option>
                            <option value="TtoB">Top to Bottom</option>
                            <option value="BtoT">Bottom to Top</option>


                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="">Export File Title</label>
                        <input
                        value={getValue("title")}
                        onChange={e=>setUpdateData(preVal=>({...preVal,title:e.target.value}))}
                        type="text" class="form-control" placeholder=""/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label">Export Chart </label>  <br/>
                        <input
                        checked={getValue("exportChart",true)}
                        onChange={e=>setUpdateData(preVal=>({...preVal,exportChart:e.target.checked}))}
                        type="checkbox" id="switch13" switch="bool" />
                        <label for="switch13" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label">Zoom Chart </label>  <br/>
                        <input
                        checked={getValue("zoomChart",true)}
                        onChange={e=>setUpdateData(preVal=>({...preVal,zoomChart:e.target.checked}))}
                        type="checkbox" id="switch14" switch="bool" />
                        <label for="switch14" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label">Pan Chart </label><br/>
                        <input
                        checked={getValue("panChart",true)}
                        onChange={e=>setUpdateData(preVal=>({...preVal,panChart:e.target.checked}))}
                        type="checkbox" id="switch15" switch="bool" />
                        <label for="switch15" data-on-label="Yes" data-off-label="No"></label>
                    </div>
                </div>
            </div>
            <button onClick={()=>handleSubmit(updateData)} type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
        </form>

    </div>
    )
};
