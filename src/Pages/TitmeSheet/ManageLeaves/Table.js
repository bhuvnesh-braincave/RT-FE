export default function Table() {
    return(
        <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <h4>Leaves</h4>
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
                                                <th>Leave Type </th>
                                                <th>Department</th>
                                                <th>Employee</th> 
                                                <th>Request Duration</th>  
                                                <th>Applied On</th>                                     
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
                                                                <label for="formrow-firstname-input" class="form-label">Company</label> <br/>
                                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value=""></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">Employee</label> <br/>
                                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value=""></option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="formrow-firstname-input" class="form-label">Leave Type</label> <br/>
                                                                <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value=""></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="" class="form-label">Remarks</label> <br/>
                                                               <input type="text" class="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="" class="form-label">Start Date</label> <br/>
                                                               <input type="date" class="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="" class="form-label">End Date</label> <br/>
                                                               <input type="date" class="form-control" placeholder=""/>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <input type="checkbox" class="" placeholder=""/>
                                                                <label for="" class="form-label">Half Day</label> 
                                                               
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="" class="form-label">Attachment</label> <br/>
                                                               <input type="file" class="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="mb-3">
                                                                <label for="" class="form-label">Leave Reason</label> <br/>
                                                               <textarea name="" id="" cols="30" rows="10" style={{height: "70px"}} class="form-control"></textarea>
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
                        
                    </div>
    )
};
