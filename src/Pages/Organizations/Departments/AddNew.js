import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  addDepartment,
  updateDepartment,
} from "../../../Utility/API/department";
import { getAllcompany } from "../../../Utility/API/company";
import { getEmployeeByCompany } from "../../../Utility/API/employee";
import { Controller, useForm } from "react-hook-form";
import { getLocationByCompanyId } from "../../../Utility/API/location";

export default function AddNew({
  getDepartments,
  viewData,
  setViewData,
  show,
  setShow,
}) {
  const [dataToUpdate, setDataToUpdate] = useState();
  const [companies, setCompanies] = useState();
  const [employees, setEmployees] = useState();
  const [locations, setLocations] = useState();

  const {
    register,
    reset,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(async (data, dataToUpdate) => {
    if (!viewData) {
      let res = await addDepartment(data);
      if (res.status === 201) {
        setShow(false);
        getDepartments();
      } else console.log(res);
    } else {
      let res = await updateDepartment(viewData.id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getDepartments();
      } else console.log(res);
    }
  });
  const getCompanies = useCallback(async () => {
    let res = await getAllcompany();
    if (res.status === 200) {
      setCompanies(res.data.companies);
    }
  });
  const getEmployees = useCallback(async (id) => {
    let res = await getEmployeeByCompany(id);

    if (res.status === 200) {
      setEmployees(res.data);
    }
  });

  const getLocations = useCallback(async (id) => {
    let res = await getLocationByCompanyId(id);
    if (res.status === 200) {
      setLocations(res.data);
    }
  }, []);

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
      getLocations(watch("company"))
    } else {
      setEmployees([]);
      setLocations([]);
    }
  }, [watch("company")]);
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {viewData ? "Update Department" : "Add New Department"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form
          onSubmit={handleSubmit(data=>{
            onSubmit(data,dataToUpdate)
          })}
        >
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
                  Locations
                </label>{" "}
                <br />
                <Controller
                  name="location"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      key={watch("company" + "1")}
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          location: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {locations?.map((ele, i) => (
                        <option key={i} value={ele._id}>
                          {ele.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.location && (
                  <span style={{ color: "red" }}>{errors.location.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Department Head
                </label>{" "}
                <br />
                <Controller
                  name="head"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          head: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      className="form-control select2-templating "
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
                {errors.head && (
                  <span style={{ color: "red" }}>{errors.head.message}</span>
                )}
              </div>
              <button type="submit" className="btn btn-success w-15">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
