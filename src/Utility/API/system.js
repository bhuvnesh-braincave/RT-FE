import { api, formApi } from "../../Context/AuthContext"

export const getPaymentGateway = async function(){
    

    try {
       let response = await api.get("/paymentGateway") 
       
       return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}



export const updatePaymentGateway = async function(data){
    try {
        let response = await api.put("/paymentGateway",data)

        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
    
}


export const getSetting = async ()=>{
    try {
        let response = await api.get("/system")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateSetting = async (data)=>{
    try {
        let response = api.put("/system",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const getModulesSetting = async ()=>{
    try {
      let response = await api.get("/system/modules")
      return response
    } catch (error) {
        console.log(error)
        return error.response
    }
    

}


export const updateModulesSetting = async (data)=>{
    try {
        let response = await api.put("/system/modules",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const getThemeSetting = async ()=>{
    try {
        let response = await api.get("/themeSettings")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateThemeSetting = async (type,data)=>{
    try {
        console.log(data)
        let response = await formApi.put("/themeSettings/"+type,data)
        return response

    } catch (error) {
        
        console.log(error)
        return error.response
        
    }
}



export const getAllLanguage = async function(){
    try {
        let response = await api.get("/languages")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateLanguage = async (id,data)=>{
    try {
        let response = await api.put("/language/"+id,data)
        return response

    } catch (error) {
        console.log(error)
        return error.response

    }
}


export const addLanguage = async (data)=>{
    try {
        let response = await api.post("/language",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const deleteLanguage = async (id)=>{
    try {
       
        let response = await api.delete("/language/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}