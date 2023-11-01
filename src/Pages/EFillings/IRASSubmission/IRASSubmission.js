import MainPage from "../../../Components/Common/MainPage";

export default function IRASSubmission() {
    return(
        <MainPage title={"IRAS SUBMISSION"}>
            <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                      <div class="col-md-4">
                                        <div class="mb-3">
                                            <label for="formrow-firstname-input" class="form-label">Select Year</label> <br/>
                                            <select class="form-control select2-templating " style={{width: "100%"}}>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>                                                                 

                                            </select>
                                        </div>
                                      </div>
                                    <div class="row">
                                        <div class="col-md-3">
                                            <a href="#">Validate With IRAS</a>
                                        </div>
                                        <div class="col-md-3">
                                           <button class="btn btn-primary">Submit to IRAS</button>
                                        </div>
                                    </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <!-- end col --> */}
                    </div>
        </MainPage>
    )
};
