import { api, formApi } from "../../Context/AuthContext"

export const getAllShifts = async ()=>{
    try {
        let response = await api.get("/shift")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addShift = async (data)=>{
    try {
        let response = await api.post("/shift",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateShift = async (id,data)=>{
    try {
        let response = await api.put("/shift/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteShift = async (id)=>{
    try {
        let response = await api.delete("/shift/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const getShiftsByCompanyId = async id=>{
    try {
        let response = await api.get("/shift/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}