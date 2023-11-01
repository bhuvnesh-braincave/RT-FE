import { api } from "../../Context/AuthContext"

export const getAllPromotions = async ()=>{
    try {
        let response = await api.get("/promotion")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addPromotion = async (data)=>{
    try {
        let response = await api.post("/promotion",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updatePromotion = async (id,data)=>{
    try {
        let response = await api.put("/promotion/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deletePromotion = async (id)=>{
    try {
        let response = await api.delete("/promotion/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


