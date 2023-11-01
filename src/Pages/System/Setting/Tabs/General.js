import { useCallback ,useState} from "react"
import { updateSetting } from "../../../../Utility/API/system"
import { Toast, ToastContainer } from "react-bootstrap";
	  
    
	
	
	
                      
export default function General({getSettingData,data}) {
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [show,setShow] = useState(false)
    const [toast,setToast] = useState({})
    const [updateData,setUpdateData] = useState(null)
    const getValue = useCallback((field1,field2)=>{
        if(field1==="address"){
            if(updateData &&updateData[field1]&& updateData[field1][field2] != undefined) return updateData[field1][field2]
            else if( data && data[field1] &&data[field1][field2]) return data[field1][field2]
            else return ""
        }
        else {
            if(updateData && updateData[field1] != undefined) return updateData[field1]
            else if(data&&data[field1]) return data[field1]
            else return ""
        }
    },[updateData,data])
    
            const handleSubmit = useCallback(async ()=>{
                try {
                    console.log(updateData)
                    if(!updateData) return
                    let res = await updateSetting({company:updateData})
                    console.log(res)
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
      <h4>General Configuration</h4>
      <form action="">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">
                Company Name
              </label>
              <input
                type="text"
                class="form-control"
                value={getValue("name")}
                onChange={e=>setUpdateData(preVal=>({...preVal,name:e.target.value}))}
                placeholder="Enter Company Name"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Address Line 1
              </label>
              <input
              value={getValue("address","line1")}
              onChange={e=>setUpdateData(preVal=>({...preVal,address:{...preVal?.address,line1:e.target.value}}))}
                type="text"
                class="form-control"
                placeholder="Enter Address "
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">
                Client
              </label>
              <input
              value={getValue("client")}
              onChange={e=>setUpdateData(preVal=>({...preVal,client:e.target.value}))}
                type="text"
                class="form-control"
                placeholder="Enter Client Name"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">
                Address Line 2
              </label>
              <input
              value={getValue("address","line2")}
              onChange={e=>setUpdateData(preVal=>({...preVal,address:{...preVal?.address,line2:e.target.value}}))}
                type="text"
                class="form-control"
                placeholder="Enter Address"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="templating-select">
              <label class="form-label">Country</label> <br />
              <select
              value={getValue("address","country")}
              onChange={e=>setUpdateData(preVal=>({...preVal,address:{...preVal?.address,country:e.target.value}}))}
                class="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value={""}>choose...</option>
                <option value="IN">India</option>
                <option value="SG">Singapore</option>
                <option value="AUS">Australia</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="templating-select">
              <label class="form-label">State</label> <br />
              <select
              value={getValue("address","state")}
              onChange={e=>setUpdateData(preVal=>({...preVal,address:{...preVal?.address,state:e.target.value}}))}
                class="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value={""}>chooose...</option>
                <option value="WB">West Bengal</option>
                <option value="OD">Odissa</option>
                <option value="MH">Maharastra</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="templating-select">
              <label class="form-label">city</label> <br />
              <select
              value={getValue("address","city")}
              onChange={e=>setUpdateData(preVal=>({...preVal,address:{...preVal?.address,city:e.target.value}}))}
                class="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value={""}>chooose...</option>
                <option value="KOL">Kolkata</option>
                <option value="BH">Bhubaneswar</option>
                <option value="MB">Mumbai</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="mb-3">
              <label class="form-label">
                Zip Code
              </label>
              <input
              value={getValue("address","zipcode")}
              onChange={e=>setUpdateData(preVal=>({...preVal,address:{...preVal?.address,zipcode:e.target.value}}))}
                type="text"
                class="form-control"
                placeholder="Enter zip code"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">
                Email
              </label>
              <input
              value={getValue("email")}
              onChange={e=>setUpdateData(preVal=>({...preVal,email:e.target.value}))}
                type="email"
                class="form-control"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label class="form-label">
                Phone Number
              </label>
              <input
              value={getValue("phone")}
              onChange={e=>setUpdateData(preVal=>({...preVal,phone:e.target.value}))}
                type="text"
                class="form-control"
                placeholder="Enter Your Phone"
              />
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
