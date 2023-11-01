export default function Tabs() {
    return(
        <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-3">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a class="nav-link mb-2 active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Contract Type</a>
                                            <a class="nav-link mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Qualification</a>
                                            <a class="nav-link mb-2" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Document Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-email-notifications" role="tab" aria-controls="v-pills-email-notifications" aria-selected="false">Award
                                                Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-files-manager" role="tab" aria-controls="v-pills-files-manager" aria-selected="false">Religion</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-performance" role="tab" aria-controls="v-pills-performance" aria-selected="false">Leave Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-organization-chart" role="tab" aria-controls="v-pills-organization-chart" aria-selected="false">Warning
                                                Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-termination" role="tab" aria-controls="v-pills-termination" aria-selected="false">Terminiation Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-expense" role="tab" aria-controls="v-pills-expense" aria-selected="false">Expense
                                                Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-income" role="tab" aria-controls="v-pills-income" aria-selected="false">Income
                                                Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-employee-exit" role="tab" aria-controls="v-pills-employee-exit" aria-selected="false">Employee Exit Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-employee-travel" role="tab" aria-controls="v-pills-employee-travel" aria-selected="false">Travel
                                                Arrangement Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-currency" role="tab" aria-controls="v-pills-currency" aria-selected="false">Currency Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-company" role="tab" aria-controls="v-pills-company" aria-selected="false">Company
                                                Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-security" role="tab" aria-controls="v-pills-security" aria-selected="false">Security Type</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-claim" role="tab" aria-controls="v-pills-claim" aria-selected="false">Claim
                                                Type</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9">
                                <div class="card">
                                    <div class="card-body">


                                        <div class="row">

                                            <div class="col-md-12">
                                                <div class="tab-content text-muted mt-4 mt-md-0" id="v-pills-tabContent">
                                                    <div class="tab-pane fade active show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                        <h4>List All Contract Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal">
                                                                Add New Contract Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Contract Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>Full Time</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Part Time</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Contract Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <label for="">Contract Type</label>
                                                                        <input type="text" class="form-control" placeholder="Enter Contract type"/>
                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                        <h4>List All Education Level</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal2">
                                                                Add New Education Level
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Education Level</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>Madhyamik</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>High School / Diploma</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal2">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Education Level</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <label for="">Education Level</label>
                                                                        <input type="text" class="form-control" placeholder="Enter Education Level"/>
                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <h4>List All Language</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal3">
                                                                Add New Language
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Language</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>English</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Hindi</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal3">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Language</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <label for=""> Language</label>
                                                                        <input type="text" class="form-control" placeholder="Language"/>
                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr/>
                                                        <h4>List All Skills</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal4">
                                                                Add New Skill
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Skill</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>Jquery</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>React Js</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal4">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Skill</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <label for=""> Skill</label>
                                                                        <input type="text" class="form-control" placeholder="Enter Skill"/>
                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                        <h4>List All Document Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal5">
                                                                Add New Document Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Document Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>Diriving </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Work Permit</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal5">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Document Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <label for=""> Document Type</label>
                                                                        <input type="text" class="form-control" placeholder="Document Type"/>
                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-email-notifications" role="tabpanel" aria-labelledby="v-pills-email-notifications">
                                                        <h4>List All Award Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal6">
                                                                Add New Award Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Award Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>Award 1 </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Award 2</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal6">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Award Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <label for=""> Award Type</label>
                                                                        <input type="text" class="form-control" placeholder="Document Type"/>
                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-files-manager" role="tabpanel" aria-labelledby="v-pills-files-manager">
                                                        <h4>List All Religion</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal7">
                                                                Add New Religion
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Religion</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>Hinduism </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Jain</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal7">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Religion</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <label for=""> Religion</label>
                                                                        <input type="text" class="form-control" placeholder="Religion"/>
                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-performance" role="tabpanel" aria-labelledby="v-pills-performance">
                                                        <h4>List All Leave Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal8">
                                                                Add New Leave Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Leave Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>Maternity Leave </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Sick Leave</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal8">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Leave Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <label for=""> Leave Type</label>
                                                                        <input type="text" class="form-control" placeholder="Leave"/>

                                                                        <input type="checkbox" id="leave" name="leave" value="leave" class="mt-2"/>
                                                                        <label for="leave"> Paid</label><br/>
                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-organization-chart" role="tabpanel" aria-labelledby="v-pills-organization-chart">
                                                        <h4>List All Warning Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal9">
                                                                Add New Warning Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Warning Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>First Written Warning </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Warning</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal9">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Warning Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <label for=""> Warning Type</label>
                                                                        <input type="text" class="form-control" placeholder="Warning type"/>

                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-termination" role="tabpanel" aria-labelledby="v-pills-termination">
                                                        <h4>List All Termination Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal10">
                                                                Add New Termination Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Termination Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>Voluntary Termination </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Permanent</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal10">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Termination Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <label for=""> Termination Type</label>
                                                                        <input type="text" class="form-control" placeholder="Termination type"/>

                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-expense" role="tabpanel" aria-labelledby="v-pills-expense">
                                                        <h4>List All Expense Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal11">
                                                                Add New Expense Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>
                                                                    <th>Company</th>
                                                                    <th>Expense Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <th>KMAC</th>
                                                                    <td>Supplies </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>Braincave</td>
                                                                    <td>Utility</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal11">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Expense Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="formrow-firstname-input" class="form-label">Company</label> <br/>
                                                                                    <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                                        <option value="Kmac">KMAC</option>
                                                                                        <option value="braincave">Braincavesoft</option>


                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="">Expense Type</label>
                                                                                    <input type="text" class="form-control" placeholder="Expense Type"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-income" role="tabpanel" aria-labelledby="v-pills-income">
                                                        <h4>List All Income Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal12">
                                                                Add New Income Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>

                                                                    <th>Expense Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>

                                                                    <td>Salary </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>

                                                                    <td>Other Income</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal12">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Income Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <div class="row">

                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="">Income Type</label>
                                                                                    <input type="text" class="form-control" placeholder="Income Type"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-employee-exit" role="tabpanel" aria-labelledby="v-pills-income">
                                                        <h4>List All Exit Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal13">
                                                                Add New Exit Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>

                                                                    <th>Employee Exit Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>

                                                                    <td>Resign </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>

                                                                    <td>Terminated</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal13">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Exit Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <div class="row">

                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="">Employee Exit Type</label>
                                                                                    <input type="text" class="form-control" placeholder="Employee Exit Type"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-employee-travel" role="tabpanel" aria-labelledby="v-pills-employee-travel">
                                                        <h4>List All Travel Arrangement Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal14">
                                                                Add New Travel Arrangement Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>

                                                                    <th>Travel Arrangement Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>

                                                                    <td>Guest House </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>

                                                                <tr>

                                                                    <td>Corporation</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal14">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Travel Arrangement Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <div class="row">

                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="">Travel Arrangement Type</label>
                                                                                    <input type="text" class="form-control" placeholder="Travel Arrangement Type"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                   
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-currency" role="tabpanel" aria-labelledby="v-pills-currency">
                                                        <h4>List All Currencies</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal15">
                                                                Add New Currency Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>

                                                                    <th>Name</th>
                                                                    <th>Code</th>
                                                                    <th>Symbol</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>

                                                                    <td>Dollars </td>
                                                                    <td>SGD</td>
                                                                    <td>S$</td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal15">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Currency Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <div class="row">

                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="">Currency Name</label>
                                                                                    <input type="text" class="form-control" placeholder="Currency Name"/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="">Currency Code</label>
                                                                                    <input type="text" class="form-control" placeholder="Curency Code"/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="">Currency Symbol</label>
                                                                                    <input type="text" class="form-control" placeholder="Currency Symbol"/>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                   
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-company" role="tabpanel" aria-labelledby="v-pills-company">
                                                        <h4>List All Company Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal16">
                                                                Add New Company Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>

                                                                    <th>Company Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>

                                                                    <td>Corporation </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal16">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Company Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    
                                                                    <div class="modal-body">
                                                                        <div class="row">

                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="">Company Type</label>
                                                                                    <input type="text" class="form-control" placeholder="Company Type"/>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                   
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-security" role="tabpanel" aria-labelledby="v-pills-security">
                                                        <h4>List All Security Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal17">
                                                                Add New Security Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>

                                                                    <th>Security Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>

                                                                    <td>Job Security </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal17">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Security Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    
                                                                    <div class="modal-body">
                                                                        <div class="row">

                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="">Security Type</label>
                                                                                    <input type="text" class="form-control" placeholder="Security Type"/>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                   
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-claim" role="tabpanel" aria-labelledby="v-pills-claim">
                                                        <h4>List All Claim Type</h4>
                                                        <p class="card-title-desc" style={{textAlign: "right"}}>
                                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal18">
                                                                Add New Claim Type
                                                            </button>
                                                        </p>
                                                        <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                                            <thead>
                                                                <tr>

                                                                    <th>Claim Type</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>

                                                                    <td>Job Security </td>
                                                                    <td>
                                                                        <a class="add"><i class="far fa-save"></i></a>
                                                                        <a class="edit"><i class="fas fa-edit"></i></a>
                                                                        <a class="delete"><i class="fas fa-trash-alt"></i></a>
                                                                    </td>
                                                                </tr>


                                                            </tbody>
                                                        </table>
                                                        {/* <!-- The Modal --> */}
                                                        <div class="modal fade" id="myModal18">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">

                                                                    {/* <!-- Modal Header --> */}
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title">Add New Claim Type</h4>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                                    </div>

                                                                    {/* <!-- Modal body --> */}
                                                                    <div class="modal-body">
                                                                        <div class="row">

                                                                            <div class="col-md-12">
                                                                                <div class="mb-3">
                                                                                    <label for="">Claim Type</label>
                                                                                    <input type="text" class="form-control" placeholder="Claim Type"/>
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                    {/* <!-- Modal footer --> */}
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success">Save</button>
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
                                {/* <!-- end card --> */}
                            </div>
                        </div>


                    </div>
    )
};
