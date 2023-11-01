import { useCallback ,useState} from "react"
import { updateSetting } from "../../../../Utility/API/system"
import { Toast, ToastContainer } from "react-bootstrap";
import ReactSelect from "react-select";
	  
    
	
	
const options = [
  { value: 'zip', label: 'zip' },
  { value: 'pdf', label: 'pdf' },
  { value: 'doc', label: 'doc' }
]


export default function FileManager({data,getSettingData}) {
    
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
                    let res = await updateSetting({fileManager:updateData})
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
      <h4>Files Manager Configuration</h4>
      <form action="">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3 position-relative">
              <label class="form-label">
                Max. File Size
              </label>
              <div class="input-group">
                <input
                value={getValue("maxFileSize")}
                onChange={e=>setUpdateData(preVal=>({...preVal,maxFileSize:e.target.value}))}
                  type="text"
                  class="form-control"
                  placeholder=""
                />
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    MB
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">Allowed Extension</label>

              <ReactSelect value={options.filter(ele=>getValue("allowedExtension").includes(ele.value))} onChange={e=>{
                let arr = e.map(ele=>ele.value)
                setUpdateData(preVal=>({...preVal,allowedExtension:arr}))
              }} options={options} isMulti/>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">
                Employee can view/download all department files{" "}
              </label>{" "}
              <br />
              <input
              checked={getValue("employeeCanDownload",true)}
              onChange={e=>setUpdateData(preVal=>({...preVal,employeeCanDownload:e.target.checked}))}
              type="checkbox" id="switch14" switch="bool" />
              <label
                for="switch14"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
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
