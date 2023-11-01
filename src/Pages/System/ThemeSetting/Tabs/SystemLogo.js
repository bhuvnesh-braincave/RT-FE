import { useCallback, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { updateThemeSetting } from "../../../../Utility/API/system";
import { useSettingContext } from "../../../../Context/settingContext";

export default function SystemLogo({getThemeSettingData,data}) {
let [key1,setKey1] = useState(0)
let [key2,setKey2] = useState(10)
const [show,setShow] = useState(false)
const [toast,setToast] = useState({})
const [updateData,setUpdateData] = useState(null)
const {getAllSetting} = useSettingContext()

const handleSubmit = useCallback(async (dataToUpdate)=>{
  if(!dataToUpdate) return
let formData = new FormData()

for( let key in dataToUpdate){
  formData.append(key,dataToUpdate[key])
}
  let res = await updateThemeSetting("systemLogo",formData)

  if(res.status ===204){
    setToast({message:"update Successfull",bg:"success"})
    getAllSetting()
    setShow(true)
    setKey1(++key1)
    setKey2(++key2)
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
        <h4>System Logo</h4>
        <form action="">
            <div class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label >System Logo</label>
                        <input
                        key={key1}
                        onChange={e=>setUpdateData(preVal=>({...preVal,logo:e.target.files[0]}))}
                        type="file" class="form-control"/>
                        <small>Upload files only: gif,png,jpg,jpeg</small> <br/>
                        <small>- Best Size: 32x27</small> <br/>
                        <small>- Light logo</small>
                    </div>

                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="">Favicon</label>
                        <input
                        key={key2}
                        onChange={e=>setUpdateData(preVal=>({...preVal,favicon:e.target.files[0]}))}
                        type="file" class="form-control"/>
                        <small>- Upload files only: gif,ico,png</small> <br/>
                        <small>- Best Size: 16x16</small> <br/>
                    </div>

                 
                </div>
            </div>
            <button
            onClick={()=>handleSubmit(updateData)}
            type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
        </form>
    </div>
    )
};
