export default function Calender() {
    return(
        <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-grid" id="external-events">
                                                <button className="btn font-16 btn-primary mb-3" id="btn-new-event">
                                                    <i className="mdi mdi-plus-circle-outline"></i> Holiday
                                                </button>
                                                <button className="btn font-16 btn-info mb-3" data-bs-toggle="modal" data-bs-target="#myModal">
                                                    <i className="mdi mdi-plus-circle-outline"></i> Travel
                                                    Request
                                                </button>
                                                <button className="btn font-16 btn-success mb-3" data-bs-toggle="modal" data-bs-target="#myModal2">
                                                    <i className="mdi mdi-plus-circle-outline"></i> Goals
                                                </button>
                                            </div>



                                            <div className="row justify-content-center mt-5">
                                                <img src="assets/images/verification-img.png" alt="" className="img-fluid d-block" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end col--> */}

                                <div className="col-lg-9">
                                    <div className="card">
                                        <div className="card-body">
                                            <div id="calendar"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end col --> */}
                            </div>

                            <div style={{clear: "both"}}></div>

                            {/* <!-- Add New Event MODAL --> */}
                            <div className="modal fade" id="event-modal" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header py-3 px-4 border-bottom-0">
                                            <h5 class="modal-title" id="">Set New Holiday</h5>

                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                                        </div>
                                        <div class="modal-body p-4">
                                            <form class="needs-validation" name="event-form" id="form-event" novalidate>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">Company Name</label>
                                                            <input class="form-control" placeholder="company name goes here" type="text" name="title" id="" required value="" />

                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">Event Name</label>
                                                            <input class="form-control" placeholder="event name goes here" type="text" name="title" id="" required value="" />

                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">Start Date</label>
                                                            <input class="form-control" placeholder="" type="date" name="title" id="" required value="" />

                                                        </div>
                                                    </div>

                                                    <div class="col-md-6">
                                                        <div class="mb-3">
                                                            <label class="form-label">End Date</label>
                                                            <input class="form-control" placeholder="" type="date" name="title" id="" required value="" />

                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">Description</label> <br/>
                                                            <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "100px"}}></textarea>

                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">Status</label>
                                                            <select class="form-control form-select" name="category" id="event-category">
                                                                <option selected>--Select--</option>
                                                                <option value="published">Published</option>
                                                                <option value="unpublished">Unpublished</option>

                                                            </select>
                                                            <div class="invalid-feedback">
                                                                Please select a valid event category
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-6">
                                                        <button type="button" class="btn btn-danger" id="btn-delete-event">
                                                            Delete
                                                        </button>
                                                    </div>
                                                    <div class="col-6 text-end">
                                                        <button type="button" class="btn btn-light me-1" data-bs-dismiss="modal">
                                                            Close
                                                        </button>
                                                        <button type="submit" class="btn btn-success" id="btn-save-event">
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <!-- end modal-content--> */}
                                </div>
                                {/* <!-- end modal dialog--> */}
                            </div>
                            {/* <!-- end modal-->
                            <!-- Add New Travel MODAL -->
                            <!-- The Modal --> */}
                            <div class="modal fade" id="myModal">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        {/* <!-- Modal Header --> */}
                                        <div class="modal-header">
                                            <h4 class="modal-title">Add New Travel</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>

                                        {/* <!-- Modal body --> */}
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Company Name</label>
                                                        <input class="form-control" placeholder="company name goes here" type="text" name="title" id="" required value="" />
                                                    </div>

                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Employee</label>
                                                        <input class="form-control" placeholder="choose an Employee" type="text" name="title" id="" required value="" />
                                                    </div>

                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Start Date</label>
                                                        <input class="form-control" placeholder="" type="date" name="title" id="" required value="" />

                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">End Date</label>
                                                        <input class="form-control" placeholder="" type="date" name="title" id="" required value="" />

                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Purpose of visit</label>
                                                        <input class="form-control" placeholder="purpose visit" type="text" name="title" id="" required value="" />
                                                    </div>

                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Place of visit</label>
                                                        <input class="form-control" placeholder="Enter place" type="text" name="title" id="" required value="" />
                                                    </div>

                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Travel Mode</label>
                                                        <select class="form-control form-select" name="category" id="">
                                                            <option selected>--Select--</option>
                                                            <option value="bus">By Bus</option>
                                                            <option value="train">By Train</option>
                                                            <option value="plane">By Plane</option>
                                                            <option value="taxi">By Taxi</option>
                                                            <option value="rent-car">By Rental Car</option>

                                                        </select>

                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Arrangement Type</label>
                                                        <select class="form-control form-select" name="category" id="">
                                                            <option selected>--Select--</option>
                                                            <option value="corporation">Corporation</option>
                                                            <option value="guest-house">Guest House</option>


                                                        </select>

                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Expected Budget</label>
                                                        <input class="form-control" placeholder="Enter expected budget" type="text" name="title" id="" required value="" />
                                                    </div>

                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Actual Budget</label>
                                                        <input class="form-control" placeholder="Enter Actual Budget" type="text" name="title" id="" required value="" />
                                                    </div>

                                                </div>
                                                <div class="col-md-12">
                                                    <label for="" class="form-label">Description</label>
                                                    <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "100px"}}></textarea>
                                                </div>
                                            </div>
                                            <div class="row mt-2">
                                                <div class="col-md-6">
                                                    <button type="button" class="btn btn-danger" id="btn-delete-event">
                                                        Delete
                                                    </button>
                                                </div>
                                                <div class="col-md-6" style={{textAlign: "right"}}>
                                                    <button type="submit" class="btn btn-success" id="btn-save-event">
                                                        Save
                                                    </button>




                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Modal footer --> */}




                                    </div>
                                </div>
                            </div>
                            {/* <!-- end modal-->

                            <!-- this is goals modal -->


                            <!-- The Modal --> */}
                            <div class="modal fade" id="myModal2">
                                <div class="modal-dialog">
                                    <div class="modal-content">
{/* 
                                        <!-- Modal Header --> */}
                                        <div class="modal-header">
                                            <h4 class="modal-title">Set New Goal</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>

                                        {/* <!-- Modal body --> */}
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Company</label>
                                                        <input class="form-control" placeholder="company name goes here" type="text" name="title" id="" required value="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Goal Type</label>
                                                        <input class="form-control" placeholder="enter goal type" type="text" name="title" id="" required value="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Subject</label>
                                                        <input class="form-control" placeholder="Enter Subject" type="text" name="title" id="" required value="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Target Achievement</label>
                                                        <input class="form-control" placeholder="Target Achievement" type="text" name="title" id="" required value="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Start Date</label>
                                                        <input class="form-control" placeholder="" type="date" name="title" id="" required value="" />

                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">End Date</label>
                                                        <input class="form-control" placeholder="" type="date" name="title" id="" required value="" />

                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="mb-3">
                                                        <label for="form-label">Description</label>
                                                        <textarea name="" id="" cols="30" rows="10" class="form-control" style={{height: "100px"}}></textarea>
                                                    </div>
                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-md-6">
                                                        <button type="button" class="btn btn-danger" id="btn-delete-event">
                                                            Delete
                                                        </button>
                                                    </div>
                                                    <div class="col-md-6" style={{textAlign: "right"}}>
                                                        <button type="submit" class="btn btn-success" id="btn-save-event">
                                                            Save
                                                        </button>
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
