import { api, formApi } from "../../Context/AuthContext"

export const getAllDocuments = async ()=>{
    try {
        let response = await api.get("/document")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addDocument = async (data)=>{
    try {
        let response = await formApi.post("/document",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateDocument = async (id,data)=>{
    try {
        let response = await formApi.put("/document/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteDocument = async (id)=>{
    try {
        let response = await api.delete("/document/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


