import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import { getAllCompanies } from "../../../Utility/API/company";
import { getEmployeeByCompany, getEmployeeDetailById } from "../../../Utility/API/employee";
import { getDesignationsByCompanyId } from "../../../Utility/API/designation";
import { addPromotion, updatePromotion } from "../../../Utility/API/promotion";
import { toast } from "react-toastify";

export default function AddNew({
  viewData,
  setViewData,
  getPromotions,
  show,
  setShow,
}) {
 
  const [companies, setCompanies] = useState([]);
  const [dataToUpdate, setDataToUpdate] = useState();
  const [employees, setEmployees] = useState();
  const [designations, setDesignations] = useState();
  const [employee,setEmployee] = useState()


  const getEmployees = useCallback(async (id) => {
    let res = await getEmployeeByCompany(id);

    if (res.status === 200) {
      setEmployees(res.data);
    }
  });

  const getDesignations = useCallback(async (id) => {
    let res = await getDesignationsByCompanyId(id);

    if (res.status === 200) {
      setDesignations(res.data);
    }
  });

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
      let res = await addPromotion(data);
      if (res.status === 201) {
        setShow(false);
        getPromotions();
      } else console.log(res);
    } else {
      if (dataToUpdate.file) dataToUpdate.file = dataToUpdate.file[0];
      let res = await updatePromotion(viewData.id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getPromotions();
      } else console.log(res);
    }
  });


  const employeeDetail = useCallback(async id =>{
    try {
      let res = await getEmployeeDetailById(id)

      if(res.status===200){
        setEmployee(res.data)
      }else {
        toast.error("error while getting employee details")
        console.log(res)
        setEmployee({})
      }
    } catch (error) {
      console.log(error)
      toast.error("error while getting employee details")
    }
  })

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

  useEffect(() => {
    if (watch("company")) {
      getEmployees(watch("company"));
      getDesignations(watch("company"));
    } else {
      setEmployees([]);
      setDesignations([]);
    }
  }, [watch("company")]);


  useEffect(()=>{
    if(watch("employee")){
      employeeDetail(watch("employee"))
    }else{
      setEmployee({})
    }
  },[watch("employee")])

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {viewData ? "Update Promotion" : "Add New Promotion"}
        </Modal.Title>
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
                    disabled={viewData ? true : false}
                      key={watch("company" + "1")}
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          company: e.target.value,
                        }));
                        setValue("employee","")
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
            <div className="col-md-6">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Promotion For
                </label>{" "}
                <br />
                <Controller
                  name="employee"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                    key={watch("company")+"1"}
                      {...field}
                      disabled={viewData ? true : false}
                      className="form-control select2-templating"
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {employees?.map((ele, i) => (
                        <option key={i} value={ele._id}>
                          {ele.fName + " " + ele.lName}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.employee && (
                  <span style={{ color: "red" }}>
                    {errors.employee.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Designation
                </label>
                <br />
                <Controller
                  name="designation"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                    key={watch("company")+"1"}
                      {...field}
                      disabled={viewData ? true : false}
                      className="form-control select2-templating"
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {designations?.map((ele, i) => (
                        <option disabled={employee?.designation === ele._id} key={i} value={ele._id}>
                          {ele.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.designation && (
                  <span style={{ color: "red" }}>
                    {errors.designation.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label> Promotion Title</label>
                <Controller
                  control={control}
                  name="title"
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
                      className="form-control"
                   />
                  )}
                />
              </div>
            </div>
            <div className={"col-md-6"}>
              <div className="mb-3">
                <label for="">Date</label>
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          date: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  )}
                />
                {errors.date && (
                  <span style={{ color: "red" }}>{errors.date.message}</span>
                )}
              </div>
            </div>
            
            
            <div className="col-md-12">
              <div className="mb-3">
                <label for=""> Description</label>
                <Controller
                  control={control}
                  name="description"
                  render={({ field }) => (
                    <textarea
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          description: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      rows="4"
                      className="form-control"
                    ></textarea>
                  )}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success w-15">
            SAVE
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
