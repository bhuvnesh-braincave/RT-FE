import { useMemo } from "react";
					  
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";


export default function Table2() {
    const columns = useMemo(() => [
             {
                 accessorKey: 'Employee',
                 header: 'Employee',
               },
               {
                   accessorKey: 'Accommodation',
                   header: 'Accommodation',
                 },
                 {
                     accessorKey: 'Utilities&Housekeeping',
                     header: 'Utilities & Housekeeping',
                   },
         {
                     accessorKey: 'HotelAccommodation',
                     header: 'Hotel Accommodation',
                   },
                   {
                       accessorKey: 'Others',
                       header: 'Others',
                     },
              
             ],[])
  return (
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6 mb-3">
                <h4>List All Employee Appendix 8A form for 2023</h4>
              </div>
            </div>

            <p class="card-title-desc" style={{ textAlign: "right" }}>
              <button class="btn btn-info text-right">CSV</button>
              <button class="btn btn-info text-right">Excel</button>
              <button class="btn btn-info text-right">PDF</button>
              <button class="btn btn-info text-right">Print</button>
            </p>
            {/* <table
              id="datatable"
              class="table display table-bordered dt-responsive nowrap w-100"
            >
              <thead>
                <tr>
                  <th>Employee </th>
                  <th>Accommodation</th>
                  <th>Utilities & Housekeeping</th>
                  <th>Hotel Accommodation</th>
                  <th>Others</th>
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
                    <button
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      <i class="fas fa-edit" style={{ fontSize: "10px" }}></i>
                    </button>
                    <button class="btn btn-danger">
                      <i
                        class="fas fa-trash-alt"
                        style={{ fontSize: "10px" }}
                      ></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table> */}
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
  );
}
