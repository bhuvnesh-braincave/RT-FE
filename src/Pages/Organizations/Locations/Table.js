import { useCallback, useEffect, useMemo, useState } from "react";


import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import { deleteLocation, getAllLocation } from "../../../Utility/API/location";
import View from "./View";


export default function Table() {
    const [isOpen,setIsOpen] = useState(false)
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [isViewOpen,setIsView] = useState(false)
    const [viewData,setViewData] = useState(null)
    const [updateData,setUpdateData] = useState(null)


    const getLocations = useCallback(async ()=>{
      
        setIsLoading(true)
        let res = await getAllLocation()

        if(res.status===200){
           
            let arr = res.data.locations.map(ele=>{
                let {address,...restData} = ele
                let obj = {...address,...restData}
                return obj
            })
            

            setData(arr)
        }else{
            console.log(res)
        }
    },[])
     const columns = useMemo(() => [
     {
         accessorKey: 'name',
         header: 'Location Name',                        
       },
         {
             accessorFn: (row)=>`${row.head.fName} ${row.head.lName}`,
             id:"head",
             header: 'Location Head',
           },
         {
             accessorKey: 'city',
             header: 'City',
           },
         {
             accessorKey: 'country',
             header: 'Country',
           },
           {
            accessorFn: (row)=>`${row.addedBy.fName} ${row.addedBy.lName}`,
            id:"addedBy",
               header: 'Added By',
             },  
     ],[])

     useEffect(()=>{
        getLocations()
     },[])

    return(
        <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <h4>List All Locations</h4>
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
                                <th>Location Name</th>
                                <th>Location Head</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Added By</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>HQ Company: KMAC International Pte Ltd</td>
                                <td></td>
                                <td>Singapore</td>
                                <td>Singapore</td>
                                <td>Human Resource</td>
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
                   color="info"
                   onClick={() => {
                    setViewData(row.original)
                    setIsView(true)

                }}
                 >
                   <i className="fas fa-eye"></i>
                 </IconButton>
                   <IconButton
                   color="secondary"
                   onClick={() => {
                    let obj = {...row.original,company:row.original.company?._id,head:row.original.head?._id,country:{value:row.original.country,label:row.original.country}}
                     setUpdateData(obj)
                     setIsOpen(true)
                   }}
                 >
                   <EditIcon />
                 </IconButton>
                   <IconButton
                   color="error"
                   onClick={async () => {
                    let response = await deleteLocation(row.original._id)
                    if(response.status===204){
                        getLocations()
                    }
                   }}
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
 
{isOpen && <AddNew updateData={updateData} setUpdateData={setUpdateData} getLocations={getLocations} show={isOpen} setShow={setIsOpen}/>}
			{isViewOpen && <View viewData={viewData} setViewData={setViewData} show={isViewOpen} setShow={setIsView} />}
                </div>
            </div>
        </div>
     
    </div>
    )
};
