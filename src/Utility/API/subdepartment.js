import { api } from "../../Context/AuthContext"

export const getAllSubdepartments = async ()=>{
    try {
        let response = await api.get("/subdepartment")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addSubdepartment = async (data)=>{
    try {
        let response = await api.post("/subdepartment",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateSubdepartment = async (id,data)=>{
    try {
        let response = await api.put("/subdepartment/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteSubdepartment = async (id)=>{
    try {
        let response = await api.delete("/subdepartment/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const getSubdepartmentByDepartmentId = async (id)=>{
    try {
        let response = await api.get("/subdepartment/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}