export default function EmployeeTables() {
    return(
        <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link mb-2 active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Expired Documents</a>
                                        <a className="nav-link mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Immigration</a>
                                        <a className="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Official Documents</a>

                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="tab-content text-muted mt-4 mt-md-0" id="v-pills-tabContent">
                                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <h4>List All Expired Documents</h4>
                                                </div>

                                            </div>

                                            <table id="" className="table display table-bordered dt-responsive nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Employee </th>
                                                        <th>Document Type</th>
                                                        <th>Title</th>
                                                        <th>Date Of Expiry</th>
                                                        <th>Action</th>


                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>Chang Mun Fei</td>
                                                        <td>NRIC</td>
                                                        <td>S1828711J</td>
                                                        <td></td>
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                            <button className="btn btn-danger"><i className="fas fa-download" style={{fontSize:"10px"}}></i></button>
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
                                                            <h4 className="modal-title">Edit Document</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div className="modal-body">
                                                            <div className="row">

                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Document Type</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="NRIC">NRIC</option>
                                                                            <option value="DL">Driving License</option>
                                                                            <option value="Epass">E Pass</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Date Of Expiry</label>
                                                                        <input type="date" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Document Title</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Notification Email</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Document File</label>
                                                                        <input type="file" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Send Notification Email When Expired</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="Yes">Yes</option>
                                                                            <option value="No">No</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="mb-3">
                                                                        <label for="">Description</label>
                                                                        <textarea name="" id="" cols="30" rows="10" className="form-control" style={{height: "70px"}}></textarea>
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
                                                    <h4>List All Immigration</h4>
                                                </div>

                                            </div>

                                            <table id="" className="table display table-bordered dt-responsive nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Employee </th>
                                                        <th>Document</th>
                                                        <th>Issue Date</th>
                                                        <th>Expiry Date </th>
                                                        <th>Issued By</th>
                                                        <th>Action</th>


                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>Ei Ei Phyu</td>
                                                        <td>Passport
                                                            MF868181</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal2"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                            <button className="btn btn-danger"><i className="fas fa-download" style={{fontSize:"10px"}}></i></button>
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
                                                            <h4 className="modal-title">Edit Immigration</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>

                                                        {/* <!-- Modal body --> */}
                                                        <div className="modal-body">
                                                            <div className="row">

                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Document</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="NRIC">Passport</option>
                                                                            <option value="DL">Driving License</option>
                                                                            <option value="Epass">E Pass</option>
                                                                            <option value="NRIC">NRIC</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Document Number</label>
                                                                        <input type="text" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Issue Date</label>
                                                                        <input type="date" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Expiry Date</label>
                                                                        <input type="date" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Document File</label>
                                                                        <input type="file" className="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="formrow-firstname-input" className="form-label">Country</label> <br/>
                                                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="IN">India</option>
                                                                            <option value="AF">Afganisthan</option>
                                                                            <option value="PK">Pakistan</option>
                                                                            <option value="SG">Singapore</option>
                                                                            <option value="MY">Malaysia</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="mb-3">
                                                                        <label for="">Eligible Review Date</label>
                                                                        <input type="date" className="form-control" placeholder=""/>
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
                                                    <h4>List All Official Documents</h4>
                                                </div>

                                            </div>

                                            <table id="" className="table display table-bordered dt-responsive nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Title </th>
                                                        <th>Company</th>
                                                        <th>Expiry Date </th>
                                                        <th>Action</th>


                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>
                                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal3"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                            <button className="btn btn-danger"><i className="fas fa-download" style={{fontSize:"10px"}}></i></button>
                                                        </td>

                                                    </tr>


                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
};
