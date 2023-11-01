import { useCallback ,useState} from "react"
import { updateSetting } from "../../../../Utility/API/system"
import { Toast, ToastContainer } from "react-bootstrap";
	  
    
	
	
	
                      
export default function EmailNotification({data,getSettingData}) {
    
  const [show,setShow] = useState(false)
  const [toast,setToast] = useState({})

const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
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
    
            const handleSubmit = useCallback(async ()=>{
                try {
                    
                    if(!updateData) return
                    let res = await updateSetting({emailNotification:updateData})
              
                    if(res.status===204){
                      setToast({message:"system updated successfully",bg:"success"})
                      setShow(true)
				
                        getSettingData()
                        setUpdateData(null)
                    }else{
                      setToast({message:"erorr occured",bg:"danger"})
					  }
                } catch (error) {
                    
                }
            },[updateData])
  return (
    <div
      class="tab-pane"
    >
      <h4>Email Notifications</h4>
      <form action="">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Enable email notifications{" "}
              </label>{" "}
              <br />
              <input
              checked={getValue("enableEmailNotifiction",true)}
              onChange={e=>setUpdateData(preVal=>({...preVal,enableEmailNotifiction:e.target.checked}))}
              type="checkbox" id="switch20" switch="bool" />
              <label
                for="switch20"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Email Type
              </label>
              <select
              value={getValue("emailType")}
              onChange={e=>setUpdateData(preVal=>({...preVal,emailType:e.target.value}))}
              class="form-select" id="">
                <option value="">Choose...</option>
                <option value="SMTP">SMTP </option>
                <option value="Phpmail">PHP Mail</option>
              </select>
            </div>
          </div>
        </div>
      
        <button
        onClick={()=>handleSubmit()}
          type="button"
          class="btn btn-primary waves-effect waves-light w-25"
        >
          SAVE
        </button>
        
        
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


              