export default function EmployeeSummery() {
    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                       <div className="col-md-5">
                                        <h4>List All Employee Summary for 2023</h4>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                    <select className="form-control select2-templating " style={{width: "100%"}}>
                                                        <option value="allcompany">All Company</option>                                                                                                                    

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label for="formrow-firstname-input" className="form-label">Employee</label> <br/>
                                                    <select className="form-control select2-templating " style={{width: "100%"}}>
                                                        <option value="allemployees">All Employees</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="mb-3">
                                                    <label for="" className="form-label">Select Month</label> <br/>
                                                    <input type="date" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                       </div>
                                       <div className="col-md-7">
                                        <h4>Bulk Payment</h4>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                    <select className="form-control select2-templating " style={{width: "100%"}}>
                                                        <option value="allcompany">All Company</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <label for="formrow-firstname-input" className="form-label">Locations</label> <br/>
                                                    <select className="form-control select2-templating " style={{width: "100%"}}>
                                                        <option value="all">All</option>                                                                                                                    
    
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <label for="formrow-firstname-input" className="form-label">Department</label> <br/>
                                                    <select className="form-control select2-templating " style={{width: "100%"}}>
                                                        <option value="All">All</option>                                                                                                                    
    
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="mb-3">
                                                    <label for="" className="form-label">Department</label> <br/>
                                                    <input type="date" className="form-control" placeholder=""/>
                                                </div>
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
