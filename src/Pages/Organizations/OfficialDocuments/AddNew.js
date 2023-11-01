import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { addDocument, updateDocument } from "../../../Utility/API/document";
import { getAllCompanies } from "../../../Utility/API/company";
import { useSettingContext } from "../../../Context/settingContext";

export default function AddNew({viewData,
    setViewData,
    getdocs,show,setShow}) {
        const {constants} = useSettingContext()
    const [companies, setCompanies] = useState([]);
    const [dataToUpdate, setDataToUpdate] = useState();

  const {
    register,
    reset,
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit = useCallback(async (data, dataToUpdate) => {
    if (!viewData) {
        if(data.file) data.file = data.file[0]
      let res = await addDocument(data);
      if (res.status === 201) {
        setShow(false);
        getdocs();
      } else console.log(res);
    } else {
      let res = await updateDocument(viewData._id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getdocs();
      } else console.log(res);
    }
  });
  const getCompanies = useCallback(async () => {
    let res = await getAllCompanies();
    if (res.status === 200) {
      setCompanies(res.data);
    }
  });
useEffect(() => {
    getCompanies();
    if (viewData) {
      reset(viewData);
    }

    return () => {
      setViewData(null);
    };
  }, []);
    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Empolyee Exit</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
          <form
            onSubmit={handleSubmit((data) => {
                onSubmit(data, dataToUpdate);
              })}
            >
           <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">License Name</label>
                                                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                    pattern: {
                      value: /^[A-Za-z0-9&.,()'"/\-\s]{3,100}$/,
                      message: "invalid name pattern",
                    },
                  }}
                  render={({ field }) => (
                                                <input {...field} onChange={e=>{
                                                    setDataToUpdate(preVal=>({...preVal,name:e.target.value}))
                                                    field.onChange(e)
                                                }} type="text" className="form-control" placeholder="Enter License Name"/>
                                                )}
                                                />
                                                {errors.name && (
                                                  <span style={{ color: "red" }}>{errors.name.message}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">Document Type</label> <br/>
                                                <Controller
                  name="documentType"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
                  render={({ field }) => (
                    <select {...field} onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,documentType:e.target.value}))
                        field.onChange(e)
                    }} className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value={""}>choose...</option>
                                                    {constants?.document.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}
                                                </select>
)}
                                                            />
                                                            {errors.documentType && (
                                                              <span style={{ color: "red" }}>{errors.documentType.message}</span>
                                                            )}
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mb-3">
                                                <label for="">License Number</label>
                                                <Controller
                  name="licenseNumber"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
                  render={({ field }) => (
                    <input {...field} onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,licenseNumber:e.target.value}))
                        field.onChange(e)
                    }} type="text" className="form-control" placeholder="Enter License Name"/>
)}
                                                            />
                                                            {errors.licenseNumber && (
                                                              <span style={{ color: "red" }}>{errors.licenseNumber.message}</span>
                                                            )}
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">
                                                    Company
                                                </label> <br/>
                                                <Controller
                  name="company"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      key={watch("company" + "1")}
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          company: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      className="form-control select2-templating"
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {companies?.map((ele, i) => (
                        <option key={i} value={ele._id}>
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
                                                <label for="">Expiry Date</label>
                                                <Controller
                  name="expiryDate"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
                  render={({ field }) => (
                    <input {...field} onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,expiryData:e.target.value}))
                        field.onChange(e)
                    }} type="date" className="form-control" placeholder=""/>
)}
                                                            />
                                                            {errors.expiryDate && (
                                                              <span style={{ color: "red" }}>{errors.expiryDate.message}</span>
                                                            )}
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">
                                                    Alarm Notifications
                                                </label> <br/>
                                                <Controller
                  name="alarm"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
                  render={({ field }) => (
                    <select {...field} onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,alarm:e.target.value}))
                        field.onChange(e)
                    }} className="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="">No Alarm</option>
                                                    <option value="1month"> 1 Month</option>
                                                    <option value="3month"> 3 Month</option>
                                                    <option value="6month"> 6 Month</option>



                                                </select>
)}
                                                            />
                                                            {errors.alarm && (
                                                              <span style={{ color: "red" }}>{errors.alarm.message}</span>
                                                            )}
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                        {!viewData?<div className="mb-3">
                <label for="">Attachment</label>
                <input
                  {...register("file", {
                    required: "this is required field",
                  })}
                  type="file"
                  className="form-control"
                  placeholder=""
                />
                {errors?.file && (
                  <span style={{ color: "red" }}>
                    {errors.file.message}
                  </span>
                )}
              </div>:(
                <div className="mb-3">
                <label for="">Attachment</label>
                <input
                  onChange={e=>setDataToUpdate(preVal=>({...preVal,file:e.target.files[0]}))}
                  type="file"
                  className="form-control"
                  placeholder=""
                />
              </div>
              )}
                                            
                                        </div>
                                    </div>
                                    <button onMouseEnter={()=>{
                                        console.log(watch("file"))
                                    }} type="submit" className="btn btn-success w-15 mt-1">SAVE</button>
                                    </form>

          </Modal.Body>
        </Modal>
    )
};