import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { getAllcompany } from "../../../Utility/API/company";
import { addSubdepartment, updateSubdepartment } from "../../../Utility/API/subdepartment";
import { getDepartmentByCompanyId } from "../../../Utility/API/department";

export default function AddNew({viewData,
  setViewData,
  getSubdepartments, show, setShow }) {
    const [companies,setCompanies] = useState([])
    const [dataToUpdate,setDataToUpdate] = useState()
    const [departments,setDepartments] = useState()

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
          let res = await addSubdepartment(data);
          if (res.status === 201) {
            setShow(false);
            getSubdepartments();
          } else console.log(res);
        } else {
          let res = await updateSubdepartment(viewData.id, dataToUpdate);
          if (res.status === 204) {
            setShow(false);
            getSubdepartments();
          } else console.log(res);
        }
      });
      const getCompanies = useCallback(async () => {
        let res = await getAllcompany();
        if (res.status === 200) {
          setCompanies(res.data.companies);
        }
      });
      const getDepartments = useCallback(async (id) => {
        let res = await getDepartmentByCompanyId(id);
        if (res.status === 200) {
          setDepartments(res.data);
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
    
  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{viewData ? "Update Subdepartment":"Add New Subdepartment"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit(data=>{
          onSubmit(data,dataToUpdate)
        })}>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label for="">Name</label>
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
              </label>{" "}
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
            <button type="submit" className="btn btn-success w-15">
          SAVE
        </button>
          </div>
          
        </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
}
