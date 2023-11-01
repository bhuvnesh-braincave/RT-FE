     import MaterialReactTable from "material-react-table";
 import { Box, IconButton } from "@mui/material";
 import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import ReportFilter from "./ReportFilter";

export default function Table() {
    const [isOpen,setIsOpen] = useState(false)

 const columns = useMemo(() => [
     {
      
         accessorKey: 'ID',
         header: 'ID',                                      
                                              
       },

         {                                                   

             accessorKey: 'Name',
             header: 'Name',
           },
         {                                                   

             accessorKey: 'Company',
             header: 'Company',
           },
     {
         accessorKey: 'Email',
         header: 'Email',                                      
                                              
       },

         {                                                   

             accessorKey: 'Department',
             header: 'Department',
           },
         {                                                   

             accessorKey: 'Designation',
             header: 'Designation',
           },
           {                                                   
  
               accessorKey: 'Status',
               header: 'Status',
             },
     ],[])
    return(
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h4>View Employees Report</h4>
                            </div>
                            <div class="col-md-6 mb-3" style={{textAlign: "right"}}>
                                <button class="btn btn-primary text-right" onClick={()=>setIsOpen(true)}>Filter</button>
                            </div>
                        </div>


                        <p class="card-title-desc" style={{textAlign: "right"}}>
                            <button class="btn btn-info text-right">
                                CSV
                            </button>
                            <button class="btn btn-info text-right">
                                Excel
                            </button>
                            <button class="btn btn-info text-right">
                                PDF
                            </button>
                            <button class="btn btn-info text-right">
                                Print
                            </button>
                        </p>
                        


  <MaterialReactTable
 columns={columns}
 data={[]}
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
                     table.setEditingRow(row);
                   }}
                 >
                   <EditIcon />
                 </IconButton>
                   <IconButton
                   color="error"
                   onClick={() => {}}
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

{isOpen && <ReportFilter show={isOpen} setShow={setIsOpen}/>}
                        {/* <table id="datatable" class="table display table-bordered dt-responsive nowrap w-100">
                            <thead>
                                <tr>
                                    <th>ID  </th>
                                    <th>Name</th>
                                    <th>Company</th> 
                                    <th>Email</th>  
                                    <th>Department</th>
                                    <th>Designation</th>
                                    <th>Status</th>                                                                                  
                                    <th>Action</th>


                                </tr>
                            </thead>

                            <tbody>
                                <tr>                                              
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                        <button class="btn btn-danger"><i class="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table> */}
                        {/* <!-- The Modal --> */}
                        <div class="modal fade" id="myModal">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">

                                {/* <!-- Modal Header --> */}
                                <div class="modal-header">
                                    <h4 class="modal-title">Report Filters</h4>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                {/* <!-- Modal body --> */}
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="mb-3">
                                                <label for="formrow-firstname-input" class="form-label">Company</label> <br/>
                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="All">All </option>
                                                    <option value="Super Admin">KMAC International Pte Ltd</option>                                                                                                                          

                                                </select>
                                            </div>
                                        </div>   
                                        <div class="col-md-3">
                                            <div class="mb-3">
                                                <label for="formrow-firstname-input" class="form-label">Department</label> <br/>
                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="All Department">All Department</option>                                                                                                             

                                                </select>
                                            </div>
                                        </div> 
                                        <div class="col-md-3">
                                            <div class="mb-3">
                                                <label for="formrow-firstname-input" class="form-label">Designation</label> <br/>
                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                    <option value="All Designation">All Designation</option>                                                                                                                          

                                                </select>
                                            </div>
                                        </div> 
                                        <div class="col-md-3">
                                            <div class="mt-4">
                                                <button class="btn btn-primary btn-block w-100">GET</button>
                                            </div>
                                        </div>                                                                                             

                                        


                                    </div>
                                </div>

                                {/* <!-- Modal footer --> */}
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success">Get</button>
                                </div>

                            </div>
                        </div>
                    </div>


                    </div>
                </div>
            </div>
            {/* <!-- end col --> */}
        </div>
    )
};
