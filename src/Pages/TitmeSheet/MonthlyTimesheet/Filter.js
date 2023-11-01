export default function Filter() {
    return(
        <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="">Date</label>
                                    <input type="date" class="form-control" placeholder=""/>
                                </div>
                                <div class="col-md-3">
                                    <label for="">Company</label>
                                    <select class="form-control select2-templating" style={{width: "100%"}}>
                                        <option value="KMAC">KMAC International Pte Ltd</option>                                        
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <label for="">Employee</label>
                                    <select class="form-control select2-templating" style={{width: "100%"}}>
                                        <option value=""></option>                                        
                                    </select>
                                </div>
                                
                                <div class="col-md-3">
                                    <button class="btn btn-primary btn-block mt-4 w-100">Get</button>
                                </div>
                            </div>
                        </div>
                    </div>
    )
};
