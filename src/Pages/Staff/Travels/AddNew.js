import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import { getAllCompanies } from "../../../Utility/API/company";
import { getEmployeeByCompany } from "../../../Utility/API/employee";
import { useSettingContext } from "../../../Context/settingContext";
import { addTravel, updateTravel } from "../../../Utility/API/travel";

export default function AddNew({
  viewData,
  setViewData,
  getTravels,
  show,
  setShow,
}) {
  const {setupModule} = useSettingContext()
  const [companies, setCompanies] = useState([]);
  const [dataToUpdate, setDataToUpdate] = useState();
  const [employees, setEmployees] = useState();
    const {constants} = useSettingContext()



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
      let res = await addTravel(data);
      if (res.status === 201) {
        setShow(false);
        getTravels();
      } else console.log(res);
    } else {
      let res = await updateTravel(viewData._id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getTravels();
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
          {viewData ? "Update Travel" : "Add New Travel"}
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
                </label>
                <br />
                <Controller
                  name="employee"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                    disabled={viewData ? true : false}
                    key={watch("company")+"1"}
                      {...field}
                      onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,employee:e.target.value}))
                        field.onChange(e)
                      }}
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
                <label for="">Start Date</label>
                <Controller
                  name="start"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          start: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  )}
                />
                {errors.start && (
                  <span style={{ color: "red" }}>{errors.start.message}</span>
                )}
              </div>
            </div>
            
            <div className={"col-md-6"}>
              <div className="mb-3">
                <label for="">End Date</label>
                <Controller
                  name="end"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          end: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="date"
                      className="form-control"
                      placeholder=""
                    />
                  )}
                />
                {errors.end && (
                  <span style={{ color: "red" }}>{errors.end.message}</span>
                )}
              </div>
            </div>
            


            <div className={"col-md-6"}>
              <div className="mb-3">
                <label for="">Expected Budget</label>
                <Controller
                  name="expectedBudget"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          expectedBudget: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Expected Budget"
                    />
                  )}
                />
                {errors.expectedBudget && (
                  <span style={{ color: "red" }}>{errors.expectedBudget.message}</span>
                )}
              </div>
            </div>
            
            <div className={"col-md-6"}>
              <div className="mb-3">
                <label for="">Actual Budget</label>
                <Controller
                  name="actualBudget"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          actualBudget: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Actual Budget"
                    />
                  )}
                />
                {errors.actualBudget && (
                  <span style={{ color: "red" }}>{errors.actualBudget.message}</span>
                )}
              </div>
            </div>





            <div className={"col-md-6"}>
              <div className="mb-3">
                <label for="">Purpose Of Visit</label>
                <Controller
                  name="purpose"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          purpose: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Purpose Of Visit"
                    />
                  )}
                />
                {errors.purpose && (
                  <span style={{ color: "red" }}>{errors.purpose.message}</span>
                )}
              </div>
            </div>
            
            <div className={"col-md-6"}>
              <div className="mb-3">
                <label for="">Place Of Visit</label>
                <Controller
                  name="place"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          place: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  )}
                />
                {errors.place && (
                  <span style={{ color: "red" }}>{errors.place.message}</span>
                )}
              </div>
            </div>



            <div className="col-md-6">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                  Travel Mode
                </label>
                <br />
                <Controller
                  name="travelMode"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          travelMode: e.target.value,
                        }));
                        setValue("employee","")
                        field.onChange(e);
                      }}
                      className="form-control select2-templating"
                      style={{ width: "100%" }}
                    >
                        <option value="">choose...</option>
                        <option value="bus"> By Bus</option>
                        <option value="train">By Train</option>
                        <option value="plane">By Plane</option>
                        <option value="taxi">By Taxi</option>
                        <option value="rentcar">By Rental Car</option>
                    </select>
                  )}
                />
                {errors.travelMode && (
                  <span style={{ color: "red" }}>{errors.travelMode.message}</span>
                )}
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label for="formrow-firstname-input" className="form-label">
                    Arrangement Type
                </label>
                <br />
                <Controller
                  name="travelType"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          travelType: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      className="form-control select2-templating"
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {constants?.travelArrangement.map((ele, i) => (
                        <option key={i} value={ele._id}>
                          {ele.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.travelType && (
                  <span style={{ color: "red" }}>{errors.travelType.message}</span>
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
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Accepted">Accepted</option>
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
