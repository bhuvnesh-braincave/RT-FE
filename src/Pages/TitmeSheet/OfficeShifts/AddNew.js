import { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

import { getAllCompanies } from "../../../Utility/API/company";
import { addShift, updateShift } from "../../../Utility/API/shift";

export default function AddNew({
  viewData,
  setViewData,
  getShifts,
  show,
  setShow,
}) {
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
      console.log(data)
      let res = await addShift(data);
      if (res.status === 201) {
        setShow(false);
        getShifts();
      } else console.log(res);
    } else {
      let res = await updateShift(viewData._id, dataToUpdate);
      if (res.status === 204) {
        setShow(false);
        getShifts();
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

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {viewData ? "update Policy" : "Add New Policy"}
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
              <label for="">Shift Name</label>
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
                    placeholder="Enter Title"
                  />
                )}
              />
              {errors.name && (
                <span style={{ color: "red" }}>{errors.name.message}</span>
              )}
            </div>

            <div class="row mt-3">
                <div class="mb-1 mt-4 col-lg-1">
                    <strong class="mt-2">Monday</strong>
                </div>
              
              <div class="mb-3 col-lg-3">
                <label for="">In Time</label>
                   <input
                   {...register("monday.start",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"monday.start":e.target.value}))
                   }})}
                  type="time"
                  class="form-control"
                  placeholder="Enter In Time"
                /> 
           
                {errors["monday.start"] && (<span style={{color:"red"}}>{errors["monday.start"].message}</span>)}
                
              </div>

              <div class="mb-3 col-lg-3">
                <label for="">Out Time</label>

                    <input
                    {...register("monday.end",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"monday.end":e.target.value}))
                   }})}
                    type="time"
                    class="form-control"
                    placeholder="Enter Out Time"
                  />

                {errors["monday.end"] && (<span style={{color:"red"}}>{errors["monday.end"].message}</span>)}
                
              </div>
              <div class="mb-1 mt-4 col-lg-3">
                <button type="button" onClick={()=>{
                    setValue("monday.start",undefined)
                    setValue("monday.end",undefined)
                }} class="btn btn-sm btn-info mt-2">Clear</button>
              </div>
            </div>


            <div class="row mt-3">
                <div class="mb-1 mt-4 col-lg-1">
                    <strong class="mt-2">Tuesday</strong>
                </div>
              
              <div class="mb-3 col-lg-3">
                <label for="">In Time</label>
                   <input
                   {...register("tuesday.start",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"tuesday.start":e.target.value}))
                   }})}
                  type="time"
                  class="form-control"
                  placeholder="Enter In Time"
                /> 
           
                {errors["tuesday.start"] && (<span style={{color:"red"}}>{errors["tuesday.start"].message}</span>)}
                
              </div>

              <div class="mb-3 col-lg-3">
                <label for="">Out Time</label>

                    <input
                    {...register("tuesday.end",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"tuesday.end":e.target.value}))
                   }})}
                    type="time"
                    class="form-control"
                    placeholder="Enter Out Time"
                  />

                {errors["tuesday.end"] && (<span style={{color:"red"}}>{errors["tuesday.end"].message}</span>)}
                
              </div>
              <div class="mb-1 mt-4 col-lg-3">
                <button type="button" onClick={()=>{
                    setValue("tuesday.start",undefined)
                    setValue("tuesday.end",undefined)
                }} class="btn btn-sm btn-info mt-2">Clear</button>
              </div>
            </div>



            <div class="row mt-3">
                <div class="mb-1 mt-4 col-lg-1">
                    <strong class="mt-2">Wednesday</strong>
                </div>
              
              <div class="mb-3 col-lg-3">
                <label for="">In Time</label>
                   <input
                   {...register("wednesday.start",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"wednesday.start":e.target.value}))
                   }})}
                  type="time"
                  class="form-control"
                  placeholder="Enter In Time"
                /> 
           
                {errors["wednesday.start"] && (<span style={{color:"red"}}>{errors["wednesday.start"].message}</span>)}
                
              </div>

              <div class="mb-3 col-lg-3">
                <label for="">Out Time</label>

                    <input
                    {...register("wednesday.end",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"wednesday.end":e.target.value}))
                   }})}
                    type="time"
                    class="form-control"
                    placeholder="Enter Out Time"
                  />

                {errors["wednesday.end"] && (<span style={{color:"red"}}>{errors["wednesday.end"].message}</span>)}
                
              </div>
              <div class="mb-1 mt-4 col-lg-3">
                <button type="button" onClick={()=>{
                    setValue("wednesday.start",undefined)
                    setValue("wednesday.end",undefined)
                }} class="btn btn-sm btn-info mt-2">Clear</button>
              </div>
            </div>



            <div class="row mt-3">
                <div class="mb-1 mt-4 col-lg-1">
                    <strong class="mt-2">Thursday</strong>
                </div>
              
              <div class="mb-3 col-lg-3">
                <label for="">In Time</label>
                   <input
                   {...register("thursday.start",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"thursday.start":e.target.value}))
                   }})}
                  type="time"
                  class="form-control"
                  placeholder="Enter In Time"
                /> 
           
                {errors["thursday.start"] && (<span style={{color:"red"}}>{errors["thursday.start"].message}</span>)}
                
              </div>

              <div class="mb-3 col-lg-3">
                <label for="">Out Time</label>

                    <input
                    {...register("thursday.end",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"thursday.end":e.target.value}))
                   }})}
                    type="time"
                    class="form-control"
                    placeholder="Enter Out Time"
                  />

                {errors["thursday.end"] && (<span style={{color:"red"}}>{errors["thursday.end"].message}</span>)}
                
              </div>
              <div class="mb-1 mt-4 col-lg-3">
                <button type="button" onClick={()=>{
                    setValue("thursday.start",undefined)
                    setValue("thursday.end",undefined)
                }} class="btn btn-sm btn-info mt-2">Clear</button>
              </div>
            </div>



            <div class="row mt-3">
                <div class="mb-1 mt-4 col-lg-1">
                    <strong class="mt-2">Friday</strong>
                </div>
              
              <div class="mb-3 col-lg-3">
                <label for="">In Time</label>
                   <input
                   {...register("friday.start",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"friday.start":e.target.value}))
                   }})}
                  type="time"
                  class="form-control"
                  placeholder="Enter In Time"
                /> 
           
                {errors["friday.start"] && (<span style={{color:"red"}}>{errors["friday.start"].message}</span>)}
                
              </div>

              <div class="mb-3 col-lg-3">
                <label for="">Out Time</label>

                    <input
                    {...register("friday.end",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"friday.end":e.target.value}))
                   }})}
                    type="time"
                    class="form-control"
                    placeholder="Enter Out Time"
                  />

                {errors["friday.end"] && (<span style={{color:"red"}}>{errors["friday.end"].message}</span>)}
                
              </div>
              <div class="mb-1 mt-4 col-lg-3">
                <button type="button" onClick={()=>{
                    setValue("friday.start",undefined)
                    setValue("friday.end",undefined)
                }} class="btn btn-sm btn-info mt-2">Clear</button>
              </div>
            </div>


            <div class="row mt-3">
                <div class="mb-1 mt-4 col-lg-1">
                    <strong class="mt-2">Saturday</strong>
                </div>
              
              <div class="mb-3 col-lg-3">
                <label for="">In Time</label>
                   <input
                   {...register("saturday.start",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"saturday.start":e.target.value}))
                   }})}
                  type="time"
                  class="form-control"
                  placeholder="Enter In Time"
                /> 
           
                {errors["saturday.start"] && (<span style={{color:"red"}}>{errors["saturday.start"].message}</span>)}
                
              </div>

              <div class="mb-3 col-lg-3">
                <label for="">Out Time</label>

                    <input
                    {...register("saturday.end",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"saturday.end":e.target.value}))
                   }})}
                    type="time"
                    class="form-control"
                    placeholder="Enter Out Time"
                  />

                {errors["saturday.end"] && (<span style={{color:"red"}}>{errors["saturday.end"].message}</span>)}
                
              </div>
              <div class="mb-1 mt-4 col-lg-3">
                <button type="button" onClick={()=>{
                    setValue("saturday.start",undefined)
                    setValue("saturday.end",undefined)
                }} class="btn btn-sm btn-info mt-2">Clear</button>
              </div>
            </div>


            <div class="row mt-3">
                <div class="mb-1 mt-4 col-lg-1">
                    <strong class="mt-2">Sunday</strong>
                </div>
              
              <div class="mb-3 col-lg-3">
                <label for="">In Time</label>
                   <input
                   {...register("sunday.start",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"sunday.start":e.target.value}))
                   }})}
                  type="time"
                  class="form-control"
                  placeholder="Enter In Time"
                /> 
           
                {errors["sunday.start"] && (<span style={{color:"red"}}>{errors["sunday.start"].message}</span>)}
                
              </div>

              <div class="mb-3 col-lg-3">
                <label for="">Out Time</label>

                    <input
                    {...register("sunday.end",{onChange:e=>{
                    setDataToUpdate(preVal=>({...preVal,"sunday.end":e.target.value}))
                   }})}
                    type="time"
                    class="form-control"
                    placeholder="Enter Out Time"
                  />

                {errors["sunday.end"] && (<span style={{color:"red"}}>{errors["sunday.end"].message}</span>)}
                
              </div>
              <div class="mb-1 mt-4 col-lg-3">
                <button type="button" onClick={()=>{
                    setValue("sunday.start",undefined)
                    setValue("sunday.end",undefined)
                }} class="btn btn-sm btn-info mt-2">Clear</button>
              </div>
            </div>
          </div>
          <button onMouseEnter={()=>{
            console.log(watch("monday"))
            console.log(watch("monday.start"))
          }} type="submit" className="btn btn-success w-15">
            SAVE
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
