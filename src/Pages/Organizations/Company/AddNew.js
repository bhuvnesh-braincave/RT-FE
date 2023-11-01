import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useSettingContext } from "../../../Context/settingContext";
import { addCompany, updateCompany } from "../../../Utility/API/company";
import ReactSelect from "react-select";
import axios from "axios";

export default function AddNew({getCompanies, show, setShow,updateData=null,
  setUpdate }) {
  const { constants } = useSettingContext();
  const [countries,setCountries] = useState([])
  
  const {
    register,
    reset,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = useCallback(async (data) => {
    if(!updateData){
      data.logo = data?.logo[0]
      data.country = data?.country.value
    let res = await addCompany(data)
    if(res.status===201){
        getCompanies()
        setShow(false)
    }else{
        
    }}else{
      if(data.logo){
        data.logo = data.logo[0]
      }
      data.country = data.country.value
      let res = await updateCompany(updateData._id,data)
      if(res.status===204){
        getCompanies()
        setShow(false)
      }else{
        console.log(res,"failed")
      }
    }
    
  },[]);

  const getAllCountries = useCallback(async(url)=>{
    try {
      let response = await axios.get(url)
      if(response.status===200){
        let arr = response.data?.map(ele=>({value:ele.name.common,label:ele.name.common})).sort((a,b)=>{
          let A = a.label.toUpperCase()
          let B = b.label.toUpperCase()
          if(A<B) return -1
          else return 1
        })

        setCountries(arr)
      }
    } catch (error) {
      console.log(error)
    }
  })

  useEffect(()=>{
    if(updateData){
      updateData.country = {value:updateData.country,label:updateData.country}
      reset(updateData)
    }

    getAllCountries("https://restcountries.com/v3.1/all")
    return()=>{
      setUpdate(null)
    }
  },[])


  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Company</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label for="">Company Name</label>
                <Controller control={control} name="name" rules={{required:"this is required field",pattern:{
                      value: /^[A-Za-z0-9&.,()'"/\-\s]{3,100}$/,
                      message: "invalid name pattern",
                    },}} render={({field})=>(
                    <input
                    {...field}
                    type="text"
                    className={
                      errors.name ? "form-control is-invalid" : "form-control"
                    }
                    placeholder="Enter Company Name"
                  />)}/>
                
                {errors?.name && (
                  <span style={{ color: "red" }}>{errors.name.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="">Tax Number / EIN</label>
                <input
                  type="text"
                  className={
                    errors.taxNumber
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  placeholder="Enter Tax Number"
                  {...register("taxNumber", {
                    required: "this is required field",
                  })}
                />
                {errors?.taxNumber && (
                  <span style={{ color: "red" }}>
                    {errors.taxNumber.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Company Type
                </label>{" "}
                <br />
                <select
                  {...register("companyType", {
                    required: "this is required field",
                  })}
                  className={
                    errors.companyType
                      ? "form-control select2-templating "
                      : "form-control select2-templating"
                  }
                  style={{ width: "100%" }}
                >
                  <option value={""}>choose...</option>
                  {constants?.company?.map((ele, i) => (
                    <option key={i} value={ele._id}>
                      {ele.name}
                    </option>
                  ))}
                </select>
                {errors?.companyType && (
                  <span style={{ color: "red" }}>
                    {errors.companyType.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label for="">Legal / Trading Name</label>
                <input
                  {...register("tradingName", {
                    required: "this is required field",
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Legal"
                />
                {errors?.tradingName && (
                  <span style={{ color: "red" }}>
                    {errors.tradingName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="">Address Line 1</label>
                <input
                  {...register("line1", {
                    required: "this is required field",
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Address Line"
                />
                {errors?.line1 && (
                  <span style={{ color: "red" }}>
                    {errors.line1.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label for="">Resignation Number</label>
                <input
                  {...register("registrationNumber", {
                    required: "this is required field",
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Resignation"
                />
                {errors?.registrationNumber && (
                  <span style={{ color: "red" }}>
                    {errors.registrationNumber.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label for="">Contact Number</label>
                <input
                  {...register("phone", {
                    required: "this is required field",
                    pattern:{value:/^[0-9]{10,15}$/,message:"wrong mobile format"}
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Number"
                />
                {errors?.phone && (
                  <span style={{ color: "red" }}>
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="">Address Line 2</label>
                <input
                  {...register("line2", {
                    required: "this is required field",
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Addres Line2"
                />
                {errors?.line2 && (
                  <span style={{ color: "red" }}>
                    {errors.line2.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="">Email</label>
                <input
                  {...register("email", {
                    required: "this is required field",
                    pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"wrong email format"}
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
                {errors?.email && (
                  <span style={{ color: "red" }}>
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="">Website</label>
                <input
                  {...register("website", {
                    required: "this is required field",
                    pattern:{value:/^(https?|ftp):\/\/[A-Za-z0-9.-]+(\/\S*)?$/,message:"wrong website format"}
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Website Here"
                />
                {errors?.website && (
                  <span style={{ color: "red" }}>
                    {errors.website.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Country
                </label>
                <br />
                <Controller
                name="country"
                control={control}
                
                rules={{required:"countruy is required"}}
                render={({field})=>(
                <ReactSelect  {...field} options={countries} />
                )}
                />
                {errors.country && <spans style={{color:"red"}}>{errors.country.message}</spans>}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="">City</label>
                <input
                  {...register("city", {
                    required: "this is required field",
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter City"
                />
                {errors?.city && (
                  <span style={{ color: "red" }}>
                    {errors.city.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="">State / Province</label>
                <input
                  {...register("state", {
                    required: "this is required field",
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter State"
                />
                {errors?.state && (
                  <span style={{ color: "red" }}>
                    {errors.state.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="">Zip Code</label>
                <input
                  {...register("zipCode", {
                    required: "this is required field",
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter Zipcode"
                />
                {errors?.zipCode && (
                  <span style={{ color: "red" }}>
                    {errors.zipCode.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="">Username</label>
                <input
                  {...register("username", {
                    required: "this is required field",
                  })}
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                />
                {errors?.username && (
                  <span style={{ color: "red" }}>
                    {errors.username.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              {!updateData?<div className="mb-3">
                <label for="">Password</label>
                <input
                  {...register("password", {
                    required: "this is required field",
                  })}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
                {errors?.password && (
                  <span style={{ color: "red" }}>
                    {errors.password.message}
                  </span>
                )}
              </div>:<div className="mb-3">
                <label for="">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>}
            </div>
            <div className="col-md-4">
              {!updateData?<div className="mb-3">
                <label for="">Company Logo</label>
                <input
                  {...register("logo", {
                    required: "this is required field",
                  })}
                  type="file"
                  className="form-control"
                  placeholder=""
                />
                {errors?.logo && (
                  <span style={{ color: "red" }}>
                    {errors.logo.message}
                  </span>
                )}
              </div>:(
                <div className="mb-3">
                <label for="">Company Logo</label>
                <input
                  {...register("logo")}
                  type="file"
                  className="form-control"
                  placeholder=""
                />
              </div>
              )}
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Currency
                </label>{" "}
                <br />
                <select
                  {...register("currency", {
                    required: "this is required field",
                  })}
                  className="form-control select2-templating "
                  style={{ width: "100%" }}
                  
                >
                  <option value="">choose...</option>
                  {constants?.currency?.map((ele,i)=>{
                    
                    return <option  key={i} value={ele._id}>{ele.name+"("+ele.symbol+")"}</option>
                  })}
                </select>
                {errors?.currency && (
                  <span style={{ color: "red" }}>
                    {errors.currency.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Timezone
                </label>{" "}
                <br />
                <select
                  {...register("timeZone", {
                    required: "this is required field",
                  })}
                  className="form-control select2-templating "
                  style={{ width: "100%" }}
                >
                    <option value="">choose...</option>
                  <option value="WB">(GMT + 8:00) Singapore</option>
                  
                </select>
                {errors?.timeZone && (
                  <span style={{ color: "red" }}>
                    {errors.timeZone.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button onMouseEnter={()=>{console.log(watch("country"))}} type="submit" className="btn btn-success">
            SAVE
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
