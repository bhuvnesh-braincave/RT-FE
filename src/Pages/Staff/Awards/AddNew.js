import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { getAllCompanies } from "../../../Utility/API/company";
import { Controller, useForm } from "react-hook-form";
import { addAward, updateAward } from "../../../Utility/API/award";
import { getEmployeeByCompany } from "../../../Utility/API/employee";
import { useSettingContext } from "../../../Context/settingContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function AddNew({
  viewData,
  setViewData,
  getAwards,
  show,
  setShow,
}) {
  const { constants } = useSettingContext();
  const [dataToUpdate, setDataToUpdate] = useState();
  const [companies, setCompanies] = useState();
  const [employees, setEmployees] = useState();
  const [locations, setLocations] = useState();

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
      if (data.img) data.img = data.img[0];
      console.log(data);
      let res = await addAward(data);
      if (res.status === 201) {
        setShow(false);
        getAwards();
      } else console.log(res);
    } else {
      let res = await updateAward(viewData._id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getAwards();
      } else console.log(res);
    }
  });
  const getCompanies = useCallback(async () => {
    let res = await getAllCompanies();
    if (res.status === 200) {
      setCompanies(res.data);
    }
  }, []);
  const getEmployees = useCallback(async (id) => {
    let res = await getEmployeeByCompany(id);

    if (res.status === 200) {
      setEmployees(res.data);
    }
  }, []);

  const formatSelectedDate = (date) => {
    if (date) {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });
    }
    return "";
  };

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
        <Modal.Title>{viewData ? "update Award" : "Add New Award"}</Modal.Title>
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
                <label className="form-label">Company</label> <br />
                <Controller
                  name="company"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          company: e.target.value,
                        }));
                        setValue("employee", null);
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
                      key={watch("company")}
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          employee: e.target.value,
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
                  Award Type
                </label>{" "}
                <br />
                <Controller
                  name="awardType"
                  control={control}
                  rules={{ required: "this is required field" }}
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          awardType: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">choose...</option>
                      {constants?.award?.map((ele, i) => (
                        <option key={i} value={ele._id}>
                          {ele.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.awardType && (
                  <span style={{ color: "red" }}>
                    {errors.awardType.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6">
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
                          data: e.target.value,
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
            <div className="col-md-6">
              <div className="mb-3">
                <label for="">Gift</label>
                <Controller
                  name="gift"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          gift: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="gift"
                    />
                  )}
                />
                {errors.gift && (
                  <span style={{ color: "red" }}>{errors.gift.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="">Cash</label>
                <Controller
                  name="cash"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          cash: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      type="text"
                      className="form-control"
                      placeholder="Cash"
                    />
                  )}
                />
                {errors.cash && (
                  <span style={{ color: "red" }}>{errors.cash.message}</span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label for="">Month & Year</label>
                <Controller
                  name="monthAndYear"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
                  render={({ field }) => (
                    <DatePicker
                      isClearable
                      showIcon
                      icon="fas fa-calendar-alt "
                      selected={
                        watch("monthAndYear")
                          ? new Date(`01 ${watch("monthAndYear")}`)
                          : null
                      }
                      {...field}
                      onChange={(date) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          monthAndYear: formatSelectedDate(date),
                        }));
                        setValue("monthAndYear", formatSelectedDate(date));
                      }}
                      placeholderText="Month & Year"
                      showMonthYearPicker
                      dateFormat="MMM/yyyy"
                    />
                  )}
                />
                {errors.monthAndYear && (
                  <span style={{ color: "red" }}>
                    {errors.monthAndYear.message}
                  </span>
                )}
              </div>
            </div>

            {!viewData ? (
              <div className="col-md-6">
                <label for="">Attachment</label>
                <input
                  {...register("img", {
                    required: "this is required field",
                  })}
                  type="file"
                  className="form-control"
                  placeholder=""
                />
                {errors?.img && (
                  <span style={{ color: "red" }}>{errors.img.message}</span>
                )}
              </div>
            ) : (
              <div className="col-md-6">
                <label for="">Attachment</label>
                <input
                  onChange={(e) =>
                    setDataToUpdate((preVal) => ({
                      ...preVal,
                      img: e.target.imgs[0],
                    }))
                  }
                  type="file"
                  className="form-control"
                  placeholder=""
                />
              </div>
            )}

            <div className="col-md-12">
              <div className="mb-3">
                <label for="">Award Information</label>
                <Controller
                  name="awardInfo"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      onChange={(e) => {
                        setDataToUpdate((preVal) => ({
                          ...preVal,
                          awardInfo: e.target.value,
                        }));
                        field.onChange(e);
                      }}
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                      style={{ height: "70px" }}
                    ></textarea>
                  )}
                />
                {errors.awardInfo && (
                  <span style={{ color: "red" }}>
                    {errors.awardInfo.message}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label for="">Description</label>
                <Controller
                  name="description"
                  control={control}
                  rules={{
                    required: "thihs is required field",
                  }}
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
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                      style={{ height: "70px" }}
                    ></textarea>
                  )}
                />
                {errors.description && (
                  <span style={{ color: "red" }}>
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            onMouseEnter={() => {
              console.log(watch("img"));
            }}
            type="submit"
            className="btn btn-success w-15"
          >
            SAVE
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
