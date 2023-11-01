
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";







export default function Table() {

     const columns = useMemo(() => [
     {
         accessorKey: 'Employee',
         header: 'Employee',                                      
                                              
       },
       {
           accessorKey: 'Company',
           header: 'Company',                                      
                                                
         },
         {
             accessorKey: 'ExitType',
             header: 'ExitType',                                      
                                                  
           },
           {
               accessorKey: 'ExitDate',
               header: 'ExitDate',                                      
                                                    
             },
             {
                 accessorKey: 'ExitInterview',
                 header: 'ExitInterview',                                      
                                                      
               },


     ],[])


  return (
    <>
      

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
    </>
  );
}
