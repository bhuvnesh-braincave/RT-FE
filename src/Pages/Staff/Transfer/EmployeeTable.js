import { useCallback, useEffect, useMemo, useState } from "react";					  
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { deleteTransfer, getAllTransfers } from "../../../Utility/API/transfer";
import AddNew from "./AddNew";
import View from "./View";


export default function EmployeeTable() {
    const [isOpen,setIsOpen] = useState(false)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [viewData, setViewData] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
  
    const getTransfers = useCallback(async () => {
      setIsLoading(true);
      let res = await getAllTransfers();
      if (res.status === 200) {
        setData(res.data);
        setIsLoading(false);
      } else {
        console.log(res);
        setIsLoading(false);
        setIsError(true);
      }
    }, []);
  
    useEffect(() => {
      getTransfers();
    }, []);

     const columns = useMemo(() => [
     {
         accessorFn: (row)=>row.employee?`${row.employee.fName} ${row.employee.lName}`:"not available",
         header: 'Employee Name',
       },
       {
         accessorFn: (row) => row.company ? `${row.company.name}`:"not available",
         id: "company",
         header: "Comapany",
       },
        {
            accessorFn:  (row)=>row.date ? row.date.slice(0,10).split("-").reverse().join("/"):"not available",
            id:"date",
            header: 'Transfer Date',
          },
          {
            accessorFn:(row)=>row.status,
            id:"status",
            header:"Status",
            Cell:({renderedCellValue,row})=>(
                <span style={{color:!renderedCellValue?"red":"green"}}>{renderedCellValue?"Success":"Pending"}</span>
            )
          }
                       
     ],[])


    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <h4>List All Transfers</h4>
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
                                    <MaterialReactTable
 columns={columns}
 data={data||[]}
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
                      setViewData(row.original);
                      setIsViewOpen(true);
                    }}
                  >
                    <i className="fas fa-eye"></i>
                  </IconButton>

                   <IconButton
                   color="secondary"
                   onClick={() => {
                    let obj = {
                        id: row.original._id,
                        company: row.original.company?._id,
                        department: row.original.to?.department?._id,
                        subdepartment: row.original.to?.subdepartment?._id,
                        location: row.original.to?.location?._id,
                        description: row.original.description,
                        date:row.original.date?.slice(0,10),
                        employee:row.original.employee?._id
                      };
                      setViewData(obj);
                      setIsOpen(true);
                   }}
                 >
                   <EditIcon />
                 </IconButton>
                   <IconButton
                   color="error"
                   onClick={async () => {
                    let res = await deleteTransfer(row.original._id)
                    if(res.status===204) getTransfers()
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

{isOpen && <AddNew viewData={viewData}
setViewData={setViewData}
getTransfers={getTransfers} show={isOpen} setShow={setIsOpen}/>}

{isViewOpen && (
              <View
                viewData={viewData}
                setViewData={setViewData}
                show={isViewOpen}
                setShow={setIsViewOpen}
              />
            )}
                                    

                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
    )
};
