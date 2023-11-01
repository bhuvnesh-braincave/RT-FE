
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import LanguageModal from "./LanguageModal";
import { deleteLanguage } from "../../../Utility/API/system";


export default function Table({setShow ,isLoading,isError,data,setToast,getLanguages}) {
  const [showLagModal,setShowLngModal] = useState(false)
  const [language,setLanguage] = useState({})

     const columns = useMemo(() => [
     {
         accessorKey: 'name',
         header: 'Name',
       },
       {
           accessorKey: 'code',
           header: 'Code',
         },
         {
             accessorKey: 'status',
             header: 'Status',   
           },
     ],[])


  return (
    <>
      
{showLagModal && <LanguageModal setToastShow={setShow} getLanguages={getLanguages} setToast={setToast} show={showLagModal} setShow={setShowLngModal} language={language} />}
  <MaterialReactTable
 columns={columns}
 data={data}
 state={{isLoading:isLoading}}
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
                   color="secondary"
                   onClick={() => {
                    setShowLngModal(true);
                    setLanguage(row.original)
                   }}
                 >
                   <i className="dripicons-document-edit"></i>
                 </IconButton>
                   <IconButton
                   color="error"
                   onClick={async () => {
                    let res = await deleteLanguage(row.original._id);
                    if(res.status===204){
                      setToast({message:"delete successfull",bg:"success"})
                      setShow(true)
                      getLanguages()
                    }else{
                      setToast({message:"error occured",bg:"danger"})
                      setShow(true)
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
    </>
  );
}
