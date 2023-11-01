import MainPage from "../../Components/Common/MainPage";

export default function HRImport() {
    return(
        <MainPage title={"HR Imports"}>
            <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-body">                           

                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link mb-2 active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Import Employees</a>
                                        <a class="nav-link mb-2" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Import Attendance</a>
                                        <a class="nav-link mb-2" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Import Leads</a>
                                       
                                        </div>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="tab-content text-muted mt-4 mt-md-0" id="v-pills-tabContent">
                                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                              <h4>Import Employees - Import CSV file only
                                            </h4>
                                            <p>The first line in downloaded csv file should remain as it is. Please do not change the order of columns in csv file.</p>
                                            <p>The correct column order is (First Name, Last Name, Username, Email, Password, Employee ID, Date of Joining, Gender, Date of Birth, Contact Number, Address) and you must follow the csv file, otherwise you will get an error while importing the csv file.</p>
                                            <button class="btn btn-primary"> <i class="fa fa-download"></i> Download Sample Files</button> <br/>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="mt-3">
                                                        <label for="">Upload File</label>
                                                        <input type="file" class="form-control" placeholder=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                              
                                               <h4>Import Attendance - Import CSV file only</h4>
                                               <p>The first line in downloaded csv file should remain as it is. Please do not change the order of columns in csv file.</p>
                                               <p>The correct column order is (Employee ID, Attendance Date, Clock In Time and Date, Clock Out Time and Date) and you must follow the csv file, otherwise you will get an error while importing the csv file.</p>
                                               <button class="btn btn-primary"> <i class="fa fa-download"></i> Download Sample Files</button> <br/>
                                               <div class="row">
                                                   <div class="col-md-4">
                                                       <div class="mt-3">
                                                           <label for="">Upload File</label>
                                                           <input type="file" class="form-control" placeholder=""/>
                                                       </div>
                                                   </div>
                                               </div>
                                            </div>
                                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                                <h4>Import Leads - Import CSV file only</h4>
                                                <p>The first line in downloaded csv file should remain as it is. Please do not change the order of columns in csv file.</p>
                                                <p>The correct column order is (Contact Person, Email Address, Password, Contact Number, Company Name, Website URL, Address 1, Address 2, City, State, Zip Code, Country (Use Country ID) ) and you must follow the csv file, otherwise you will get an error while importing the csv file.</p>
                                                <button class="btn btn-primary"> <i class="fa fa-download"></i> Download Sample Files</button> <br/>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="mt-3">
                                                            <label for="">Upload File</label>
                                                            <input type="file" class="form-control" placeholder=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end card --> */}
                    </div>
                  </div>
        </MainPage>
    )
};
