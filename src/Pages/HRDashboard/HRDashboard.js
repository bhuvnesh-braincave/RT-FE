
// import CardsWithData from "../../Components/CardsWithData/CardsWithData";
import { useContext } from "react";
import CardsWithData from "../../Components/CardsWithData/CardsWithData";
import MainPage from "../../Components/Common/MainPage";
import Calender from "./SubComponent/Calender";
import EmployerrSummery from "./SubComponent/EmployerrSummery";
import { authContext } from "../../Context/AuthContext";
import { FormattedMessage } from "react-intl";
// import EmployeeStatics from "./SubComponent/EmployeeStatics";
// import Expenses from "./SubComponent/Expenses";
// let cardData = [
//   {
//     title:"Total Empolyee",
//     icon:"bi bi-person me-2",
//     data:"150",
//     bg:"secondary",
//     color:"white"
//   },
//   {
//     title:"Total Present",
//     icon:"bi bi-person me-2",
//     data:"90",
//     bg:"primary",
//     color:"white"
//   },
//   {
//     title:"Total Absent",
//     icon:"bi bi-person me-2",
//     data:"60",
//     bg:"warning",
//     color:"white"
//   },
//   {
//     title:"Total Task",
//     icon:"bx bx-task me-2",
//     data:"150",
//     bg:"info",
//     color:"white"
//   },
//   {
//     title:"Total Empolyee",
//     icon:"bx bxs-briefcase me-2",
//     data:"150",
//     bg:"dark",
//     color:"white"
//   },

// ]


// export default function HRDashboard() {
//   return (
//     <MainPage title={"WELCOME BACK HR BHUVNESH"}>
//       <CardsWithData cards={cardData} />
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="card">
//             <div className="card-body">
//               <div class="clearfix">
//                 <div class="float-end">
//                   <div class="input-group input-group-sm">
//                     <select class="form-select form-select-sm">
//                       <option value="JA" selected="">
//                         Jan
//                       </option>
//                       <option value="DE">Dec</option>
//                       <option value="NO">Nov</option>
//                       <option value="OC">Oct</option>
//                     </select>
//                     <label class="input-group-text">Month</label>
//                   </div>
//                 </div>
//                 <h4 class="card-title mb-4">Earning</h4>
//               </div>
//               <div className="row">
//                 <Expenses />
//                 <EmployeeStatics />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </MainPage>
//   );
// }

export default function HRDashboard() {
  const {name} = useContext(authContext)
  let year = new Date().getFullYear();
  return(
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
        

        
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18"><FormattedMessage id="welcome" defaultMessage={"Welcome"}/> back {name || "Souvik"}</h4>
              </div>
            </div>
          </div>
      <CardsWithData />
      <EmployerrSummery />
      <Calender />
    <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                                
                           {year} © Braincave HRMS.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by
                                <a href="https://braincavesoft.com/" target="_blank">Braincave Software Private
                                    Limited</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </div>
      </div>
  )
};

