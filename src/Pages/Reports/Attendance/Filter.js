export default function Filter() {
    return(
        <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-5">
                                    <label for="">Start Date</label>
                                    <input type="date" class="form-control" placeholder=""/>
                                </div>
                                <div class="col-md-5">
                                    <label for="">End Date</label>
                                    <input type="date" class="form-control" placeholder=""/>
                                </div>
                                <div class="col-md-5">
                                    <label for="">Company </label>
                                    <select class="form-control select2-templating" style={{width: "100%"}}>                                       
                                        <option value="">KMAC International Pte Ltd</option>
                                    </select>
                                </div>
                                <div class="col-md-5">
                                    <label for="">Choose an Employee </label>
                                    <select class="form-control select2-templating" style={{width: "100%"}}>                                       
                                        <option value="">Select</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <button class="btn btn-primary btn-block mt-4 w-100">Get</button>
                                </div>
                            </div>
                        </div>
                    </div>
    )
};
