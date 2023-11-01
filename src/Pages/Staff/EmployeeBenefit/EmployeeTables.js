export default function EmployeeTables() {
    return(
        <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link mb-2 active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Accommodation</a>
                                        <a className="nav-link mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Accommodate Employee</a>
                                        <a className="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Utilities & Accessories</a>
                                        <a className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Driver</a>
                                        <a className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-housekeeping" role="tab" aria-controls="v-pills-settings" aria-selected="false">Housekeeping</a>
                                        <a className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-accomendation" role="tab" aria-controls="v-pills-settings" aria-selected="false">Hotel Accommodation</a>
                                        <a className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-benefit" role="tab" aria-controls="v-pills-settings" aria-selected="false">Other Benefits</a>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="tab-content text-muted mt-4 mt-md-0" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <h4>List All Accommodations</h4>
                                                </div>
                                                <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                                    <button className="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal">Add New</button>
                                                </div>
                                            </div>

                                            <table id="" className="table display table-bordered dt-responsive nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Title </th>
                                                        <th>Address</th>
                                                        <th>Period</th>
                                                        <th>Annual Value</th>
                                                        <th>Furnished</th>
                                                        <th>Rent</th>
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
                                                        <td></td>
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                            <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </table>
                                            {/* <!-- The Modal --> */}
                                            <div className="modal fade" id="myModal">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">

                                                        {/* <!-- Modal Header --> */}
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Add New Accommodation</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <div className="mb-3">
                                                                        <label for="">Accommodation Title</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="mb-3">
                                                                        <label for="">Address Line 1</label>
                                                                        <input type="text" className="form-control" placeholder="address line 1"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="mb-3">
                                                                        <label for="">Address Line 2</label>
                                                                        <input type="text" className="form-control" placeholder="address line 2"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="mb-3">
                                                                        <label for="">Period Form </label>
                                                                        <input type="date" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="mb-3">
                                                                        <label for="">Period To</label>
                                                                        <input type="date" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Accommodation Type</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="owned">Owned</option>
                                                                            <option value="rented">Rented</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- Modal footer --> */}
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-success">SAVE</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <h4>List All Accommodated Employees</h4>
                                                </div>
                                                <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                                    <button className="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal2">Add New</button>
                                                </div>
                                            </div>

                                            <table id="" className="table display table-bordered dt-responsive nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Employee </th>
                                                        <th>Accommodation</th>
                                                        <th>Period</th>
                                                        <th>Rent Paid</th>
                                                        <th>Action</th>


                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal2"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                            <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </table>
                                            {/* <!-- The Modal --> */}
                                            <div className="modal fade" id="myModal2">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">

                                                        {/* <!-- Modal Header --> */}
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Accommodate Employee</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Accommodation</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Address</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Accommodation Period</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="KMAC"> KMAC International pte ltd</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""></option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Accommodation From</label>
                                                                        <input type="date" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Accommodation To</label>
                                                                        <input type="date" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Employee Rent Paid</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* <!-- Modal footer --> */}
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-success">SAVE</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <h4>List All Utilities & Accessories</h4>
                                                </div>
                                                <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                                    <button className="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal3">Add New</button>
                                                </div>
                                            </div>

                                            <table id="datatable" className="table table-bordered dt-responsive nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Employee </th>
                                                        <th>Benefit Year</th>
                                                        <th>Utility</th>
                                                        <th>Remark</th>
                                                        <th>Amount</th>
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
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal3"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                            <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </table>
                                            {/* <!-- The Modal --> */}
                                            <div className="modal fade" id="myModal3">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">

                                                        {/* <!-- Modal Header --> */}
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Utilities</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Benefits Year</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="2023">2023 </option>
                                                                            <option value="2022">2022</option>
                                                                            <option value="2021">2021</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Utilities & Accessories </label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="Telephone"> Telephone</option>
                                                                            <option value="Pager">Pager</option>
                                                                            <option value="Camera">Camera</option>
                                                                            <option value="Tablet">Tablet</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Remark</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Actual Amount</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        {/* // <!-- Modal footer --> */}
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-success">SAVE</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">

                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <h4>List All Driver Wages</h4>
                                                </div>
                                                <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                                    <button className="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal4">Add New</button>
                                                </div>
                                            </div>

                                            <table id="" className="table display table-bordered dt-responsive nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Employee </th>
                                                        <th>Benefit Year</th>
                                                        <th>Driver Annual Wage</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal4"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                            <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </table>
                                            {/* <!-- The Modal --> */}
                                            <div className="modal fade" id="myModal4">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">

                                                        {/* <!-- Modal Header --> */}
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Driver</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Benefits Year</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="2023">2023 </option>
                                                                            <option value="2022">2022</option>
                                                                            <option value="2021">2021</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Driver Annual Wage</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                        <small>Annual wages x (Private / Total Mileage)</small>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>

                                                        {/* // <!-- Modal footer --> */}
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-success">SAVE</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-housekeeping" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <h4>List All Housekeeping Wages</h4>
                                                </div>
                                                <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                                    <button className="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal5">Add New</button>
                                                </div>
                                            </div>

                                            <table id="" className="table display table-bordered dt-responsive nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Employee </th>
                                                        <th>Benefit Year</th>
                                                        <th>Service</th>
                                                        <th>Remarks</th>
                                                        <th>Annual Wage</th>
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
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal5"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                            <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </table>
                                            {/* <!-- The Modal --> */}
                                            <div className="modal fade" id="myModal5">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">

                                                        {/* <!-- Modal Header --> */}
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Housekeeping</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Benefits Year</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="2023">2023 </option>
                                                                            <option value="2022">2022</option>
                                                                            <option value="2021">2021</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Housekeeping Services</label> <br/>
                                                                        <select className="select2 form-control select2-multiple"
                                                                        multiple="multiple" style={{width: "100%"}}>
                                                                        <optgroup >
                                                                            <option value="">Housekeeping Service</option>
                                                                            <option value="">Remarks</option>
                                                                            <option value="">Annual Wage</option>
                                                                        </optgroup>
                                                                        
                                                                    </select>
            
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Remark</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Annual Wages</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>

                                                        {/* // <!-- Modal footer --> */}
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-success">SAVE</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-accomendation" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <h4>List All Hotel Accommodation</h4>
                                                </div>
                                                <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                                    <button className="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal6">Add New</button>
                                                </div>
                                            </div>

                                            <table id="" className="table display table-bordered dt-responsive nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Employee </th>
                                                        <th>Hotel</th>
                                                        <th>Check In</th>
                                                        <th>Check Out</th>
                                                        <th>Annual Cost</th>
                                                        <th>Employee Paid</th>
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
                                                        <td></td>
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal6"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                            <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </table>
                                            {/* <!-- The Modal --> */}
                                            <div className="modal fade" id="myModal6">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">

                                                        {/* <!-- Modal Header --> */}
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Hotel Accommodation</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Hotel Name</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Check In Date</label>
                                                                        <input type="date" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Check Out Date</label>
                                                                        <input type="date" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Actual Cost</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Employee Paid Amount</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </div>

                                                        {/* // <!-- Modal footer --> */}
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-success">SAVE</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="v-pills-benefit" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <h4>List All Other Benefits</h4>
                                                </div>
                                                <div className="col-md-6 mb-3" style={{textAlign: "right"}}>
                                                    <button className="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal7">Add New</button>
                                                </div>
                                            </div>

                                            <table id="" className="table display table-bordered dt-responsive nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Employee </th>
                                                        <th>Benefit Year</th>
                                                        <th>Benefit</th>
                                                        <th>Remarks</th>
                                                        <th>Actual Cost</th>
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
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal7"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                            <button className="btn btn-danger"><i className="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </table>
                                            {/* <!-- The Modal --> */}
                                            <div className="modal fade" id="myModal7">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">

                                                        {/* <!-- Modal Header --> */}
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Other Benefits</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value=""> </option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Benefits Year</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="2023">2023 </option>
                                                                            <option value="2022">2022</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Benefit</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="Interest-payment">Interest Payment </option>
                                                                            <option value="Insurance-premium">Insurance Premium</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Remarks</label>
                                                                        {/* <!-- <input type="text" className="form-control" placeholder=""> --> */}
                                                                        <textarea name="" id="" cols="30" rows="10" className="form-control" style={{height: "70px"}}></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Actual Cost</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>




                                                            </div>
                                                        </div>
                                                        
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-success">SAVE</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
};
