export default function LatestHoliday() {
    return(
        <div class="card mt-3">
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <h4>Latest Holidays</h4>
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
                                                <th>Event Name </th>
                                                <th>Start Date</th>
                                                <th>Status</th>



                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Christmas Day</td>
                                                <td></td>
                                                <td><span class="bg-success px-1 py-1">Published</span></td>

                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
    )
};
