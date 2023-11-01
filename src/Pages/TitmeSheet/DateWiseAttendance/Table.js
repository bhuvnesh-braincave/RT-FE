export default function Table() {
    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <h4>Daily Attendace Report</h4>
                                        </div>
                                        <div className="col-md-6" style={{textAlign: "right"}}>
                                            <button className="btn btn-info">CSV</button>
                                            <button className="btn btn-info">Excel</button>
                                            <button className="btn btn-info">PDF</button>
                                            <button className="btn btn-info">CSV</button>
                                        </div>
                                    </div>

                                    <table id="datatable" className="table attendance-table table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <tr role="row">
                                                    <th colspan="3" rowspan="1">HR Information</th>
                                                    <th colspan="9" rowspan="1">Attendace Report</th>
                                                </tr>
                                            </tr>
                                            <tr>
                                                <th>Employee</th>
                                                <th>Employee ID</th>
                                                <th>Company</th>
                                                <th>Status</th>
                                                <th>Date</th>                                                
                                                <th>Clock In</th>
                                                <th>Clock Out</th>                                            
                                                <th>Late</th>
                                                <th>Early Leaving</th>
                                                <th>Overtime</th>
                                                <th>Total Work</th>
                                                <th>Total Rest</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Amanpreeti Kaur</td>
                                                <td>KS0082</td>
                                                <td>KMAC International Pte Ltd</td>
                                                <td></td>
                                                <td>Absent</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>00:00</td>
                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
    )
};
