import { api } from "../../Context/AuthContext"

export const login = async function(data){
    try {
        let response = await api.post("/auth/login",data)
    return response
    } catch (error) {
        return error.response
    }
    
}