import { Modal } from "react-bootstrap";
import TreeCheckbox from "./TreeCheckbox";
import { useState } from "react";
import { addRole } from "../../../Utility/API/role";

let data = [
  {
    value: "All",
    label: "Resourses",
    children: [
      {
        value: "staff",
        label: "Staff",
        children: [
          {
            value: "employee",
            label: "Employees",
            children: [
              { value: "edit", label: "Edit" },
              { value: "delete", label: "Delete" },
              { value: "update", label: "Update" },
            ],
          },
          {
            value: "employee banefit",
            label: "Employee Benefit",
            children: [
              { value: "edit1", label: "Edit" },
              { value: "delete1", label: "Delete" },
              { value: "update1", label: "Update" },
            ],
          },
          {
            value: "staff directory",
            label: "Staff Directory",
            children: [
              { value: "edit2", label: "Edit" },
              { value: "delete2", label: "Delete" },
              { value: "update2", label: "Update" },
            ],
          },
        ],
      },
      {
        value: "core hr",
        label: "Core HR",
        children: [
          {
            value: "award",
            label: "Award",
            children: [
              { value: "edit5", label: "Edit" },
              { value: "delete5", label: "Delete" },
              { value: "update5", label: "Update" },
            ],
          },
          {
            value: "transfer",
            label: "Transfer",
            children: [
              { value: "edit3", label: "Edit" },
              { value: "delete3", label: "Delete" },
              { value: "update3", label: "Update" },
            ],
          },
          {
            value: "travels",
            label: "Travels",
            children: [
              { value: "edit4", label: "Edit" },
              { value: "delete4", label: "Delete" },
              { value: "update4", label: "Update" },
            ],
          },
        ],
      },
    ],
  },
];

export default function AddNewRole({ show, setShow,getRoles }) {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(["10"]);

  async function handleSubmit(e){
    e.preventDefault();
    if(!name || !name.length) return
    try {
        let response = await addRole({name:name,permission:checked})

        if(response.success){
            setShow(false)
            setName("")
            setChecked([])
            getRoles()
        }
    } catch (error) {
        console.log(error)
    }

}

  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Role</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col-md-6 mb-2">
            <label for="">Role Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder=""
            />
          </div>
          <div className="col-md-6 mb-2">
            <label for="">Select Access</label> <br />
            <select
              className="form-control select2-templating"
              style={{ width: "100%" }}
            >
              <option value="cmenu">Custom Menu Access</option>
              <option value="allmenu">All Menu Access</option>
            </select>
          </div>
          <div className="col-md-12">
            <label for="">Permissions</label>
            <div
              className="well"
              style={{ backgroundColor: "transparent !important" }}
            >
              <TreeCheckbox check={checked} setCheck={setChecked} data={data} />
            </div>
          </div>
          <div className="col-md-12">
            <h6>Note:</h6>
            <p>
              1. If you enable the module for an employee, it means employee
              will only see their related record of assigned module.
            </p>
            <p>
              2: If you check for a company view, it means employee will be able
              to see all record of his/her company of assigned module.
            </p>
          </div>
        </div>
      </Modal.Body>
      <div class="modal-footer">
        <button onClick={handleSubmit} type="button" class="btn btn-primary">
          Save
        </button>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => setShow(false)}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
