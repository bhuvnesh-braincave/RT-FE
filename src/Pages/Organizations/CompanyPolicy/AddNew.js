import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { addPolicy, updatePolicy } from "../../../Utility/API/policy";
import { getAllCompanies } from "../../../Utility/API/company";

export default function AddNew({viewData,
    setViewData,
    getPolicies,show,setShow}) {
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
      let res = await addPolicy(data);
      if (res.status === 201) {
        setShow(false);
        getPolicies();
      } else console.log(res);
    } else {
        if(dataToUpdate.file) dataToUpdate.file = dataToUpdate.file[0]
      let res = await updatePolicy(viewData.id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getPolicies();
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
            <Modal.Title>{viewData? "update Policy":"Add New Policy"}</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <form
            onSubmit={handleSubmit((data) => {
                onSubmit(data, dataToUpdate);
              })}
            >
    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
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
                                                        <div className="col-md-12">
                                                            <label for="">Title</label>
                                                            <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                    pattern: {
                      value: /^[A-Za-z0-9&.,()'"/\-\s]{3,100}$/,
                      message: "invalid title pattern",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          title: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Enter Title"
                    />
                  )}
                />
                {errors.title && (
                  <span style={{ color: "red" }}>{errors.title.message}</span>
                )}
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label for="">Description</label>
                                                            <Controller
                  name="description"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
                  render={({ field }) => (
                                                            <textarea {...field} onChange={(e) => {
                                                                setDataToUpdate((preVal) => ({
                                                                  ...preVal,
                                                                  description: e.target.value,
                                                                }));
                                                                field.onChange(e);
                                                              }} cols="30" rows="10" className="form-control" style={{height: "100px"}}></textarea>
                                                            )}
                                                            />
                                                            {errors.description && (
                                                              <span style={{ color: "red" }}>{errors.description.message}</span>
                                                            )}

                                                        </div>
                                                        <div className="col-md-12">
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
                                                    <button  type="submit" className="btn btn-success w-15">SAVE</button>
                                                    </form>
          </Modal.Body>
          <Modal.Footer>
         

          </Modal.Footer>
        </Modal>
    )
};
