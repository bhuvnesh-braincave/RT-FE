import { useCallback, useEffect, useMemo, useState } from "react";
import AddNew from "./AddNew";					  
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { deleteCompany, getAllcompany } from "../../../Utility/API/company";

export default function Table() {
    const [isOpen,setIsOpen] = useState(false)
    const [data,setData] = useState(false)
    const [updateData,setUpdate] = useState(null)
    const [isLoading,setIsLoading] = useState(false)

    const getCompanies = useCallback(async ()=>{
        setIsLoading(true)
        let res = await getAllcompany()

        if(res.status ===200){
            
            let companies = res.data?.companies.map(ele=>{
                
                const {address,...newObj} = ele
                let obj = {...address,...newObj}
                return obj
            })
            setData(companies)
            setIsLoading(false)
        }else{
            console.log(res)
        }
    },[])

    useEffect(()=>{getCompanies()},[])

     const columns = useMemo(() => [
     {
         accessorKey: 'name',
         header: 'Company Name',
       },
       {
           accessorKey: 'email',
           header: 'Email',
         },
         {                                                   

             accessorKey: 'country',
             header: 'Country',
           },
 {
             accessorFn: (row)=>`${row?.currency.code} (${row?.currency.symbol})`,
             header: 'Currency',
           },
   {
             accessorKey: 'timeZone',
             header: 'Timezone',
           },
                       
     ],[])


    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <h4>List All Companies</h4>
                                        </div>
                                        <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                            <button className="btn btn-primary text-right" onClick={()=>setIsOpen(true)}>Add New</button>
                                        </div>
                                    </div>


                                    <p className="card-title-desc" style={{textAlign: "right"}}>
                                        <button className="btn btn-info text-right">
                                            CSV
                                        </button>
                                        <button className="btn btn-info text-right">
                                            Excel
                                        </button>
                                        <button className="btn btn-info text-right">
                                            PDF
                                        </button>
                                        <button className="btn btn-info text-right">
                                            Print
                                        </button>
                                    </p>
                                    {/* <table id="datatable" className="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Company</th>
                                                <th>Email</th>
                                                <th>City</th>
                                                <th>Country</th>
                                                <th>Currency</th>
                                                <th>Timezone</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="text-wrap">KMAC International PTE LTD <br/> Type: Private Limited Company <br/>
                                                    Contact: 69093822 <br/>
                                                    Website: www.admin.kmac.com</td>
                                                <td className="text-wrap">humanresource@kmac.com.sg</td>
                                                <td> Singapore</td>
                                                <td>Singapore</td>
                                                <td>SGD $</td>
                                                <td>Asia / Singapore</td>


                                                <td>
                                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal2"><i className="fas fa-eye" style={{fontSize:"10px"}}></i></button>
                                                    <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table> */}
                                    

  <MaterialReactTable
 columns={columns}
 data={data || []}
 enableColumnActions={false}
 enableColumnFilters={false}
 enableSorting={false}
 enableTopToolbar={false}
 enableRowActions
             positionActionsColumn="last"
             enableRowNumbers
             rowNumberMode="static"
             renderRowActions={({ row, table }) => (
               <Box
                 sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}
               >
                   <IconButton
                   color="secondary"
                   onClick={() => {
                    let obj = {...row.original,currency:row.original.currency._id,companyType:row.original.companyType._id}
                     setUpdate(obj)
                     setIsOpen(true)
                   }}
                 >
                   <EditIcon />
                 </IconButton>
                   <IconButton
                   color="error"
                   onClick={async () => {await deleteCompany(row.original._id);getCompanies()}}
                 >
                   <DeleteIcon />
                 </IconButton>
               </Box>
             )}
 muiTableProps={{
   sx: {
     border: '1px solid rgba(81, 81, 81, 1)',
   },
 }}
 muiTableHeadCellProps={{
   sx: {
     border: '1px solid rgba(81, 81, 81, 1)',
   },
 }}
 muiTableBodyCellProps={{
   sx: {
     border: '1px solid rgba(81, 81, 81, 1)',
   },
 }}
 /> 
{isOpen && <AddNew getCompanies={getCompanies} updateData={updateData} setUpdate={setUpdate}  show={isOpen} setShow={setIsOpen}/>}
                                    {/* <div className="modal fade" id="myModal">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">

                                              
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add New Company</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Company Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter Company Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Tax Number / EIN</label>
                                                                <input type="text" className="form-control" placeholder="Enter Tax Number"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Company Type</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="CR">Corporation</option>
                                                                    <option value="PR">Partnership</option>
                                                                    <option value="LLC">Limited Liability Company</option>
                                                                    <option value="SLP">Sole Proprietor</option>
                                                                    <option value="PLC">Private Limited Company</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3">
                                                                <label for="">Legal / Trading Name</label>
                                                                <input type="text" className="form-control" placeholder="Enter Legal"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Address Line 1</label>
                                                                <input type="text" className="form-control" placeholder="Enter Address Line"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3">
                                                                <label for="">Resignation Number</label>
                                                                <input type="text" className="form-control" placeholder="Enter Resignation"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="mb-3">
                                                                <label for="">Contact Number</label>
                                                                <input type="text" className="form-control" placeholder="Enter Number"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="">Address Line 2</label>
                                                                <input type="text" className="form-control" placeholder="Enter Addres Line2"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Email</label>
                                                                <input type="email" className="form-control" placeholder="Enter Email Address"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Website</label>
                                                                <input type="text" className="form-control" placeholder="Enter Website Here"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Country</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="WB">West Bengal</option>
                                                                    <option value="UK">Uttarakhand</option>
                                                                    <option value="Bihar">Bihar</option>
                                                                    <option value="MH">Maharastra</option>
                                                                    <option value="DH">Delhi</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">City</label>
                                                                <input type="text" className="form-control" placeholder="Enter City"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">State / Province</label>
                                                                <input type="text" className="form-control" placeholder="Enter State"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Zip Code</label>
                                                                <input type="text" className="form-control" placeholder="Enter Zipcode"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Username</label>
                                                                <input type="text" className="form-control" placeholder="Enter username"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Password</label>
                                                                <input type="password" className="form-control" placeholder="Enter password"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="mb-3">
                                                                <label for="">Company Logo</label>
                                                                <input type="file" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Currency</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="WB">S$SGD</option>


                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Country</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value="WB">(GMT + 8:00) Singapore</option>
                                                                    <option value=""></option>


                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                               
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">SAVE</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <div className="modal fade" id="myModal2">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                
                                                <div className="modal-header">
                                                    <h4 className="modal-title">View Company</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                               
                                                <div className="modal-body">
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Company Name</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>KMAC International Pte Ltd</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Company Type</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>Private Limited Company</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Legal / Trading Name</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Resigstration Number</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>201628976W</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Username</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>KMAC</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Contact Number</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>69093822</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Email Address</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>humanresource@kmac.com.sg</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Website</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>www.admin.kmac.com.sg</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Tax Number / EIN</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Currency</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>SGD $</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Timezone</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>Asia / Singapore</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Address </strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>8 Boon Lay Way #05-10 8@Tradehub 21</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>City </strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>Singapore</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>State / Province </strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Zip Code </strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>609964</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Country </strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>Singapore</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-2">
                                                        <div className="col-md-4">
                                                            <p><strong>Company Logo </strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p></p>
                                                        </div>
                                                    </div>


                                                </div>

                                                
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
    )
};
