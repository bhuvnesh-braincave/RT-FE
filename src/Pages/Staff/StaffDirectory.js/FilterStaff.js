export default function FilterStaff() {
    return(
        <>
        <div className="card">
                        <div className="card-body">
                            <h4>Filter Employee</h4>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                            <option value="KMAC">KMAC international Pte Ltd</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label for="formrow-firstname-input" className="form-label">Location</label> <br/>
                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                            <option value="ALL">ALL</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                            <option value="">Employee 1</option>
                                            <option value="">Employee 2</option>
                                            

                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label for="formrow-firstname-input" className="form-label">Department</label> <br/>
                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                            <option value="ALL">ALL</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label for="formrow-firstname-input" className="form-label">Designation</label> <br/>
                                        <select className="form-control select2-templating " style={{width: "100%"}}>
                                            <option value="ALL">ALL</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12" style={{textAlign: "right"}}>
                                    <button className="btn btn-primary"> Get</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="staff-directory">
                                        <img src="assets/images/users/avatar-1.jpg" alt="" className="img-fluid"/>
                                    </div>
                                    <div className="staff-directory-details">
                                        <h5>Kong Hui Chein</h5>
                                        <small>Hr Executive</small>
                                        {/* <!-- <ul>
                                            <li><a href="#"><i className="fab fa-google"></i></a></li>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        </ul> --> */}
                                        <p>Blk 289E Bukit Batok Street 25 #03-156 Singapore 654289</p>
                                        <a href="" className="btn btn-info">View More</a>
                                        <a href="" className="btn btn-success">Profile</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
    </>
    )
};
