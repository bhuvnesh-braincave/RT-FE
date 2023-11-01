import { api } from "../../Context/AuthContext"


export const getAllRole = async function(){
    try {
       let response = await api.get("/role")

       if(response.status === (200 || 201)) return response
       else return response
    } catch (error) {
        if(error.response) return error.response
    }
}



export const addRole = async function(data){
    try {
        let response = await api.post("/role",data)

        if(response.data){
            if(response.status===200 && response.data.success) return {success:true,message:response.data.message}
            else return false
        }
    } catch (error) {
        if(error.response){
            if(error.response.status===(400 || 401 || 404)) return error.response
            if(error.response.status === 500) return {success:false,message:error.response.data?.message}
        }
    }
}



export const deleteRole = async (id)=>{
    try {
        let response = await api.delete("/role/"+id)

        return response
    } catch (error) {
        console.log(error)
        return error.response
    }



}



export const getAllRolesName = async id =>{
    try {
        let response = await api.get("/rolesName")
        return response
    } catch (error) {
        console.log(error)
        return error.response
    }
    

} 