import { Link } from "react-router-dom";
import MainPage from "../../Components/Common/MainPage";

export default function HRReport() {
    return(
        <MainPage title={"HR Reports"}>
            <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-body">                           

                                <ol class="list-report">
                                    <li><Link to="/payslipreport">Payslip Report <i class="fas fa-arrow-right"></i></Link></li>
                                    <li><Link to="/attendancereport">Attendance Report <i class="fas fa-arrow-right"></i></Link></li>
                                    <li><Link to="/userrolereport">User Roles Report <i class="fas fa-arrow-right"></i></Link></li>
                                    <li><Link to="/employeereport">Employees Report <i class="fas fa-arrow-right"></i></Link></li>
                                </ol>
                            </div>
                        </div>
                        {/* <!-- end card --> */}
                    </div>
                  </div>
        </MainPage>
    )
};
