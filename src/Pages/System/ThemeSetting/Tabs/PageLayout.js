import { useCallback, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { updateThemeSetting } from "../../../../Utility/API/system";

export default function PageLayout({data,getThemeSettingData}) {
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
  let res = await updateThemeSetting("pageLayouts",formData)

  if(res.status ===204){
    setToast({message:"update Successfull",bg:"success"})
    setShow(true)
    getThemeSettingData()
    setUpdateData(null)
  }
},[])



  return (
    <div class="tab-pane">
      <ToastContainer containerPosition="bottom-end" position="top-right" style={{zIndex:1,position:"fixed",top:"100px", right:"5px"}}>
              <Toast style={{width:"auto"}} className="p-1" onClose={()=>setShow(false)} show={show} delay={3000} bg={toast.bg} autohide>
                <Toast.Body className="text-white">
                  {toast.message}
                </Toast.Body>
              </Toast>
            </ToastContainer>
      <h4>Page Layouts</h4>
      <form action="">
        <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Footer Layout
              </label>
              <select
              value={getValue("footerLayout")}
              onChange={e=>setUpdateData(preVal=>({...preVal,footerLayout:e.target.value}))}
              class="form-control select2-templating ">
                <option value="Dfooter">Dark Footer</option>
                <option value="lfooter">Light Footer</option>
                <option value="Tfooter">Transparent Footer</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Statistics cards on dashboard
              </label>
              <select
              value={getValue("staticCards")}
              onChange={e=>setUpdateData(preVal=>({...preVal,staticCards:e.target.value}))}
              class="form-control select2-templating ">
                <option value="0">0</option>
                <option value="4">4</option>
                <option value="8">8</option>
              </select>
            </div>
          </div>

          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Admin Dashboard
              </label>
              <select
              value={getValue("adminDasboard")}
              onChange={e=>setUpdateData(preVal=>({...preVal,adminDasboard:e.target.value}))}
              class="form-control select2-templating ">
                <option value="v1">Dashboard 1</option>
                <option value="v2">Dashboard 2</option>
                <option value="v3">Dashboard 3</option>
                <option value="v4">Dashboard 4</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Login Page Options
              </label>
              <select
              value={getValue("loginPageOption")}
              onChange={e=>setUpdateData(preVal=>({...preVal,loginPageOption:e.target.value}))}
              class="form-control select2-templating ">
                <option value="v1">Login Page Version 1</option>
                <option value="v2">Login Page Version 2</option>
                <option value="v3">Login Page Version 3</option>
                <option value="v4">Login Page Version 4</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Show calendar on dashboard?{" "}
              </label>{" "}
              <br />
              <input
              checked={getValue("showCalender",true)}
              onChange={e=>setUpdateData(preVal=>({...preVal,showCalender:e.target.checked}))}
              type="checkbox" id="switch11" switch="bool" />
              <label
                for="switch11"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          {/* <div class="col-md-4">
                <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">Sub menu icons </label>
                    <ul class="setting-drop-icon">
                        <li><i class="fas fa-circle-notch"></i></li>
                        <li><i class="fas fa-circle"></i></li>
                        <li><i class="fas fa-check"></i></li>
                        <li><i class="fas fa-ellipsis-h"></i></li>
                        <li><i class="far fa-check-circle"></i></li>
                        <li><i class="fas fa-arrow-right"></i></li>

                    </ul>
                    <ul class="setting-drop-icon">

                        <input name="fontawesome-icon" value="" id="" type="radio" >
                        <input name="fontawesome-icon" value="" id="" type="radio" >
                        <input name="fontawesome-icon" value="" id="" type="radio" >
                        <input name="fontawesome-icon" value="" id="" type="radio" >
                        <input name="fontawesome-icon" value="" id="" type="radio" >
                        <input name="fontawesome-icon" value="" id="" type="radio" >
                    </ul>
                </div>
            </div> */}
        </div>
        <button
        onClick={()=>handleSubmit(updateData)}
          type="button"
          class="btn btn-primary waves-effect waves-light w-25"
        >
          SAVE
        </button>
      </form>
    </div>
  );
}
