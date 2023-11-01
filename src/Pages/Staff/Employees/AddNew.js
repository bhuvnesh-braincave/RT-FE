import { Button, Modal } from "react-bootstrap";
import { useSettingContext } from "../../../Context/settingContext";
import { useCallback, useEffect, useState } from "react";
import { addEmployee, getEmployeeByCompany, updateEmployee } from "../../../Utility/API/employee";
import { getAllCompanies } from "../../../Utility/API/company";
import { Controller, useForm } from "react-hook-form";
import { getAllRolesName } from "../../../Utility/API/role";
import { toast } from "react-toastify";
import { getLocationByCompanyId } from "../../../Utility/API/location";
import { getDepartmentByLocationId } from "../../../Utility/API/department";
import { getDesignationsByCompanyId } from "../../../Utility/API/designation";
import { getSubdepartmentByDepartmentId } from "../../../Utility/API/subdepartment";
import { getShiftsByCompanyId } from "../../../Utility/API/shift";

export default function AddNew({ viewData,
  setViewData,
  getEmployees,
  show,
  setShow,}) {
  const { constants } = useSettingContext();
  const [dataToUpdate, setDataToUpdate] = useState();
  const [companies, setCompanies] = useState();
  const [employees, setEmployees] = useState();
  const [locations, setLocations] = useState();
  const [departments, setDepartments] = useState();
  const [subdepartments, setSubdepartments] = useState();
  const [designations,setDesignations] = useState()
  const [roles,setRoles] = useState()
    const [shifts,setShifts] = useState()
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
      if(data.password !== data.cpassword) return toast.error("password and confirm password must be identical")
      let res = await addEmployee(data);
      if (res.status === 201) {
        toast.success("employee added successfully")
        setShow(false);
        getEmployees();
      } else console.log(res);
    } else {
      let res = await updateEmployee(viewData._id, dataToUpdate);
      if (res.status === 204) {
        toast.info("employee updated")
        setShow(false);
        getEmployees();
      } else console.log(res);
    }
  });
  const getCompanies = useCallback(async () => {
    let res = await getAllCompanies();
    if (res.status === 200) {
      setCompanies(res.data);
    }
  }, []);
  const getEmployeesOfCompany = useCallback(async (id) => {
    let res = await getEmployeeByCompany(id);

    if (res.status === 200) {
      let data = res.data
      if(viewData){
        data = data.filter(ele=>viewData._id != ele._id)
      }
      setEmployees(data);
    }else{
      setEmployees([])
    }
  }, []);

const getAllRoles = useCallback(async ()=>{
  try {
    let res = await getAllRolesName()

    if(res.status===200){
      setRoles(res.data)
    }else {
      setRoles([])
    toast.error("error in getting roles")
    }
  } catch (error) {
    console.log(error)
  }
})


const getDepartments = useCallback(async (id)=>{
  try {
    let res = await getDepartmentByLocationId(id)
    if(res.status===200){
      setDepartments(res.data)
    }else {
      console.log(res)
    setDepartments([])
  }
  } catch (error) {
    console.log(error)
  }
})

const getLocations = useCallback(async (id)=>{
  try {
    let res = await getLocationByCompanyId(id)
    if(res.status===200){
      setLocations(res.data)
      // setValue("department",null)
      // setValue('subdepartment',null)
    }else {
      console.log(res)
      setSubdepartments([])
    }
  } catch (error) {
    console.log(error)
  }
})

const getSubdepartments = useCallback(async id=>{
  try {
    let res = await getSubdepartmentByDepartmentId(id)
    if(res.status===200){
      setSubdepartments(res.data)
    }else{
      console.log(res)
      setSubdepartments([])
    }
  } catch (error) {
    console.log(error)
  }
})

const getDesignations = useCallback(async id=>{
  try {
    let res = await getDesignationsByCompanyId(id)
    if(res.status===200){
      setDesignations(res.data)
    }else console.log(res)
  } catch (error) {
    console.log(error)
  }
})

const getShifts = useCallback(async id=>{
  try {
    let res = await getShiftsByCompanyId(id)
    if(res.status===200){
      setShifts(res.data)
    }else{
      setShifts([])
      console.log(res)
    }
  } catch (error) {
    console.log(error)
  }
})

  useEffect(() => {
    getCompanies();
    getAllRoles();
    
    if (viewData) {
      reset(viewData);
    }

    return () => {
      setViewData(null);
    };
  }, []);

  useEffect(() => {
    if (watch("company")) {
      getEmployeesOfCompany(watch("company"));
      getLocations(watch("company"))
      getDesignations(watch("company"))
      getShifts(watch("company"))
    } else {
      setShifts([])
      setDesignations([])
      setEmployees([]);
      setLocations([]);
    }
  }, [watch("company")]);

useEffect(()=>{
  if(watch("location")){
    getDepartments(watch("location"))
  }else setDepartments([])
},[watch("location")])


useEffect(()=>{
  if(watch("department")){
    getSubdepartments(watch("department"))
  }else{
    setSubdepartments([])
  }
},[watch("department")])


  return (
    <Modal size="xl" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Empolyee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data, dataToUpdate);
          })}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">First Name</label>
                    <input
                    {...register("fName",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,fName:e.target.value}))
                    })}
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                    />
                    {errors.fName && <span style={{color:'red'}}>{errors.fName.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Last Name</label>
                    <input
                    {...register("lName",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,lName:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                    />{errors.lName && <span style={{color:'red'}}>{errors.lName.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Company
                    </label>{" "}
                    <br />
                    <Controller name="company" control={control} rules={{required:"this field is required"}} render={({field})=>(
                      <select
                      {...field}
                      onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,company:e.target.value}))
                        setValue("location","")
                        setValue("department","")
                        setValue("designation","")
                        setValue("reportTo","")
                        setValue("subdepartment","")
                        setValue("shift","")
                        field.onChange(e)
                      }}

                    className="form-control select2-templating "
                    style={{ width: "100%" }}
                  >
                    <option value="">Choose</option>
                    {companies?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}
                  </select>
                    )} />
                    {errors.company && <span style={{color:'red'}}>{errors.company.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Location
                    </label>
                    <br />
                    <Controller name="location" control={control} rules={{required:"this field is required"}} render={({field})=>(
                      <select
                    key={watch("company")+"1"}
                    
                        {...field}
                        onChange={e=>{
                        setDataToUpdate(preVal=>({...preVal,location:e.target.value}))
                        setValue("department","")
                        setValue("subdepartment","")
                        field.onChange(e)
                        }}
                   

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose</option>
                      {locations?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}
                    </select>
)} />
                    {errors.location && <span style={{color:'red'}}>{errors.location.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Username</label>
                    <input
                    {...register("username",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,username:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                    />{errors.username && <span style={{color:'red'}}>{errors.username.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Email</label>
                    <input
                    {...register("email",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,email:e.target.value}))
                    })}

                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                    />{errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Date of Birth</label>
                    <input
                    {...register("DOB",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,DOB:e.target.value}))
                    })}

                      type="date"
                      className="form-control"
                      placeholder=""
                    />{errors.DOB && <span style={{color:'red'}}>{errors.DOB.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Contact Number</label>
                    <input
                    {...register("phone",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,phone:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
                    />{errors.phone && <span style={{color:'red'}}>{errors.phone.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Roles
                    </label>
                    <br />
                    <Controller name="role" control={control} rules={{required:"this field is required"}} render={({field})=>(
                      <select
                      {...field}
                        onChange={e=>{
                          setDataToUpdate(preVal=>({...preVal,role:e.target.value}))
field.onChange(e)
                        }}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose</option>
                      {roles?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}
                    </select>
)} />
                    {errors.role && <span style={{color:'red'}}>{errors.role.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Reports To
                    </label>{" "}
                    <br />
                    <Controller name="reportTo" control={control} rules={{required:"this field is required"}} render={({field})=>(
                      <select
                    key={watch("company")+"1"}
                    {...field}
                        onChange={e=>{setDataToUpdate(preVal=>({...preVal,reportTo:e.target.value}))
field.onChange(e)
                        }}
                   

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose</option>
                      {employees?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.fName +" "+ele.lName}</option>))}
                    </select>
)} />
                    {errors.reportTo && <span style={{color:'red'}}>{errors.reportTo.message}</span>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Passport Number</label>
                    <input
                    {...register("passport",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,passport:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter passport number"
                    />{errors.passport && <span style={{color:'red'}}>{errors.passport.message}</span>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Address</label>
                    <input
                    {...register("address",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,address:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                    />{errors.address && <span style={{color:'red'}}>{errors.address.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Immigration Status
                    </label>{" "}
                    <br />
                    <select
                    {...register("immigrationStatus",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,immigrationStatus:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="singaporeCitizen">Singapore Citizen</option>
                      <option value="foreignEmployee">Foreign Employee</option>
                    </select>{errors.immigrationStatus && <span style={{color:'red'}}>{errors.immigrationStatus.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label>PR Effective Date</label>
                    <input
                    {...register("prEffectiveDate",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,prEffectiveDate:e.target.value}))
                    })}

                      type="date"
                      className="form-control"
                      placeholder="Enter pr Effetive date"
                    />{errors.prEffectiveDate && <span style={{color:'red'}}>{errors.prEffectiveDate.message}</span>}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="">Employee ID</label>
                    <input
                    {...register("employeeId",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,employeeId:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Employee ID"
                    />{errors.employeeId && <span style={{color:'red'}}>{errors.employeeId.message}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="">Date Of Joining</label>
                    <input
                    {...register("dateOfJoining",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,dateOfJoining:e.target.value}))
                    })}

                      type="date"
                      className="form-control"
                      placeholder=""
                    />{errors.dateOfJoining && <span style={{color:'red'}}>{errors.dateOfJoining.message}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="">Confirmation Date</label>
                    <input
                    {...register("confirmationDate",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,confirmationDate:e.target.value}))
                    })}

                      type="date"
                      className="form-control"
                      placeholder="Confirmation Date"
                    />{errors.confirmationDate && <span style={{color:'red'}}>{errors.confirmationDate.message}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Main Department
                    </label>
                    <br />
                    <Controller name="department" control={control} rules={{required:"this field is required"}} render={({field})=>(
                      <select
                    key={watch("location")+watch("company")+"1"}
                    {...field}
                        onChange={e=>{setDataToUpdate(preVal=>({...preVal,department:e.target.value}))
                          setValue("subdepartment","")
field.onChange(e)
                        }}
                   

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose</option>
                      {departments?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}
                    </select>
)} />
                    {errors.department && <span style={{color:'red'}}>{errors.department.message}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Sub Department
                    </label>{" "}
                    <br />
                    <Controller name="subdepartment" control={control} rules={{required:"this field is required"}} render={({field})=>(
                      <select
                    key={watch("location")+watch("company")+"1"+watch("department")}
                    {...field}
                        onChange={e=>{setDataToUpdate(preVal=>({...preVal,subdepartment:e.target.value}))
field.onChange(e)
                        }}
                    

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose</option>
                      {subdepartments?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}
                    </select>
)} />
                    {errors.subdepartment && <span style={{color:'red'}}>{errors.subdepartment.message}</span>}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Designation
                    </label>{" "}
                    <br />
                    <Controller name="designation" control={control} rules={{required:"this field is required"}} render={({field})=>(
                      <select
                    key={watch("company")+"1"}
                    {...field}
                        onChange={e=>{setDataToUpdate(preVal=>({...preVal,designation:e.target.value}))
field.onChange(e)
                        }}
                    

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose</option>
                      {designations?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}
                    </select>
)} />
                    {errors.designation && <span style={{color:'red'}}>{errors.designation.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Gender
                    </label>{" "}
                    <br />
                    <select
                    {...register("gender",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,gender:e.target.value}))
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Chose...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>{errors.gender && <span style={{color:'red'}}>{errors.gender.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Office Shift
                    </label>
                    <br />
                    <Controller name="shift" control={control} rules={{required:"this field is required"}} render={({field})=>(
                      <select
                    key={watch("company")+"1"}
                    {...field}
                        onChange={e=>{setDataToUpdate(preVal=>({...preVal,shift:e.target.value}))
field.onChange(e)
                        }}
                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose...</option>
                      {shifts?.map((ele,i)=>(<option key={i} value={ele._id}>{ele.name}</option>))}
                    </select>
)} />
                    {errors.shift && <span style={{color:'red'}}>{errors.shift.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Password</label>
                    <input
                    {...register("password",{
                        required:viewData?false:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,password:e.target.value}))
                    })}

                      type="password"
                      className="form-control"
                      placeholder="password"
                    />{errors.password && <span style={{color:'red'}}>{errors.password.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">Confirm Password</label>
                    <input
                    {...register("cpassword",{
                      required:viewData?false:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,cpassword:e.target.value}))
                    })}

                      type="password"
                      className={watch("password")&& watch("password")===watch('cpassword') ? "form-control is-valid":watch("password")&&watch("cpassword")&&watch("password")!=watch("cpassword")?"form-control is-invalid":"form-control"}
                      placeholder="confirm passowrd"
                    />{errors.cpassword && <span style={{color:'red'}}>{errors.cpassword.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="formrow-firstname-input" className="form-label">
                      Identification Type
                    </label>{" "}
                    <br />
                    <select
                    {...register("identification.name",{
                        required:"this field is required",
                        onChange:e=>{
                          setDataToUpdate(preVal=>({...preVal,identification:{...preVal?.identification,name:e.target.value}}))
                          setValue("identification?.number",null)
                        }
                    })}

                      className="form-control select2-templating "
                      style={{ width: "100%" }}
                    >
                      <option value="">Choose...</option>
                      <option value="NRIC">NRIC</option>
                      <option value="FIN">FIN</option>
                    </select>{errors?.identification?.name && <span style={{color:'red'}}>{errors?.identification?.name.message}</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label for="">NRIC / FIN No.</label>
                    <input
                    {...register("identification.number",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,identification:{...preVal?.identification,number:e.target.value}}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Enter NRIC number"
                    />{errors["identification.number"] && <span style={{color:'red'}}>{errors["identification.number"].message}</span>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Work Permit Number</label>
                    <input
                    {...register("workPermitNumber",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,workPermitNumber:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Work Permit Number"
                    />{errors.workPermitNumber && <span style={{color:'red'}}>{errors.workPermitNumber.message}</span>}
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label for="">Vaccination</label>
                    <input
                    {...register("vaccination",{
                        required:"this field is required",
                        onChange:e=>setDataToUpdate(preVal=>({...preVal,vaccination:e.target.value}))
                    })}

                      type="text"
                      className="form-control"
                      placeholder="Vaccination"
                    />{errors.vaccination && <span style={{color:'red'}}>{errors.vaccination.message}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div><button type="submit" className="btn btn-success w-20">
            SAVE
          </button>
          </form>

        
          
      
      </Modal.Body>
    </Modal>
  );
}
