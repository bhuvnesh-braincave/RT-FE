import { api } from "../../Context/AuthContext"

export const getAllAnnouncements = async ()=>{
    try {
        let response = await api.get("/announcement")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addAnnouncement = async (data)=>{
    try {
        let response = await api.post("/announcement",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateAnnouncement = async (id,data)=>{
    try {
        let response = await api.put("/announcement/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteAnnouncement = async (id)=>{
    try {
        let response = await api.delete("/announcement/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


