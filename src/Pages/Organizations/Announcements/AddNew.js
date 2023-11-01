import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { getAllCompanies } from "../../../Utility/API/company";
import { Controller, useForm } from "react-hook-form";
import { getDepartmentByCompanyId } from "../../../Utility/API/department";
import {
  addAnnouncement,
  updateAnnouncement,
} from "../../../Utility/API/announcement";
import { getLocationByCompanyId } from "../../../Utility/API/location";

export default function AddNew({
  viewData,
  setViewData,
  getAnnouncements,
  show,
  setShow,
}) {
  const [companies, setCompanies] = useState([]);
  const [dataToUpdate, setDataToUpdate] = useState();
  const [departments, setDepartments] = useState();
  const [locations, setLocatons] = useState();

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
      let res = await addAnnouncement(data);
      if (res.status === 201) {
        setShow(false);
        getAnnouncements();
      } else console.log(res);
    } else {
      let res = await updateAnnouncement(viewData._id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getAnnouncements();
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

  const getLocations = useCallback(async (id) => {
    let res = await getLocationByCompanyId(id);
    if (res.status === 200) {
      setLocatons(res.data);
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
      getDepartments(watch("company"));
      getLocations(watch("company"));
    } else {
      setDepartments([]);
      setLocatons([]);
      setValue("location", null);
      setValue("department", null);
    }
  }, [watch("company")]);

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Announcements</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <form onSubmit={handleSubmit(data=>{
          onSubmit(data,dataToUpdate)
        })}>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
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
              onChange={e=>{
                setDataToUpdate(preVal=>({...preVal,title:e.target.value}))
                field.onChange(e)
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
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Start Date</label>
              <Controller name="start" rules={{required:"this is required field"}} control={control} render={({field})=>(
                <input {...field} onChange={e=>{
                    setDataToUpdate(preVal=>({...preVal,start:e.target.value}))
                    field.onChange(e)
                }} type="date" className="form-control" placeholder="" />
              )} />
              {errors.start && (<span style={{color:"red"}}>{errors.start.message}</span>)}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">End Date</label>
              <Controller name="end" rules={{required:"this is required field"}} control={control} render={({field})=>(
                <input {...field} onChange={e=>{
                    setDataToUpdate(preVal=>({...preVal,end:e.target.value}))
                    field.onChange(e)
                }} type="date" className="form-control" placeholder="" />
              )}/>
              {errors.end && (<span style={{color:"red"}}>{errors.end.message}</span>)}
            </div>
          </div>
          <div className="col-md-6">
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
          <div className="col-md-6">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                Location
              </label>{" "}
              <br />
              <Controller
                name="location"
                control={control}
                rules={{ required: "this is required field" }}
                render={({ field }) => (
              <select
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
                {locations?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}
              </select>
                )}
              />
              {errors.location && (
                <span style={{ color: "red" }}>{errors.location.message}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="formrow-firstname-input" className="form-label">
                {" "}
                Department
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
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="">Summary</label>
              <Controller name="summary" control={control} render={({field})=>(
                <input
                {...field}
                onChange={e=>{
                    setDataToUpdate(preVal=>({...preVal,summary:e.target.value}))
                    field.onChange(e)
                }}
                type="text"
                className="form-control"
                placeholder="Summary "
              />
              )} />
              
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label for="">Description</label>
              <Controller
              control={control} name="description"
              render={({field})=>(
                <textarea
                {...field}
                onChange={e=>{
                    setDataToUpdate(preVal=>({...preVal,description:e.target.value}))
                    field.onChange(e)
                }}
                rows="4"
                className="form-control"
              ></textarea>
              )}
              />
              
            </div>
            <button type="submit" className="btn btn-success w-15">
          SAVE
        </button>
          </div>
        </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
