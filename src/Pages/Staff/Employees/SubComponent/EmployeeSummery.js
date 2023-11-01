export default function EmployeeSummery() {
    return(
        <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="employee-users d-flex">
                                        <p><i className="fa fa-users"></i></p>
                                        <h5>123 Active</h5>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="employee-users d-flex">
                                        <p><i className="fas fa-user-alt-slash"></i></p>
                                        <h5>4 Inactive</h5>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="employee-users d-flex">
                                        <p><i className="fas fa-male"></i></p>
                                        <h5>25.2%</h5>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="employee-users d-flex">
                                        <p><i className="fas fa-female"></i></p>
                                        <h5>74.8% Female</h5>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
    )
};
