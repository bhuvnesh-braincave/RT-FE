import { api } from "../../Context/AuthContext"

export const getAllDesignations = async ()=>{
    try {
        let response = await api.get("/designation")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addDesignation = async (data)=>{
    try {
        let response = await api.post("/designation",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateDesignation = async (id,data)=>{
    try {
        let response = await api.put("/designation/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteDesignation = async (id)=>{
    try {
        let response = await api.delete("/designation/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const getDesignationsByCompanyId = async id=>{
    try {
        let response = await api.get("/designation/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}