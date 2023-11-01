import { api} from "../../Context/AuthContext"

export const getAllTransfers= async ()=>{
    try {
        let response = await api.get("/transfer")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const addTransfer = async (data)=>{
    try {
        let response = await api.post("/transfer",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateTransfer = async (id,data)=>{
    try {
        let response = await api.put("/transfer/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const deleteTransfer = async (id)=>{
    try {
        let response = await api.delete("/transfer/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


