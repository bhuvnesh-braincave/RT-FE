import { api, formApi } from "../../Context/AuthContext"

export const getAllPolicies = async ()=>{
    try {
        let response = await api.get("/policy")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addPolicy = async (data)=>{
    try {
        let response = await formApi.post("/policy",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updatePolicy = async (id,data)=>{
    try {
        let response = await formApi.put("/policy/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deletePolicy = async (id)=>{
    try {
        let response = await api.delete("/policy/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


