import { useCallback ,useState} from "react"
import { updateSetting } from "../../../../Utility/API/system"
import { Toast, ToastContainer } from "react-bootstrap";
import ReactSelect from "react-select";
const options = [
  { value: 'zip', label: 'zip' },
  { value: 'pdf', label: 'pdf' },
  { value: 'doc', label: 'doc' }
]
export default function Performance({data,getSettingData}) {
    
    
    
    const [isLoading,setIsLoading] = useState(false)
        const [isError,setIsError] = useState(false)
        const [show,setShow] = useState(false)
    const [toast,setToast] = useState({})
        const [updateData,setUpdateData] = useState(null)
        const getValue = useCallback((field)=>{
            if(updateData&&updateData[field] !=undefined) return updateData[field]
            else if(data&&data[field]) return data[field]
            else return ""
        },[updateData,data])
        
                const handleSubmit = useCallback(async ()=>{
                    try {
                        console.log(updateData)
                        if(!updateData) return
                        let res = await updateSetting({performance:updateData})
                        console.log(res)
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
      <h4>Performance Configuration</h4>
      <form action="">
        <div class="row">
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
              <label class="form-label">Organizational Competencies</label>

              <input
              value={getValue("organizationalCompetencies")}
              onChange={e=>setUpdateData(preVal=>({...preVal,organizationalCompetencies:e.target.value}))}
                type="text"
                name="input-multiple"
                class="form-control"
              />
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
