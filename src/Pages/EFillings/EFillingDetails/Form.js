export default function Form() {
    return(
        <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <h4>E Filing Details</h4>
                                        </div>
                                       
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">CPF Submission Number (CSN)</label>
                                                <input type="text" className="form-control" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">Organization ID Type</label> <br/>
                                                <select className="form-control" style={{width: "100%"}}>
                                                    <option value="">Select</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">Organization ID No</label>
                                                <input type="text" className="form-control" placeholder=""/>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">Authorised Person Name</label>
                                                <input type="text" className="form-control" placeholder=""/>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">Authorised Person Designation</label>
                                                <input type="text" className="form-control" placeholder=""/>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="formrow-firstname-input" className="form-label">Authorised Person ID Type</label> <br/>
                                                <select className="form-control" style={{width: "100%"}}>
                                                    <option value="">NRIC</option>
                                                    <option value="">FIN</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">Authorised Person ID No.</label>
                                                <input type="text" className="form-control" placeholder=""/>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">Authorised Person Email</label>
                                                <input type="email" className="form-control" placeholder=""/>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label for="">Authorised Person Telephone Number</label>
                                                <input type="text" className="form-control" placeholder=""/>
                                                
                                            </div>
                                        </div>
                                        <button className="btn btn-primary w-25">Save</button>
                                    </div>


                                   
                                    {/* <!-- The Modal --> */}
                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">

                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add New</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                {/* <!-- Modal body --> */}
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="">Start Date</label>
                                                                <input type="date" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="">End Date</label>
                                                                <input type="date" className="form-control" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Company</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value=""></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="mb-3">
                                                                <label for="formrow-firstname-input" className="form-label">Choose an Employee</label> <br/>
                                                                <select className="form-control select2-templating " style={{width: "100%"}}>
                                                                    <option value=""></option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        


                                                    </div>
                                                </div>

                                                {/* <!-- Modal footer --> */}
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success">SAVE</button>
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
