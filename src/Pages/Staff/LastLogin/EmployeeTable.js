export default function EmployeeTable() {
    return(
        <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <table id="" className="table display table-bordered dt-responsive nowrap w-100">
                                        <thead>
                                            <tr>
                                                <th>Name </th>
                                                <th>Username</th>
                                                <th>Company</th>
                                                <th>Last Login</th>
                                                <th>Role</th>
                                                <th>Status</th>
                                                <th>Action</th>


                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Amanpreeti Kaur
                                                    <small>Household Service Worker (Operation (Site))</small>
                                                    <a href="#">ID: 123456789</a>

                                                </td>
                                                <td>Amanpreeti Kaur</td>
                                                <td>KMAC International Pte Ltd</td>
                                                <td></td>
                                                <td>Cleaner</td>
                                                <td><span className="bg-success px-1 py-1">Active</span></td>
                                                <td>
                                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-edit" style={{fontSize:"10px"}}></i></button>
                                                    <button className="btn btn-danger"><i className="fas fa-download" style={{fontSize:"10px"}}></i></button>
                                                </td>

                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
    )
};
