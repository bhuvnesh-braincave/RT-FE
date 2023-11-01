import { api } from "../../Context/AuthContext"

export const getConstant = async function(){

    try {
        let response = await api.get("/constant")
        
        return response
    } catch (error) {
        return error.response
    }
    
}


export const addConstant = async function(constant,data){
    try {
        let response = await api.post("/constant/"+constant,data)

        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateConstant = async function(constant,id,data){
    try {
        let response = await api.put("/constant/"+constant+"/"+id,data)

        return response
    } catch (error) {
        console.log(error)

        return error.response
    }
}




export const deleteConstant = async function(constant,id){

    try {
      let response = await api.delete("/constant/"+constant+"/"+id)
      return response
    } catch (error) {
        return error.response
    }
    
}




export const getAConstant = async function(type){
    try {
        let response = await api.get("/constant/"+type)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
    
}