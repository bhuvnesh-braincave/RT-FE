import { api } from "../../Context/AuthContext"

export const getAllResignations = async ()=>{
    try {
        let response = await api.get("/resignation")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addResignation = async (data)=>{
    try {
        let response = await api.post("/resignation",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateResignation = async (id,data)=>{
    try {
        let response = await api.put("/resignation/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteResignation = async (id)=>{
    try {
        let response = await api.delete("/resignation/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


