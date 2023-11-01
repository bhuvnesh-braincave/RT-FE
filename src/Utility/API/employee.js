import { api } from "../../Context/AuthContext"

export const getEmployeeByCompany = async (id)=>{
    try {
        let response = await api.get("/employee/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const getAllEmployees = async ()=>{
    try {
        let response = await api.get("/employee")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addEmployee = async (data)=>{
    try {
        let response = await api.post("/employee",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateEmployee = async (id,data)=>{
    try {
        let response = await api.put("/employee/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteEmployee = async (id)=>{
    try {
        let response = await api.delete("/employee/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const getEmployeeDetailById = async id=>{
    try {
        let response = await api.get("/company/employee/"+id)

        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}