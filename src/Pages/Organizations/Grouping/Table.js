import { useCallback, useEffect, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import AddNew from "./AddNew";
import { deleteGrouping, getAllGroupings } from "../../../Utility/API/grouping";
import View from "./View";

export default function Table() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const getGroupings = useCallback(async () => {
    setIsLoading(true);
    let res = await getAllGroupings();
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
    getGroupings();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Grouping Name",
      },
      {
        accessorFn: (row) => `${row.company.name}`,
        id: "company",
        header: "Comapany",
      },
      {
        accessorFn: (row) => `${row.department.name}`,
        id: "department",
        header: "Department",
      },
      {
        accessorFn: (row) => `${row.subdepartment.name}`,
        id: "subdepartment",
        header: "Subepartment",
      },
    ],
    []
  );

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <h4>List All Grouping</h4>
              </div>
              <div className="col-md-6 mb-3" style={{ textAlign: "right" }}>
                <button
                  className="btn btn-primary text-right"
                  onClick={() => setIsOpen(true)}
                >
                  Add New
                </button>
              </div>
            </div>

            <p className="card-title-desc" style={{ textAlign: "right" }}>
              <button className="btn btn-info text-right">CSV</button>
              <button className="btn btn-info text-right">Excel</button>
              <button className="btn btn-info text-right">PDF</button>
              <button className="btn btn-info text-right">Print</button>
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
                <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
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
                        company: row.original.company._id,
                        department: row.original.department._id,
                        subdepartment: row.original.subdepartment._id,
                        name: row.original.name,
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
                      let res = await deleteGrouping(row.original._id);
                      if (res.status === 204) getGroupings();
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

            {isOpen && (
              <AddNew
                viewData={viewData}
                setViewData={setViewData}
                getGroupings={getGroupings}
                show={isOpen}
                setShow={setIsOpen}
              />
            )}

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
  );
}
