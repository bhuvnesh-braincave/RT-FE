export default function Filter() {
    return(
        <div class="card">
                        <div class="card-body">
                            {/* <!-- Tab panes --> */}
                            <div class="tab-content p-3 text-muted">
                                <div class="tab-pane active" id="home1" role="tabpanel">
                                    <div class="row">
                                      
                                      <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="">Date</label>
                                            <input type="date" class="form-control" placeholder=""/>
                                        </div>
                                      </div>
                                      <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="formrow-firstname-input" class="form-label">Company</label> <br/>
                                            <select class="form-control select2-templating " style={{width: "100%"}}>
                                                <option value="KMAC">KMAC International Pte Ltd</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <label for="formrow-firstname-input" class="form-label">Employe</label> <br/>
                                            <select class="form-control select2-templating " style={{width: "100%"}}>
                                                <option value="employee">Select Employee</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="mb-3">
                                            <button class="btn btn-primary mt-4 btn-block w-100">GET</button>
                                        </div>
                                    </div>
                                    </div>

                                </div>
                                
                            </div>

                        </div>
                    </div>
    )
};
