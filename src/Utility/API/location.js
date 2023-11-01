import { api } from "../../Context/AuthContext"

export const getAllLocation = async ()=>{
    try {
        
        let response = await api.get("/location")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
    

}


export const addLocation = async (data)=>{
    try {
        let response = await api.post("/location",data)

        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const deleteLocation = async (id)=>{
    try {
        let response = await api.delete("/location/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateLocation = async (id,data)=>{
    try {
        let response = await api.put("/location/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const getLocationByCompanyId = async (id)=>{
    try {
        let response = await api.get("/location/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}