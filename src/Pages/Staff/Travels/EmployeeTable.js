import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { deleteTravel, getAllTravels } from "../../../Utility/API/travel";
import AddNew from "./AddNew";
import View from "./View";
import { useAuth } from "../../../Context/AuthContext";



export default function EmployeeTable() {

    const [isOpen,setIsOpen] = useState(false)
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [viewData, setViewData] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);
    const {permissions} = useAuth()


    const havePermission = useCallback((type,status)=>{
        if(type==="edit"){
            if(status!="Pending") return false
            else return true
        }else if(type==="delete"){
            if(status!="Pending") return false
            else return true
        }else if(type==="view"){
            return true
        }
    },[permissions])
    const getTravels = useCallback(async () => {
      setIsLoading(true);
      let res = await getAllTravels();
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
        getTravels();
    }, []);

    const columns = useMemo(() => [
        {
            accessorFn: (row)=>`${row.employee.fName} ${row.employee.lName}`,
            id:"employee",
            header: 'Employee Name',
            Cell:({renderedCellValue,row})=>(
                <Box sx={{
                    display:"flex",
                    flexDirection:"column"
                }}>
                    <div>{renderedCellValue}</div><br/>
                    <div style={{color:row.original.status==="Pending"?"red":"green"}}>{`${row.original.status}`}</div>
                </Box>
            )
          },
        {
            accessorFn: (row)=>row.company?row.company.name:"NA",
            id:"company",
            header: 'Company',                                      

          },
          {
              accessorKey: "place",
              header: 'Place of Visit',                                      

            },
          {
              accessorFn: row=>row.start?row.start.slice(0,10).split("-").reverse().join("/"):"not available",
              id:"start",
              header: 'Start Date',                                      

            },
            {
                accessorFn: row=>row.end?row.end.slice(0,10).split("-").reverse().join("/"):"not available",
                id:"end",
                header: 'End Date',

              },
   
   
        ],[])



    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <h4>List All Travels</h4>
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
                 {havePermission("view") && <IconButton
                    color="info"
                    onClick={() => {
                      setViewData(row.original);
                      setIsViewOpen(true);
                    }}
                  >
                    <i className="fas fa-eye"></i>
                  </IconButton>}

                   {havePermission("edit",row.original.status) && <IconButton
                   color="secondary"
                   onClick={() => {
                    let obj = {
                        ...row.original,
                        company: row.original.company?._id,
                        start:row.original.start?.slice(0,10),
                        end:row.original.end?.slice(0,10),
                        employee:row.original.employee?._id,
                        travelType:row.original.travelType?._id
                      };
                      setViewData(obj);
                      setIsOpen(true);
                   }}
                 >
                   <EditIcon />
                 </IconButton>}
                {havePermission("delete",row.original.status)&&<IconButton
                color="error"
                onClick={async () => {
                let res = await deleteTravel(row.original._id)
                if(res.status===204) getTravels()
                }}
                >
                <DeleteIcon />
                </IconButton>}
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
getTravels={getTravels} show={isOpen} setShow={setIsOpen}/>}

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
                    </div>
    )
};
