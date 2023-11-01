import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import { getAllCompanies } from "../../../Utility/API/company";
import { getEmployeeByCompany } from "../../../Utility/API/employee";
import { useSettingContext } from "../../../Context/settingContext";
import { addResignation, updateResignation } from "../../../Utility/API/resignation";

export default function AddNew({
  viewData,
  setViewData,
  getResignations,
  show,
  setShow,
}) {
  const {setupModule} = useSettingContext()
  const [companies, setCompanies] = useState([]);
  const [dataToUpdate, setDataToUpdate] = useState();
  const [employees, setEmployees] = useState();




  const getEmployees = useCallback(async (id) => {
    let res = await getEmployeeByCompany(id);

    if (res.status === 200) {
      setEmployees(res.data);
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
      let res = await addResignation(data);
      if (res.status === 201) {
        setShow(false);
        getResignations();
      } else console.log(res);
    } else {
      if (dataToUpdate.file) dataToUpdate.file = dataToUpdate.file[0];
      let res = await updateResignation(viewData.id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getResignations();
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

  useEffect(() => {
    if (watch("company")) {
      getEmployees(watch("company"));
    } else {
      setEmployees([]);
    }
  }, [watch("company")]);


  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {viewData ? "Update Resignation" : "Add New Resignation"}
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
            <div className="col-md-12">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Employee
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

            <div className={"col-md-6"}>
              <div className="mb-3">
                <label for="">Notice Date</label>
                <Controller
                  name="noticeDate"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          noticeDate: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  )}
                />
                {errors.noticeDate && (
                  <span style={{ color: "red" }}>{errors.noticeDate.message}</span>
                )}
              </div>
            </div>
            
            <div className={"col-md-6"}>
              <div className="mb-3">
                <label for="">Resignation Date</label>
                <Controller
                  name="resignationDate"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          resignationDate: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  )}
                />
                {errors.resignationDate && (
                  <span style={{ color: "red" }}>{errors.resignationDate.message}</span>
                )}
              </div>
            </div>
            {viewData && <div className="col-md-12">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Status
                </label>{" "}
                <br />
                <Controller
                  name="status"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          status: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      className="form-control select2-templating"
                      style={{ width: "100%" }}
                    >
                        <option value="Not Approved">Not Approved</option>
                        <option value="Manager Level Approved">Manager Level Approved</option>
                        <option value="HRD Level Approved">HRD Level Approved</option>
                        <option value="GM/OM Level Approved">GM/OM Level Approved</option>
                    </select>
                  )}
                />
                {errors.status && (
                  <span style={{ color: "red" }}>{errors.status.message}</span>
                )}
              </div>
            </div>}
            <div className="col-md-12">
              <div className="mb-3">
                <label for="">Resignation Reason</label>
                <Controller
                  control={control}
                  name="resignationReason"
                  render={({ field }) => (
                    <textarea
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          resignationReason: e.target.value,
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
