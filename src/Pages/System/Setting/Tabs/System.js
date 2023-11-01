import { useCallback, useEffect, useState } from "react";
import { getAConstant, getConstant } from "../../../../Utility/API/constant";
import { getAllLanguage, updateSetting } from "../../../../Utility/API/system";
import { Toast, ToastContainer } from "react-bootstrap";

export default function System({getSettingData,data}) {
  const [language,setLanguage] = useState([])
    const [currData,setCurrData] = useState(null)
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
        else if(data&&data[field]){
            if(field==="defaultCurrency") return data[field]?._id
            else return data[field]
        }
        else return ""
    },[updateData,data])
    const getData =  useCallback(async ()=>{
                try {
                    setIsLoading(true)
                    let [currRes,langRes] = await Promise.all([getAConstant("currency"),getAllLanguage()]) 
                    if(currRes.status===200){
                        setCurrData(currRes.data.constant)
                        setIsError(false)
                    }else{
                      setToast({message:"erorr occured",bg:"danger"})
                      setShow(true)
                        setIsError(true)
                    }

                    if(langRes.status===200){
                      setLanguage(langRes.data.languages)
                    }
                    setIsLoading(false)
                } catch (error) {
                    setIsError(true)
                    setIsLoading(false)
                    console.log(error)
                }
            },[])



            const handleSubmit = useCallback(async ()=>{
                try {
                    console.log(updateData)
                    if(!updateData) return
                    let res = await updateSetting({system:updateData})
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
    useEffect(()=>{
        getData()
    },[])
  return (
    <div
      class="tab-pane"
    >
      <h4>System Confuguration</h4>
      <form action="">
        <div class="row">
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                System Name
              </label>
              <input
                type="text"
                class="form-control"
                value={getValue("name")}
                onChange={e=>setUpdateData(preVal=>({...preVal,name:e.target.value}))}
                placeholder="Enter System Name"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Default Currency
              </label>
              <select 
                value={getValue("defaultCurrency")}
                onChange={e=>setUpdateData(preVal=>({...preVal,defaultCurrency:e.target.value}))} class="form-select" id="">
                <option value="">Choose...</option>
                {currData?.map((ele,i)=><option key={i} value={ele._id}>{`${ele.name} (${ele.symbol})`}</option>
                )}
                {/* <option value="1">Dollar </option>
                <option value="2">Rupees</option>
                <option value="3">Pound</option> */}
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Currency Position
              </label>
              <select value={getValue("defaultCurrencyPosition")}
                onChange={e=>setUpdateData(preVal=>({...preVal,defaultCurrencyPosition:e.target.value}))} class="form-select" id="">
                <option selected="">Choose...</option>
                <option value="prefix">Prefix </option>
                <option value="suffix">Suffix</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label class="form-label">
                Employee Login
              </label>
              <select value={getValue("employeeLogin")}
                onChange={e=>setUpdateData(preVal=>({...preVal,employeeLogin:e.target.value}))} class="form-select">
                <option selected="">Choose...</option>
                <option value="email">Employee Login With Email </option>
                <option value="username">Employee Login With Username</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label class="form-label">
                Footer Text
              </label>
              <input
              value={getValue("footerText")}
              onChange={e=>setUpdateData(preVal=>({...preVal,footerText:e.target.value}))}
                type="text"
                class="form-control"
                placeholder="Enter Footer Text"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="templating-select">
              <label class="form-label">Timezone</label>
              <select
              value={getValue("timezone")}
              onChange={e=>setUpdateData(preVal=>({...preVal,timezone:e.target.value}))} class="form-control select2-templating">
                <option selected="">Choose...</option>
                <option value="SG">(GMT+8:00) Singapore</option>
                <option value="SU">(GMT+9:00) Seoul</option>

                <option value="CA">(GMT+9:30) Darwin</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    Current year (footer)
                  </label>
                  <input
                  checked={getValue("currentyearFooter",true)}
                  onChange={e=>setUpdateData(preVal=>({...preVal,currentyearFooter:e.target.checked}))}
                  type="checkbox" id="switch3" switch="bool" />
                  <label
                    for="switch3"
                    data-on-label="Yes"
                    data-off-label="No"
                  ></label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">
                    Statutory Amount fixed
                  </label>
                  <input
                  checked={getValue("statutoryAmountFixed",true)}
                  onChange={e=>setUpdateData(preVal=>({...preVal,statutoryAmountFixed:e.target.checked}))}
                  type="checkbox" id="switch4" switch="bool" />
                  <label
                    for="switch4"
                    data-on-label="Yes"
                    data-off-label="No"
                  ></label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Default Language
              </label>
              <select value={getValue("defaultLanguage")}
              onChange={e=>setUpdateData(preVal=>({...preVal,defaultLanguage:e.target.value}))} class="form-select" id="">
                {language?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name+"("+ele.code+")"}</option>))}
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Google Maps API KEY
              </label>
              <input
              value={getValue("googleMapApiKey")}
              onChange={e=>setUpdateData(preVal=>({...preVal,googleMapApiKey:e.target.value}))}
              type="text" class="form-control" id="" placeholder="" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Staff Dashboard
              </label>
              <select
              value={getValue("staffDashboard")}
              onChange={e=>setUpdateData(preVal=>({...preVal,staffDashboard:e.target.value}))}
              class="form-select" id="">
                <option selected="">Choose...</option>
                <option value="white">White Widgets </option>
                <option value="color">Color Widgets</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Project Dashboard
              </label>
              <select
              value={getValue("projectDashboard")}
              onChange={e=>setUpdateData(preVal=>({...preVal,projectDashboard:e.target.value}))}
              class="form-select" id="">
                <option selected="">Choose...</option>
                <option value="white">White Widgets </option>
                <option value="color">Color Widgets</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Estimate Terms & Condition
              </label>
              <textarea
              value={getValue("estimateTermsAndCondition")}
              onChange={e=>setUpdateData(preVal=>({...preVal,estimateTermsAndCondition:e.target.value}))}
                class="form-control"
                rows="3"
                placeholder=""
                spellcheck="false"
              ></textarea>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="formrow-firstname-input" class="form-label">
                Invoice Terms & Condition
              </label>
              <textarea
              value={getValue("invoiceTermsAndCondition")}
              onChange={e=>setUpdateData(preVal=>({...preVal,invoiceTermsAndCondition:e.target.value}))}
                class="form-control"
                rows="3"
                placeholder=""
                spellcheck="false"
              ></textarea>
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
