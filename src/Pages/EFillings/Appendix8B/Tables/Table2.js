					  
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo } from "react";

export default function Table2() {
    const columns = useMemo(() => [
             {
                 accessorKey: 'EEBR',
                 header: 'Total Gross Amount of Gains (EEBR)',
               },
               {
                   accessorKey: 'ESIR',
                   header: 'Total Gross Amount of Gains (ESIR)',
                 },
                 {
                     accessorKey: 'ESIR',
                     header: 'Total Gross Amount of Gains (ESIR)',
                   },
         {
                     accessorKey: 'ESIR',
                     header: 'Total Gross Amount of Gains (ESIR)',
                   },
              
             ],[])

    return(
        <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-md-6">
                                            <h4>Employees Timesheet</h4>
                                            <small>For the month of June 2023</small>
                                        </div>
                                        <div class="col-md-6" style={{textAlign: "right"}}>
                                            <button class="btn btn-info">CSV</button>
                                            <button class="btn btn-info">Excel</button>
                                            <button class="btn btn-info">PDF</button>
                                            <button class="btn btn-info">CSV</button>
                                        </div>
                                    </div>
                                    {/* <div class="attendance-table" style={{overflow:"scroll"}}>
                                        <table id="datatable" class="table display attendance-table table-bordered nowrap" style={{width: "1400px"}}>
                                            <thead>
                                                <tr>
                                                    <th>Employee</th>
                                                    <th>Total Gross Amount of Gains (EEBR)</th>
                                                    <th>Total Gross Amount of Gains (ESIR) SMEs</th>
                                                    <th>Total Gross Amount of Gains (ESIR) CORPs </th>
                                                    <th>Total Gross Amount of Gains (ESIR) START-UPs</th>
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
                                                    <td>
                                                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                        <button class="btn btn-danger"><i class="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> */}
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
                                    
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
    )
};
