export default function Tabs() {
    return(
        <div class="row">
                            <div class="col-xl-3">
                                <div class="card">
                                    <div class="card-body">

                                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a class="nav-link mb-2 active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">System</a>
                                            <a class="nav-link mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">General</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Role</a>
                                            <a class="nav-link mb-2" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Payroll</a>                                            
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-email-notifications" role="tab" aria-controls="v-pills-messages" aria-selected="false">Email Notifications</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-files-manager" role="tab" aria-controls="v-pills-messages" aria-selected="false">Files Manager</a>
                                            <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-performance" role="tab" aria-controls="v-pills-messages" aria-selected="false">Performance</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9">
                                <div class="card">
                                    <div class="card-body">


                                        <div class="row">

                                            <div class="col-md-12">
                                                <div class="tab-content text-muted mt-4 mt-md-0" id="v-pills-tabContent">
                                                    <div class="tab-pane fade active show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                        <h4>System Confuguration</h4>
                                                        <form action="">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">First Name</label>
                                                                        <input type="text" class="form-control" id="" placeholder="Enter Your First Name"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Default Currency</label>
                                                                        <select class="form-select" id="">
                                                                            <option selected="">Choose...</option>
                                                                            <option value="1">Dollar </option>
                                                                            <option value="2">Rupees</option>
                                                                            <option value="3">Pound</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Default Currency (Symbol / Code)</label>
                                                                        <select class="form-select" id="">
                                                                            <option selected="">Choose...</option>
                                                                            <option value="dollar">$ </option>
                                                                            <option value="rupess">&#x20B9;</option>
                                                                            <option value="pound">&#8356;</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Currency Position</label>
                                                                        <select class="form-select" id="">
                                                                            <option selected="">Choose...</option>
                                                                            <option value="prefix">Prefix </option>
                                                                            <option value="suffix">Suffix;</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Employee Login</label>
                                                                        <select class="form-select" id="">
                                                                            <option selected="">Choose...</option>
                                                                            <option value="email">Employee Login With Email </option>
                                                                            <option value="username">Employee Login With Username</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Footer Text</label>
                                                                        <input type="text" class="form-control" id="" placeholder="Enter Footer Text"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="templating-select">
                                                                        <label class="form-label">Timezone</label>
                                                                        <select class="form-control select2-templating">
                                                                            <option selected="">Choose...</option>
                                                                            <option value="SG">(GMT+8:00) Singapore</option>
                                                                            <option value="SU">(GMT+9:00) Seoul</option>

                                                                            <option value="CA">(GMT+9:30) Darwin</option>


                                                                        </select>

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="row">
                                                                        <div class="col-md-6">
                                                                            <div class="mb-3">
                                                                                <label for="formrow-firstname-input" class="form-label">Current year (footer)</label>
                                                                                <input type="checkbox" id="switch3" switch="bool" checked />
                                                                                <label for="switch3" data-on-label="Yes" data-off-label="No"></label>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                            <div class="mb-3">
                                                                                <label for="formrow-firstname-input" class="form-label">Statutory Amount fixed</label>
                                                                                <input type="checkbox" id="switch4" switch="bool" />
                                                                                <label for="switch4" data-on-label="Yes" data-off-label="No"></label>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div class="col-md-4">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Default Language</label>
                                                                        <select class="form-select" id="">
                                                                            <option selected="">Choose...</option>
                                                                            <option value="eng">English </option>
                                                                            <option value="SG">Singaporian</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Google Maps API KEY</label>
                                                                        <input type="text" class="form-control" id="" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Staff Dashboard</label>
                                                                        <select class="form-select" id="">
                                                                            <option selected="">Choose...</option>
                                                                            <option value="white">White Widgets </option>
                                                                            <option value="color">Color Widgets</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Project Dashboard</label>
                                                                        <select class="form-select" id="">
                                                                            <option selected="">Choose...</option>
                                                                            <option value="white">White Widgets </option>
                                                                            <option value="color">Color Widgets</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Estimate Terms & Condition</label>
                                                                        <textarea id="" class="form-control" rows="3" placeholder="" spellcheck="false"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Invoice Terms & Condition</label>
                                                                        <textarea id="" class="form-control" rows="3" placeholder="" spellcheck="false"></textarea>
                                                                    </div>
                                                                </div>
                                                                <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>


                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                                        <h4>General Configuration</h4>
                                                        <form action="">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Company Name</label>
                                                                        <input type="text" class="form-control" id="" placeholder="Enter Company Name"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Address Line 1</label>
                                                                        <input type="text" class="form-control" id="" placeholder="Enter Address "/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Client</label>
                                                                        <input type="text" class="form-control" id="" placeholder="Enter Client Name"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Address Line 2</label>
                                                                        <input type="text" class="form-control" id="" placeholder="Enter Address"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="templating-select">
                                                                        <label class="form-label">Country</label> <br/>
                                                                        <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="IN">India</option>
                                                                            <option value="SG">Singapore</option>
                                                                            <option value="AUS">Australia</option>
                                                                        </select>

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="templating-select">
                                                                        <label class="form-label">State</label> <br/>
                                                                        <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="WB">West Bengal</option>
                                                                            <option value="OD">Odissa</option>
                                                                            <option value="MH">Maharastra</option>
                                                                        </select>

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="templating-select">
                                                                        <label class="form-label">City</label> <br/>
                                                                        <select class="form-control select2-templating " style={{width: "100%"}}>
                                                                            <option value="KOL">Kolkata</option>
                                                                            <option value="BH">Bhubaneswar</option>
                                                                            <option value="MB">Mumbai</option>
                                                                        </select>

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Zip Code</label>
                                                                        <input type="text" class="form-control" id="" placeholder="Enter zip code"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Email</label>
                                                                        <input type="email" class="form-control" id="" placeholder="Enter Your Email"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Phone Number</label>
                                                                        <input type="text" class="form-control" id="" placeholder="Enter Your Phone"/>
                                                                    </div>
                                                                </div>
                                                                <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>

                                                            </div>
                                                        </form>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                        <h4>Role Configuration</h4>
                                                        <form action="">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Employee can manage own contact information</label> <br/>
                                                                        <input type="checkbox" id="switch5" switch="bool" />
                                                                        <label for="switch5" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Employee can manage own documents</label> <br/>
                                                                        <input type="checkbox" id="switch6" switch="bool" />
                                                                        <label for="switch6" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Employee can manage own bank account</label> <br/>
                                                                        <input type="checkbox" id="switch7" switch="bool" />
                                                                        <label for="switch7" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Employee can manage own profile picture </label>  <br/>
                                                                        <input type="checkbox" id="switch8" switch="bool" checked />
                                                                        <label for="switch8" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Employee can manage own qualification </label>  <br/>
                                                                        <input type="checkbox" id="switch9" switch="bool" />
                                                                        <label for="switch9" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Employee can manage own profile information </label> <br/>
                                                                        <input type="checkbox" id="switch9" switch="bool" />
                                                                        <label for="switch9" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Employee can manage own work experience </label>  <br/>
                                                                        <input type="checkbox" id="switch10" switch="bool" />
                                                                        <label for="switch10" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Employee can manage own social information </label>  <br/>
                                                                        <input type="checkbox" id="switch11" switch="bool" checked />
                                                                        <label for="switch11" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>

                                                                <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                                        <h4>Payroll Configuration</h4>
                                                        <form action="">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="templating-select">
                                                                        <label class="form-label">Payslip password format</label> <br/>
                                                                        <select class="form-control select2-templating" style={{width: "100%"}}>

                                                                            <option value="DOB">Employee Date Of Birth (22/06/2023)</option>
                                                                            <option value="CN">Employee Contact Number (123456789)</option>
                                                                            <option value="EMAIL">Employee Email Address (example@mail.com)</option>
                                                                        </select>

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Enable Password generate for payslip </label>  <br/>
                                                                        <input type="checkbox" id="switch12" switch="bool" />
                                                                        <label for="switch12" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Is Half Monthly?</label>
                                                                        <select class="form-select" id="">
                                                                            <option selected="">Choose...</option>
                                                                            <option value="No">No </option>
                                                                            <option value="Yes">Yes</option>

                                                                        </select>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
                                                        </form>
                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-email-notifications" role="tabpanel" aria-labelledby="v-pills-email-notifications">
                                                        <h4>Email Notifications</h4>
                                                        <form action="">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Enable email notifications </label>  <br/>
                                                                        <input type="checkbox" id="switch13" switch="bool" checked />
                                                                        <label for="switch13" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Email Type</label>
                                                                        <select class="form-select" id="">
                                                                            <option selected="">Choose...</option>
                                                                            <option value="SMTP">SMTP </option>
                                                                            <option value="Phpmail">PHP Mail</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
                                                        </form>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-files-manager" role="tabpanel" aria-labelledby="v-pills-files-manager">
                                                        <h4>Files Manager Configuration</h4>
                                                        <form action="">
                                                            <div class="row">
                                                                <div class="col-md-6">

                                                                    <div class="mb-3 position-relative">
                                                                        <label for="validationTooltipUsername" class="form-label">Max. File Size</label>
                                                                        <div class="input-group">

                                                                            <input type="text" class="form-control" id="" placeholder="" aria-describedby="" required=""/>
                                                                            <div class="input-group-prepend">
                                                                                <span class="input-group-text" id="">MB</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label class="form-label">Allowed Extension</label>

                                                                        <input type="text" name="input-multiple" class="form-control" placeholder=""/>

                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="formrow-firstname-input" class="form-label">Employee can view/download all department files </label>  <br/>
                                                                        <input type="checkbox" id="switch14" switch="bool" />
                                                                        <label for="switch14" data-on-label="Yes" data-off-label="No"></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
                                                        </form>

                                                    </div>
                                                    <div class="tab-pane fade" id="v-pills-performance" role="tabpanel" aria-labelledby="v-pills-performance">
                                                        <h4>Performance Configuration</h4>
                                                        <form action="">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label class="form-label">Allowed Extension</label>

                                                                        {/* <!-- <select class="select2 form-control select2-multiple"
                                                                    multiple="multiple" data-placeholder="Choose ...">                                                                
                                                                        <option value="CE">Customer Experience</option>
                                                                        <option value="Marketing">Marketing</option>
                                                                        <option value="admin">Administration</option>                                                                    
                                                                 </select> --> */}
                                                                        <input type="text" name="input-multiple" class="form-control" placeholder=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="mb-3">
                                                                        <label class="form-label">Organizational Competencies</label>

                                                                        {/* <!-- <select class="select2 form-control select2-multiple"
                                                                    multiple="multiple" data-placeholder="Choose ...">                                                                
                                                                        <option value="ps">Professionalism</option>
                                                                        <option value="int">Integrity</option>
                                                                        <option value="attand">Attendance</option>                                                                    
                                                                 </select> --> */}

                                                                        <input type="text" name="input-multiple" class="form-control" placeholder=""/>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" class="btn btn-primary waves-effect waves-light w-25">SAVE</button>
                                                        </form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card --> */}
                            </div>
                        </div>
    )
};
