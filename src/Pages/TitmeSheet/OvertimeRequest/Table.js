export default function Table() {
    return(
        <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <h4>Overtime Request</h4>
                                        </div>
                                        <div class="col-md-6 mb-3" style={{textAlign: "right"}}>
                                            <button class="btn btn-primary text-right" data-bs-toggle="modal" data-bs-target="#myModal">Add New</button>
                                        </div>
                                    </div>


                                    <p class="card-title-desc" style={{textAlign: "right"}}>
                                        <button class="btn btn-info text-right">
                                            CSV
                                        </button>
                                        <button class="btn btn-info text-right">
                                            Excel
                                        </button>
                                        <button class="btn btn-info text-right">
                                            PDF
                                        </button>
                                        <button class="btn btn-info text-right">
                                            Print
                                        </button>
                                    </p>
                                    <table id="datatable" class="table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Employee </th>
                                                <th>Date</th>
                                                <th>In Time</th>                                            
                                                <th>Out Time</th>
                                                <th>Total Hour</th>
                                                <th>Status</th>
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
                                                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                    <button class="btn btn-danger"><i class="fas fa-trash-alt" style={{fontSize:"10px"}}></i></button>
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table>
                                    {/* <!-- The Modal --> */}
                                    <div class="modal fade" id="myModal">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">

                                                {/* <!-- Modal Header --> */}
                                                <div class="modal-header">
                                                    <h4 class="modal-title">Add New</h4>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                {/* <!-- Modal body --> */}
                                                <div class="modal-body">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="">Employee</label>
                                                                <input type="text" class="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">Date</label> <br/>
                                                                <input type="date" class="form-control" placeholder=""/>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">Start Time</label> <br/>
                                                               <input type="text" class="form-control" placeholder="Enter Time"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">End Time</label> <br/>
                                                               <input type="text" class="form-control" placeholder="Enter Time"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">Total Hours</label> <br/>
                                                               <input type="text" class="form-control" placeholder="Enter Total Hours"/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">Reasons</label> <br/>
                                                               <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "70px"}}></textarea>
                                                            </div>
                                                        </div>
                                                        


                                                    </div>
                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-success">SAVE</button>
                                                </div>

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
