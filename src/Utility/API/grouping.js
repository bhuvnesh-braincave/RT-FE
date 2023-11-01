import { api } from "../../Context/AuthContext"

export const getAllGroupings = async ()=>{
    try {
        let response = await api.get("/grouping")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addGrouping = async (data)=>{
    try {
        let response = await api.post("/grouping",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateGrouping = async (id,data)=>{
    try {
        let response = await api.put("/grouping/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteGrouping = async (id)=>{
    try {
        let response = await api.delete("/grouping/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


