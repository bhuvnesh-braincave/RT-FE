import { useCallback ,useState} from "react"
import { updateSetting } from "../../../../Utility/API/system"
import { Toast, ToastContainer } from "react-bootstrap";

export default function Role({data,getSettingData}) {
    
const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [show,setShow] = useState(false)
    const [toast,setToast] = useState({})
    const [updateData,setUpdateData] = useState(null)
    const getValue = useCallback((field)=>{
        if(updateData&&updateData[field] !=undefined) return updateData[field] ? true : false
        else if(data&&data[field]!=undefined) return data[field] ? true : false
        else return false
    },[updateData,data])
    
            const handleSubmit = useCallback(async ()=>{
                try {
                    if(!updateData) return
                    let res = await updateSetting({role:updateData})
                    if(res.status===204){
                      setToast({message:"system updated successfully",bg:"success"})
                      setShow(true)

                        getSettingData()
                        setUpdateData(null)
                    }else{
                      setToast({message:"erorr occured",bg:"danger"})
                      setShow(true)
                    }
                } catch (error) {
                    
                }
            },[updateData])
  return (
    <div
      class="tab-pane"
    >
      <h4>Role Configuration</h4>
      <form action="">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">
                Employee can manage own contact information
              </label>{" "}
              <br />
              <input
              checked={getValue("manageOwnContact")}
              onChange={e=>setUpdateData(preVal=>({...preVal,manageOwnContact:e.target.checked}))} type="checkbox" id="switch5" switch="bool" />
              <label
                for="switch5"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Employee can manage own documents
              </label>{" "}
              <br />
              <input checked={getValue("manageOwnDocuments")}
                  onChange={e=>setUpdateData(preVal=>({...preVal,manageOwnDocuments:e.target.checked}))}
                type="checkbox" id="switch6" switch="bool" />
              <label
                for="switch6"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Employee can manage own bank account
              </label>{" "}
              <br />
              <input
              checked={getValue("manageOwnBankAccount")}
              onChange={e=>setUpdateData(preVal=>({...preVal,manageOwnBankAccount:e.target.checked}))} type="checkbox" id="switch7" switch="bool" />
              <label
                for="switch7"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Employee can manage own profile picture{" "}
              </label>{" "}
              <br />
              <input
              checked={getValue("manageOwnProfilePicture")}
              onChange={e=>setUpdateData(preVal=>({...preVal,manageOwnProfilePicture:e.target.checked}))} type="checkbox" id="switch8" switch="bool" />
              <label
                for="switch8"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>

          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Employee can manage own qualification{" "}
              </label>{" "}
              <br />
              <input
              checked={getValue("manageOwnQualification")}
              onChange={e=>setUpdateData(preVal=>({...preVal,manageOwnQualification:e.target.checked}))} type="checkbox" id="switch9" switch="bool" />
              <label
                for="switch9"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Employee can manage own profile information{" "}
              </label>{" "}
              <br />
              <input
              checked={getValue("manageOwnProfileInformation")}
              onChange={e=>setUpdateData(preVal=>({...preVal,manageOwnProfileInformation:e.target.checked}))} type="checkbox" id="switch11" switch="bool" />
              <label
                for="switch11"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Employee can manage own work experience{" "}
              </label>{" "}
              <br />
              <input
              checked={getValue("manageOwnWorkExperience")}
              onChange={e=>setUpdateData(preVal=>({...preVal,manageOwnWorkExperience:e.target.checked}))} type="checkbox" id="switch10" switch="bool" />
              <label
                for="switch10"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Employee can manage own social information{" "}
              </label>{" "}
              <br />
              <input
              checked={getValue("manageOwnSocialInformation")}
              onChange={e=>setUpdateData(preVal=>({...preVal,manageOwnSocialInformation:e.target.checked}))} type="checkbox" id="switch11" switch="bool" />
              <label
                for="switch11"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
         
          <button
          onClick={()=>handleSubmit()}
            type="button"
            class="btn btn-primary waves-effect waves-light w-25"
          >
            SAVE
          </button>
          

          
        </div>
      </form>
      <div 
      aria-live="polite"
      aria-atomic="true"
      className="d-flex justify-content-end">
          <ToastContainer containerPosition="bottom-end" position="bottom-end" style={{zIndex:1}}>
              <Toast style={{width:"auto"}} className="p-1" onClose={()=>setShow(false)} show={show} delay={3000} bg={toast.bg} autohide>
                <Toast.Body className="text-white">
                  {toast.message}
                </Toast.Body>
              </Toast>
            </ToastContainer>
      </div>
    </div>
  );
}
