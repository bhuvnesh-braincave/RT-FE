import { useMemo, useState } from "react";
import AddNew from "./AddNew";
import { Card } from "react-bootstrap";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { deleteConstant } from "../../../../../Utility/API/constant";

export default function Claim({data,getAll,setIsError}) {
    const [isOpen,setIsOpen] = useState(false)
    let Data = data?.map(ele=>({
      id:ele._id,
      name:ele.name
    })) || []


    async function handleDelete(doc,id){
      let res = await deleteConstant(doc,id)
      if(res.status === 204){
        getAll()
      }else{
        setIsError(true)
        setTimeout(()=>setIsError(false),2000)
      }
    }
    const columns = useMemo(() => [
        {
            accessorKey: 'name',
            header: 'Claim Type',
          },
          
        ],[])

    return (
        <Card>
          <Card.Body>
      <div class="tab-pane">
        <h4>List All Claim Type</h4>
        <p class="card-title-desc" style={{ textAlign: "right" }}>
          <button
            class="btn btn-primary text-right"
            onClick={()=>setIsOpen(true)}
          >
            Add New Claim Type
          </button>
        </p>
        <MaterialReactTable
      columns={columns}
      data={Data}
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
                        onClick={() => {handleDelete("claim",row.original.id)}}
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
       {isOpen ? <AddNew getAll={getAll} show={isOpen} setShow={setIsOpen} /> :null}
      </div></Card.Body></Card>
    );
  }
  