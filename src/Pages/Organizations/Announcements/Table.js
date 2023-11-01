import { useCallback, useEffect, useMemo, useState } from "react";					  
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import { deleteAnnouncement, getAllAnnouncements } from "../../../Utility/API/announcement";
import View from "./View";

export default function Table() { 
    const [isOpen,setIsOpen] = useState(false)
    const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const getAnnouncements = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllAnnouncements();
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
    getAnnouncements();
  }, []);

     const columns = useMemo(() => [
     {
         accessorKey: 'title',
         header: 'Title',
       },
       {
           accessorFn: (row)=>row.company ? `${row.company.name}` :"not available" ,
           header: 'Company',
         },
         {
             accessorFn:  (row)=>row.start ? row.start.slice(0,10).split("-").reverse().join("/"):"not available",
             id:"start",
             header: 'Start Date',
           },
 {
             accessorFn:  (row)=>row.end ? row.end.slice(0,10).split("-").reverse().join("/"):"not available",
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
                                            <h4>List All Announcements</h4>
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
                                                <th>Title</th>
                                                <th>Company</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Action</th>


                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Title Goes here</td>
                                                <td>KMAC International Pte Ltd</td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                    <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table> */}
                                    

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
                     let obj = {...row.original,company:row.original.company._id,department:row.original.department._id,location:row.original.location._id,start:row.original.start.slice(0,10),end:row.original.end.slice(0,10)}
                     setViewData(obj)
                     setIsOpen(true)
                   }}
                 >
                   <EditIcon />
                 </IconButton>
                   <IconButton
                   color="error"
                   onClick={async () => {
                    let res = await deleteAnnouncement(row.original._id)
                    if(res.status===204) getAnnouncements()
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
getAnnouncements = {getAnnouncements} show={isOpen} setShow={setIsOpen}/>}
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
