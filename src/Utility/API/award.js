import { api, formApi } from "../../Context/AuthContext"

export const getAllAwards = async ()=>{
    try {
        let response = await api.get("/award")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addAward = async (data)=>{
    try {
        let response = await formApi.post("/award",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateAward = async (id,data)=>{
    try {
        let response = await formApi.put("/award/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteAward = async (id)=>{
    try {
        let response = await api.delete("/award/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


