import { dblClick } from "@testing-library/user-event/dist/click"
import { api } from "../../Context/AuthContext"

export const getAllDepartments = async ()=>{
    try {
        let response = await api.get("/department")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addDepartment = async (data)=>{
    try {
        let response = await api.post("/department",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateDepartment = async (id,data)=>{
    try {
        let response = await api.put("/department/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteDepartment = async (id)=>{
    try {
        let response = await api.delete("/department/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const getDepartmentByCompanyId = async (id)=>{
    try {
        let response = await api.get("/department/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const getDepartmentByLocationId = async (id)=>{
    try {
        let response = await api.get("/location/department/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}