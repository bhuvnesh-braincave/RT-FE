import { api, formApi } from "../../Context/AuthContext"

export const addCompany = async (data)=>{
    try {
        let response = await formApi.post("/company",data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


// these companies are for specific company module for description
export const getAllcompany = async ()=>{
    try {
      let response = await api.get("/company")
      return response
    } catch (error) {
        console.log(error)
        return error.response

    }
    
}


export const deleteCompany = async (id)=>{
    try {
        let response = await api.delete("/company/"+id)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}


export const updateCompany = async (id,data)=>{
    try {
        let response = await formApi.put("/company/"+id,data)
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}

// these companies api is for select dropdown

export const  getAllCompanies = async ()=>{
    try {
        let response = await api.get("/companies")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
}