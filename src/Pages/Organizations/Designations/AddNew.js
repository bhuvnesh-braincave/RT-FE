import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { getAllCompanies } from "../../../Utility/API/company";
import { getDepartmentByCompanyId } from "../../../Utility/API/department";
import { getSubdepartmentByDepartmentId } from "../../../Utility/API/subdepartment";
import { addDesignation, updateDesignation } from "../../../Utility/API/designation";
import { Controller, useForm } from "react-hook-form";

export default function AddNew({viewData,
    setViewData,
    getDesignations,show,setShow}) {
    const [companies,setCompanies] = useState([])
    const [dataToUpdate,setDataToUpdate] = useState()
    const [departments,setDepartments] = useState()
    const [subdepartments,setSubdepartments] = useState()

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
          let res = await addDesignation(data);
          if (res.status === 201) {
            setShow(false);
            getDesignations();
          } else console.log(res);
        } else {
          let res = await updateDesignation(viewData.id, dataToUpdate);
          if (res.status === 204) {
            setShow(false);
            getDesignations();
          } else console.log(res);
        }
      });
      const getCompanies = useCallback(async () => {
        let res = await getAllCompanies();
        if (res.status === 200) {
          setCompanies(res.data);
        }
      });
      const getDepartments = useCallback(async (id) => {
        let res = await getDepartmentByCompanyId(id);
        if (res.status === 200) {
          setDepartments(res.data);
        }
      });
      
      const getSubepartments = useCallback(async (id) => {
        let res = await getSubdepartmentByDepartmentId(id);
        if (res.status === 200) {
          setSubdepartments(res.data);
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
    
      useEffect(() => {
        if (watch("company")) {
          getDepartments(watch("company"))
        } else {
          setDepartments([])
          setValue("department",null)
        }
      }, [watch("company")]);

      useEffect(() => {
        if (watch("department")) {
            getSubepartments(watch("department"))
        } else {
          setSubdepartments([])
          setValue("subdepartment",null)
        }
      }, [watch("department")]);

    return(
        <Modal size="lg" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{viewData?"Update Designation":"Add New Designation"}</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            <form onSubmit={handleSubmit(data=>{
          onSubmit(data,dataToUpdate)
        })}>
            <div className="row">
                <div className="col-md-12">
                <div className="mb-3">
              <label for="">Designation Name</label>
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
              <input
              {...field}
                    onChange={(e) => {
                      setDataToUpdate((preVal) => ({
                        ...preVal,
                        name: e.target.value,
                      }));
                      field.onChange(e);
                    }}
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
              />
              
                )}
              />
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}
            </div>
                                                        </div>
                                                        <div className="col-md-12">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Company
              </label>{" "}
              <br />
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
                      setValue("department",null)
                      field.onChange(e);
                    }}
                    className="form-control select2-templating "
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
                                                        <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Main Department
              </label>
              <br />
              <Controller
                name="department"
                control={control}
                rules={{ required: "this is required field" }}
                render={({ field }) => (
              <select
              {...field}
                    onChange={(e) => {
                      setDataToUpdate((preVal) => ({
                        ...preVal,
                        department: e.target.value,
                      }));
                      field.onChange(e);
                    }}
                className="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value="">choose...</option>
                {departments?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}

              </select>
              
                )}
              />
              {errors.department && (
                <span style={{ color: "red" }}>{errors.department.message}</span>
              )}
            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                        <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Sub Department
              </label>
              <br />
              <Controller
                name="subdepartment"
                control={control}
                rules={{ required: "this is required field" }}
                render={({ field }) => (
              <select
              {...field}
                    onChange={(e) => {
                      setDataToUpdate((preVal) => ({
                        ...preVal,
                        subdepartment: e.target.value,
                      }));
                      field.onChange(e);
                    }}
                className="form-control select2-templating "
                style={{ width: "100%" }}
              >
                <option value="">choose...</option>
                {subdepartments?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}

              </select>
              
                )}
              />
              {errors.subdepartment && (
                <span style={{ color: "red" }}>{errors.subdepartment.message}</span>
              )}
            </div>
                                                            <button type="submit" className="btn btn-success w-15">SAVE</button>
                                                        </div>

                                                    </div></form>
          </Modal.Body>
        </Modal>
    )
};
