import { useState } from "react"
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
const TOp = ()=>{
return (

    <MaterialReactTable
      columns={[]}
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
  );

}



export default function Practice() {

    const [file,setFile] = useState()

    function handleSubmit(){
        fetch("http://localhost:8000/uploads/64fedd36804cc5398e9eef30")
        .then(res=>res.blob())
        .then(blob=>{
            let obj = URL.createObjectURL(blob)
            setFile(obj)
        })
    }



    return(
        <div>
            <button onClick={handleSubmit} className="btn btn-primary">submit</button>
        <img src={file} alt="" />
        </div>
    )
};

