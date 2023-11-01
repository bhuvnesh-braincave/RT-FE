import { useState } from "react";
import AddNew from "./AddNew";
import Table from "./Table";

export default function EmployeeTable() {
    const [isOpen,setIsOpen] = useState(false)

    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4>List All Employee Exit</h4>
                                    <p className="card-title-desc" style={{textAlign: "right"}}>
                                        <button className="btn btn-primary text-right" onClick={()=>setIsOpen(true)}>
                                            Add New
                                        </button>
                                    </p>
                                    {isOpen && <AddNew show={isOpen} setShow={setIsOpen}/>}
                                    
<Table/>
                                    {/* <table id="datatable" className="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Employee</th>
                                                <th>Company</th>
                                                <th>Exit Type</th>
                                                <th>Exit Date</th>
                                                <th>Exit Interview</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-edit" style={{fontSize: "10px"}}></i></button>
                                                    <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize: "10px"}}></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table> */}
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">Add New Employee Exit</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <div className="row">

                                <div className="col-md-6 mb-2">
                                    <label for="">Company</label> <br/>
                                    <select className="form-control select2-templating" style={{width: "100%"}}>
                                        <option value="KMAC">KMAC International Pte Ltd</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label for="">Employee To Exit</label> <br/>
                                    <select className="form-control select2-templating" style={{width: "100%"}}>
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="">Exit Date</label>
                                        <input type="date" className="form-control" placeholder=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label for="">Type of Exit</label> <br/>
                                    <select className="form-control select2-templating" style={{width: "100%"}}>
                                        <option value="res">Resign</option>
                                        <option value="ter">Terminated</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label for="">Exit Interview</label> <br/>
                                    <select className="form-control select2-templating" style={{width: "100%"}}>
                                        <option value="Yes">Yes</option>
                                        <option value="No.">No.</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <label for="">Disable Account</label> <br/>
                                    <select className="form-control select2-templating" style={{width: "100%"}}>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label for="">Description</label>
                                        <textarea name="" id="" cols="30" rows="10" style={{height: "70px"}} className="form-control"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-12" style={{textAlign: "right"}}>
                                    <button className="btn btn-primary">Save</button>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
                        {/* <!-- end col --> */}
                    </div>
    )
};
