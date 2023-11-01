import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import ReactSelect from "react-select";
import { getAllcompany } from "../../../Utility/API/company";
import { getEmployeeByCompany } from "../../../Utility/API/employee";
import { addLocation, updateLocation } from "../../../Utility/API/location";

export default function AddNew({updateData, setUpdateData, getLocations,show, setShow }) {
  const [countries, setCountries] = useState([]);
  const [companies, setCompanies] = useState();
  const [employees, setEmployees] = useState([]);
  const [dataToUpdate,setDataToUpdate] = useState(null)

  const {
    register,
    reset,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(async (data,dataToUpdate) => {
    if(!updateData){
      console.log(data)
      data.country = data.country.value
      console.log(data)
      let res = await addLocation(data)
      if(res.status===201){
        setShow(false)
        getLocations()
      }else console.log(res)
    }else{
      let res = await updateLocation(updateData._id,dataToUpdate)
      if(res.status===204){
        setShow(false)
        getLocations()
      }else console.log(res)
    }
    
  });

  const getCompanies = useCallback(async () => {
    let res = await getAllcompany();
    if (res.status === 200) {
      setCompanies(res.data.companies);
    }
  });

  const getAllCountries = useCallback(async (url) => {
    try {
      let response = await axios.get(url);
      if (response.status === 200) {
        let arr = response.data
          ?.map((ele) => ({ value: ele.name.common, label: ele.name.common }))
          .sort((a, b) => {
            let A = a.label.toUpperCase();
            let B = b.label.toUpperCase();
            if (A < B) return -1;
            else return 1;
          });

        setCountries(arr);
      }
    } catch (error) {
      console.log(error);
    }
  });

  const getEmployees = useCallback(async (id) => {
    let res = await getEmployeeByCompany(id);

    if (res.status === 200) {
      setEmployees(res.data);
    }
  });

  useEffect(() => {
    
    getAllCountries("https://restcountries.com/v3.1/all");
    getCompanies();
    if(updateData){
      reset(updateData)
    }

    return ()=>{
      setUpdateData(null)
    }
  }, []);

  useEffect(() => {
    if (watch("company")) {
      getEmployees(watch("company"));
    } else setEmployees([]);
  }, [watch("company")]);
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{updateData ? "Update Location":"Add New Location"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit(data=>{
          onSubmit(data,dataToUpdate)
        })}>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Company
                </label>{" "}
                <br />
                <Controller
                  name="company"
                  rules={{ required: "this is required field" }}
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,company:e.target.value}))
                        field.onChange(e)
                      }}
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {companies?.map((ele, i) => (
                        <option value={ele._id} key={i}>
                          {ele.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.company && (
                  <span style={{ color: "red" }}>{errors.company.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Location Head
                </label>{" "}
                <br />
                <Controller
                  name="head"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      key={watch("company") + "1"}
                      {...field}
                      onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,head:e.target.value}))
                        field.onChange(e)
                      }}
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {employees?.map((ele, i) => (
                        <option value={ele._id} key={i}>
                          {ele.fName + " " + ele.lName}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.head && (
                  <span style={{ color: "red" }}>{errors.head.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label>Location Name</label>
                <Controller name="name" rules={{
                    required: "this is required field",
                    pattern: {
                      value: /^[A-Za-z0-9&.,()'"/\-\s]{3,100}$/,
                      message: "invalid name pattern",
                    },
                  }}
                  control={control}
                  render={({field})=>(
                    <input
                  type="text"
                  {...field}
                  onChange={e=>{
                    setDataToUpdate(preVal=>({...preVal,name:e.target.value}))
                    field.onChange(e)
                  }}
                  className={
                    errors.name ? "form-control is-invalid" : "form-control"
                  }
                  placeholder="Enter Location Name"
                />
                  )}
                  />
                {errors?.name && (
                  <span style={{ color: "red" }}>{errors.name.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="">Address Line 1</label>
                <Controller name="line1" control={control} rules={{
                    required: "this is required field",
                  }}
                  render={({field})=>(
                    <input
                  {...field}
                  onChange={e=>{
                    setDataToUpdate(preVal=>({...preVal,line1:e.target.value}))
                    field.onChange(e)
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Enter Address Line"
                />
                  )}
                  />
                {errors?.line1 && (
                  <span style={{ color: "red" }}>{errors.line1.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="">Address Line 2</label>
                <Controller name="line2" rules={{
                    required: "this is required field",
                  }} control={control} render={({field})=>(
                    <input
                  {...field}
                  onChange={e=>{
                    setDataToUpdate(preVal=>({...preVal,line2:e.target.value}))
                    field.onChange(e)
                  }}
                  type="text"
                  className="form-control"
                  placeholder="Enter Addres Line2"
                />
                  )}/>
                
                {errors?.line2 && (
                  <span style={{ color: "red" }}>{errors.line2.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label for="">City</label>
                <Controller name="city" control={control} rules={{
                    required: "this is required field",
                  }} render={({field})=>(
                    <input
                  {...field}
                  onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,city:e.target.value}))
                        field.onChange(e)
                      }}
                  type="text"
                  className="form-control"
                  placeholder="Enter City"
                />
                  )}/>
                
                {errors?.city && (
                  <span style={{ color: "red" }}>{errors.city.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label for="">State / Province</label>
                <Controller name="state" control={control} rules={{
                    required: "this is required field",
                  }} render={({field})=>(
                    <input
                  {...field}
                  onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,state:e.target.value}))
                        field.onChange(e)
                      }}
                  type="text"
                  className="form-control"
                  placeholder="Enter State"
                />
                  )}/>
                
                {errors?.state && (
                  <span style={{ color: "red" }}>{errors.state.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label for="">Zip</label>
                <Controller name="zipCode" rules={{
                    required: "this is required field",
                  }} control={control} render={({field})=>(
                    <input
                  {...field}
                  onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,zipCode:e.target.value}))
                        field.onChange(e)
                      }}
                  type="text"
                  className="form-control"
                  placeholder="Enter Zipcode"
                />
                  )} />
                
                {errors?.zipCode && (
                  <span style={{ color: "red" }}>{errors.zipCode.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Country
                </label>{" "}
                <br />
                <Controller
                  name="country"
                  control={control}
                  rules={{ required: "countruy is required" }}
                  render={({ field }) => (
                    <ReactSelect {...field}
                    onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,country:e.value}))
                        field.onChange(e)
                      }} options={countries} />
                  )}
                />
                {errors.country && (
                  <spans style={{ color: "red" }}>
                    {errors.country.message}
                  </spans>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="">Email</label>
                <Controller name="email" control={control} rules={{
                    required: "this is required field",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "wrong email format",
                    },
                  }}
                  render={({field})=>(
                    <input
                  {...field}
                  onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,email:e.target.value}))
                        field.onChange(e)
                      }}
                  type="text"
                  className="form-control"
                  placeholder="Enter Email Address"
                />
                  )}
                   />
                
                {errors?.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="">Phone Number</label>
                <Controller name="phone" control={control} rules={{
                    required: "this is required field",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "wrong mobile format",
                    },
                  }} render={({field})=>(
                    <input
                  {...field}
                  onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,phone:e.target.value}))
                        field.onChange(e)
                      }}
                  type="text"
                  className="form-control"
                  placeholder="Enter Number"
                />
                  )} />
                
                {errors?.phone && (
                  <span style={{ color: "red" }}>{errors.phone.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label for="">Fax Number</label>
                <Controller name="faxNumber" control={control} rules={{
                    required: "this is required field",
                  }} 
                  render={({field})=>(
                    <input
                  {...field}
                  onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,faxNumber:e.target.value}))
                        field.onChange(e)
                      }}
                  type="text"
                  className="form-control"
                  placeholder="Enter Number"
                />
                  )}/>
                
                {errors?.faxNumber && (
                  <span style={{ color: "red" }}>
                    {errors.faxNumber.message}
                  </span>
                )}
              </div>
            </div>
            <button
            onMouseEnter={()=>{
              console.log(watch("country"))
              console.log(watch("country.value"))
            }}
              type="submit"
              className="btn btn-success w-25"
            >
              SAVE
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
