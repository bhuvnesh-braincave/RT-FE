import { Modal } from "react-bootstrap";
import MaterialReactTable from "material-react-table";
import { useCallback, useMemo, useState } from "react";
import { updateLanguage } from "../../../Utility/API/system";

export default function LanguageModal({setToastShow,getLanguages, show, setShow, language,setToast }) {
    const [updateData,setUpdateData] = useState(null)
const handleSubmit = useCallback(async (id,data)=>{
  if(!data) return
  let res = await updateLanguage(id,data)
  if(res.status ===204){
    setShow(false)
    setUpdateData(null)
    setToast({message:"update successfull",bg:"success"})
    setToastShow(true)
    getLanguages()
  }else{

  }
  
})
  const columns = useMemo(
    () => [
      {
        accessorKey: "key",
        header: "key",
        enableEditing:false
      },
      {
        accessorKey: "value",
        header: "value",
      },
    ],
    []
  );
  let array = useMemo(() => Object.keys(language?.language), []);

  const [tableData, setTableData] = useState(()=>array.map((ele) => {
    return {
      key: ele,
      value: language.language[ele] || "",
    };
  }))

  const handleSaveCell = (row,cell, value) => {
    //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here
    tableData[cell.row.index][cell.column.id] = value;
    //send/receive api updates here
   
    setUpdateData(preVal=>({...preVal,[row.original.key]:value}))
    setTableData([...tableData]); //re-render with new data
  };

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <MaterialReactTable
          columns={columns}
          data={tableData}
          enableColumnActions={false}
          enableColumnFilters={false}
          enableSorting={false}
          enableTopToolbar={false}
          editingMode="cell"
        enableEditing
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
        muiTableBodyCellEditTextFieldProps={({ row,cell }) => ({
        //onBlur is more efficient, but could use onChange instead
        onBlur: (event) => {
          handleSaveCell(row,cell, event.target.value);

        },
      })}
      renderBottomToolbarCustomActions={()=>(
        <div className="textAlign-right">
            <button onClick={()=>handleSubmit(language._id,updateData)} className="btn btn-success">Save</button>
        </div>
      )}
        />
      </Modal.Body>
    </Modal>
  );
}
