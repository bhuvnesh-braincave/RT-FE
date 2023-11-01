import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import BASEURL from "../Config/Config";



const authContext = createContext()

const initialUser ={
    name:null,
    username:null,
    email:null,
    token:null
}

let api,formApi;

export default function AuthProvider({children}){
   
    const [user,setUser] = useState(initialUser)
    const [permissions,setPermissions] = useState([])

    async function getPermission(){
    try {
        if(user.token) {
            let response = await api.get("/permissions")
            console.log(response)
        if(response.status===200) return setPermissions(response.data.permission)
        else if(response.status===201) return setPermissions([])
        }else setPermissions([])
    } catch (error) {
        console.log(error)
        if(error.response){
            setPermissions([])
        }
    }
    return
    }
useEffect(()=>{
    getPermission()
},[user])



    let baseURL = BASEURL;
    const headers = {
    'x-access-token':user.token,
    'Content-Type': 'application/json',
    }

    api = axios.create({
        baseURL,headers
    })
    const fromHeaders = {
        'x-access-token':user.token,
        "Content-Type": "multipart/form-data",
        }

        formApi = axios.create({
            baseURL,headers:fromHeaders
        })




    return(
        <authContext.Provider value={{user,setUser,initialUser,permissions,setPermissions}}>
            {children}
        </authContext.Provider>
    )
}
const useAuth = ()=>useContext(authContext)


export {authContext,api,formApi,useAuth}
