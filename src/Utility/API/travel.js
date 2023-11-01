import { api } from "../../Context/AuthContext"

export const getAllTravels = async ()=>{
    try {
        let response = await api.get("/travel")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addTravel = async (data)=>{
    try {
        let response = await api.post("/travel",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateTravel = async (id,data)=>{
    try {
        let response = await api.put("/travel/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteTravel = async (id)=>{
    try {
        let response = await api.delete("/travel/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


