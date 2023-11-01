import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useMemo, useState } from "react";
import AddNew from "./AddNew";

export default function Accommodation() {
  const [isOpen,setIsOpen] = useState(false)
  const columns = useMemo(
    () => [
      {
        accessorKey: "Title",
        header: "Title",
      },
      {
        accessorKey: "Address",
        header: "Address",
      },
      {
        accessorKey: "Period",
        header: "Period",
      },
      {
        accessorKey: "AnnualValue",
        header: "Annual Value",
      },
      {
        accessorKey: "Furnished",
        header: "Furnished",
      },
      {
        accessorKey: "Rent",
        header: "Rent",
      },
    ],
    []
  );

  return (
    <>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h4>List All Accommodations</h4>
        </div>
        <div className="col-md-6 mb-3" style={{ textAlign: "right" }}>
          <button
            className="btn btn-primary text-right"
            onClick={()=>setIsOpen(true)}
          >
            Add New
          </button>
        </div>
      </div>

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
          <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
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
              onClick={() => {
                
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}
        muiTableProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, 1)",
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, 1)",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            border: "1px solid rgba(81, 81, 81, 1)",
          },
        }}
      />
      {isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}

    </>
  );
}
