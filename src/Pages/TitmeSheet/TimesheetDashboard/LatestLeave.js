export default function LatestLeave() {
    return(
        <div class="card">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <h4>Latest leave</h4>
                                </div>
                                <div class="col-md-6" style={{textAlign: "right"}}>
                                    <button class="btn btn-primary">View All</button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <table id="" class="table display table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Leave Type </th>
                                                <th>Employee</th>
                                                <th>Request Duration</th>
                                                <th>Applied On</th>
                                                <th>Status</th>



                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Unpaid Leave</td>
                                                <td>Amanpreeti Kaur</td>
                                                <td>To Total Days</td>
                                                <td></td>
                                                <td><span class="bg-success px-1 py-1"> Approved </span></td>


                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
    )
};
