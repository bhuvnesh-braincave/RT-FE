import { useCallback, useEffect, useState } from "react";
import MainPage from "../../../Components/Common/MainPage";
import { getPaymentGateway, updatePaymentGateway } from "../../../Utility/API/system";

export default function PaymentGateway() {
    const [isLoading,setIsLoading] = useState(false)
    const [data,setData] = useState()
    const [updatedData,setUpdatedData] = useState()
    const fetchData = useCallback(async ()=>{
        setIsLoading(true)
        let res = await getPaymentGateway()

        if(res.status===200 && res.data?.success){
            setData(res.data.paymentGateway)
            setIsLoading(false)
        }else{
            setIsLoading(false)
            setData({})
        }
    },[])

    const handleSubmit = useCallback(async ()=>{
        if(!updatedData) return
        if(updatedData?.paypalSandbox?.present) updatedData.paypalSandbox.present = updatedData.paypalSandbox.present ==="true" ? true : false
        if(updatedData?.paypalSandbox?.status) updatedData.paypalSandbox.status = updatedData.paypalSandbox.status ==="true" ? true : false
        if(updatedData.active) updatedData.active = updatedData.active ==="true" ? true :false

        console.log(updatedData)
        let res =await updatePaymentGateway(updatedData)

        if(res.status === 204){
            fetchData();
            setUpdatedData(null);
        }else{
            console.log(res)
        }
    })

    useEffect(()=>{
        fetchData()
    },[])
    return(
        <MainPage title={"Payment Gateway"}>
            <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-body">
                                        <form action="">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label>Paypal Email</label>
                                                        <input onChange={e=>{
                                                            setUpdatedData(preVal=>({...preVal,email:e.target.value}))
                                                        }} value={updatedData?.email || data?.email || ""} disabled={!data} type="text" class="form-control" placeholder="Enter your paypal email here"/>
                                                    </div>

                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label"> Paypal Sandbox</label>
                                                        <select onChange={e=>{
                                                            setUpdatedData(preVal=>({...preVal,paypalSandbox:{...preVal?.paypalSandbox,present:e.target.value}}))
                                                        }} value={updatedData?.paypalSandbox?.present || data?.paypalSandbox?.present || false} disabled={!data} class="form-control select2-templating ">
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label"> Active</label>
                                                        <select onChange={e=>{
                                                            setUpdatedData(preVal=>({...preVal,paypalSandbox:{...preVal?.paypalSandbox,status:preVal?.paypalSandbox.present ? e.target.value :false}}))
                                                        }} value={updatedData?.paypalSandbox?.status || data?.paypalSandbox?.status || false } disabled={!data } class="form-control select2-templating ">
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label for="">Paypal IPN URL</label>
                                                        <input onChange={e=>{
                                                            setUpdatedData(preVal=>({...preVal,paypalIpnUrl:e.target.value}))
                                                        }} value={updatedData?.paypalIpnUrl || data?.paypalIpnUrl || ""} disabled={!data} type="text" class="form-control" placeholder="Enter your paypal IPN URL"/>
                                                    </div>

                                                </div>
                                                <h4>Stripe Information</h4>
                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label for="">Stripe Secret Key</label>
                                                        <input onChange={e=>{
                                                            setUpdatedData(preVal=>({...preVal,stripeSecretKey:e.target.value}))
                                                        }} value={updatedData?.stripeSecretKey || data?.stripeSecretKey || ""} disabled={!data} type="text" class="form-control" placeholder="Enter your stripe secret key"/>
                                                    </div>

                                                </div>
                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label for="">Stripe Publishable Key</label>
                                                        <input onChange={e=>{
                                                            setUpdatedData(preVal=>({...preVal,stripePublishableKey:e.target.value}))
                                                        }} value={updatedData?.stripePublishableKey || data?.stripePublishableKey || ""} disabled={!data} type="text" class="form-control" placeholder="Enter your publishable key "/>
                                                    </div>

                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="formrow-firstname-input" class="form-label"> Active</label>
                                                        <select onChange={e=>{
                                                            setUpdatedData(preVal=>({...preVal,active:e.target.value}))
                                                        }} value={updatedData?.active || data?.active || false} disabled={!data} class="form-control select2-templating ">
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <h4>Online Payment Receive Account</h4>
                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label for="formrow-firstname-input" class="form-label"> Account</label>
                                                        <select onChange={e=>{
                                                            setUpdatedData(preVal=>({...preVal,onlinePaymentReceiveAccount:e.target.value}))
                                                        }} value={updatedData?.onlinePaymentReceiveAccount || data?.onlinePaymentReceiveAccount || ""} disabled={!data} class="form-control select2-templating ">
                                                            <option value="">Choose Account Type</option>
                                                            <option value="saving">Saving</option>
                                                            <option value="current">Current</option>

                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                            {updatedData ? <div className="">
                                                <button onClick={handleSubmit} type="button" class="btn btn-primary waves-effect waves-light w-20">SAVE</button>
                                            <button onClick={()=>setUpdatedData(null)} type="button" class="btn btn-danger waves-effect waves-light w-20">SAVE</button>
                                            </div> : null}
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
        </MainPage>
    )
};
