export default function Filter() {
    return(
        <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-5">
                                    <label for="">Locations</label>
                                    <select className="form-control select2-templating" style={{width: "100%"}}>
                                        <option value="HQ">HQ</option>
                                        <option value="Customer-site">Customer Site</option>
                                    </select>
                                </div>
                                <div className="col-md-5">
                                    <label for="">Date</label>
                                    <input type="date" className="form-control" placeholder=""/>
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-primary btn-block mt-4 w-100">Get</button>
                                </div>
                            </div>
                        </div>
                    </div>
    )
};
