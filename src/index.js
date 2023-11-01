import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResetPass from './Pages/ForgetPassword/ForgetPassword';
import Common from './Components/Common/Common';
import HRDashboard from './Pages/HRDashboard/HRDashboard';
import Login from './Pages/Login/Login';
import Employees from './Pages/Staff/Employees/Employees';
import EmployeeBenefit from './Pages/Staff/EmployeeBenefit/EmployeeBenefit';
import RoleAndPrivillage from './Pages/Staff/RoleAndPrivillage/RoleAndPrivillage';
import StaffDirectory from './Pages/Staff/StaffDirectory.js/StaffDirectory';
import EmployeeExit from './Pages/Staff/EmployeeExit/EmployeeExit';
import ExpiredDocument from './Pages/Staff/ExpiredDocument/ExpiredDocument';
import LastLogin from './Pages/Staff/LastLogin/LastLogin';
import Awards from './Pages/Staff/Awards/Awards';
import Transfer from './Pages/Staff/Transfer/Transfer';
import Resignation from './Pages/Staff/Resignation/Resignation';
import Travel from './Pages/Staff/Travels/Travel';
import Promotions from './Pages/Staff/Promotions/Promotions';
import Complaints from './Pages/Staff/Complaints.js/Complaints';
import Warnings from './Pages/Staff/Warnings/Warnings';
import Terminations from './Pages/Staff/Termination/Terminations';
import Company from './Pages/Organizations/Company/Company';
import OfficialDocuments from './Pages/Organizations/OfficialDocuments/OfficialDocuments';
import Locations from './Pages/Organizations/Locations/Locations';
import Departments from './Pages/Organizations/Departments/Departments';
import SubDepartment from './Pages/Organizations/SubDepartments/SubDepartment';
import Grouping from './Pages/Organizations/Grouping/Grouping';
import Announcements from './Pages/Organizations/Announcements/Announcements';
import CompanyPolicy from './Pages/Organizations/CompanyPolicy/CompanyPolicy';
import Designation from './Pages/Organizations/Designations/Designation';
import TimesheetDashboard from './Pages/TitmeSheet/TimesheetDashboard/TimesheetDashboard';
import Attendances from './Pages/TitmeSheet/Attendance/Attendances';
import MonthlyTimesheet from './Pages/TitmeSheet/MonthlyTimesheet/MonthlyTimesheet';
import TimesheetCalender from './Pages/TitmeSheet/TimesheetCalender/TimesheetCalender';
import DateWiseAttendance from './Pages/TitmeSheet/DateWiseAttendance/DateWiseAttendance';
import UpdateAttendance from './Pages/TitmeSheet/UpdateAttendance/UpdateAttendance';
import OvertimeRequest from './Pages/TitmeSheet/OvertimeRequest/OvertimeRequest';
import OfficeShifts from './Pages/TitmeSheet/OfficeShifts/OfficeShifts';
import ManageHolidays from './Pages/TitmeSheet/ManageHolidays/ManageHolidays';
import ManageLeave from './Pages/TitmeSheet/ManageLeaves/ManageLeave';
import LeaveStatus from './Pages/TitmeSheet/LeaveStatus/LeaveStatus';
import PayRolls from './Pages/PayRolls/PayRolls';
import EFillingDeails from './Pages/EFillings/EFillingDetails/EFillingDeails';
import CPFSubmission from './Pages/EFillings/CPFSubmission/CPFSubmission';
import IRA8Form from './Pages/EFillings/IRA8Form/IRA8Form';
import Appendix8A from './Pages/EFillings/Appendix8A/Appendix8A';
import Appendix8B from './Pages/EFillings/Appendix8B/Appendix8B';
import IRASSubmission from './Pages/EFillings/IRASSubmission/IRASSubmission';
import HRCalender from './Pages/HRCalender/HRCalender';
import HRImport from './Pages/HRImport/HRImport';
import Payslip from './Pages/Reports/Payslip/Payslip';
import Attendance from './Pages/Reports/Attendance/Attendance';
import UserRoles from './Pages/Reports/UserRole/UserRoles';
import Employee from './Pages/Reports/Employee/Employee';
import HRReport from './Pages/HRReport/HRReport';
import FileManager from './Pages/FileManager/FileManager';
import Language from './Pages/System/MultiLanguage/Language';
import Settings from './Pages/System/Setting/Settings';
import SetupModules from './Pages/System/SetupModules/SetupModules';
import ThemeSetting from './Pages/System/ThemeSetting/ThemeSetting';
import PaymentGateway from './Pages/System/PaymentGateway/PaymentGateway';
import Constants from './Pages/System/Constants/Constants';
import DatabseBackup from './Pages/System/DatabaseBackup/DatabseBackup';
import StaffDashboard from './Pages/Staff/StaffDashboard/StaffDashboard';
import Practice from './practice';
import AuthProvider from './Context/AuthContext';
import SettingProvider from './Context/settingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingProvider>
  <AuthProvider>
    
  <BrowserRouter>

    <Routes>      <Route path='login' element={<Login />} />
      <Route path='reset' element={<ResetPass />} />
      <Route path='' element={<Common><HRDashboard /></Common> }/>
      
      <Route path='employees' element={<Common><Employees/></Common>} />
      <Route path="staffDashboard" element={<Common><StaffDashboard/></Common>}/>
      <Route path='employeeBenefit' element={<Common><EmployeeBenefit/></Common>}/>
      <Route path="roleAndPrivillage" element={<Common><RoleAndPrivillage/></Common>}/>
      <Route path="staffDirectory" element={<Common><StaffDirectory/></Common>}/>
      <Route path="employeeExit" element={<Common><EmployeeExit/></Common>}/>
      <Route path="expiredDocument" element={<Common><ExpiredDocument/></Common>}/>
      <Route path="lastLogin" element={<Common><LastLogin/></Common>}/>
      <Route path="awards" element={<Common><Awards/></Common>}/>
      <Route path="transfer" element={<Common><Transfer/></Common>}/>
      <Route path="resignations" element={<Common><Resignation/></Common>}/>
      <Route path="travels" element={<Common><Travel/></Common>}/>



      <Route path="promotions" element={<Common><Promotions/></Common>}/>
      <Route path="complaints" element={<Common><Complaints/></Common>}/>
      <Route path="warnings" element={<Common><Warnings/></Common>}/>
      <Route path="terminations" element={<Common><Terminations/></Common>}/>
      <Route path='company' element={<Common><Company/></Common>}/>
      <Route path='officialDocument' element={<Common><OfficialDocuments/></Common>}/>
      <Route path='locations' element={<Common><Locations/></Common>}/>
      <Route path='department' element={<Common><Departments/></Common>}/>
      <Route path='subdepartment' element={<Common><SubDepartment/></Common>}/>
      <Route path='grouping' element={<Common><Grouping/></Common>}/>
      <Route path='announcements' element={<Common><Announcements/></Common>}/>
      <Route path='companyPolicy' element={<Common><CompanyPolicy/></Common>}/>
      <Route path='designations' element={<Common><Designation/></Common>}/>
      <Route path='timesheetDashboard' element={<Common><TimesheetDashboard/></Common>}/>
      <Route path='attandance' element={<Common><Attendances/></Common>}/>
      <Route path='monthlyTimesheet' element={<Common><MonthlyTimesheet/></Common>}/>
      <Route path='timesheetCalender' element={<Common><TimesheetCalender/></Common>}/>
      <Route path='dateWiseAttendance' element={<Common><DateWiseAttendance/></Common>}/>
      <Route path='updateAttandance' element={<Common><UpdateAttendance/></Common>}/>
      <Route path='overtimeRequest' element={<Common><OvertimeRequest/></Common>}/>
      <Route path='officeShifts' element={<Common><OfficeShifts/></Common>}/>
      <Route path='manageHolidays' element={<Common><ManageHolidays/></Common>}/>
      <Route path='manageLeaves' element={<Common><ManageLeave/></Common>}/>
      <Route path='leaveStatus' element={<Common><LeaveStatus/></Common>}/>
      <Route path='payroll' element={<Common><PayRolls/></Common>}/>
      <Route path='eFillingDetails' element={<Common><EFillingDeails/></Common>}/>
      <Route path='cpfSubmission' element={<Common><CPFSubmission/></Common>}/>



      <Route path='ira8Form' element={<Common><IRA8Form/></Common>}/>
      <Route path='appendix8A' element={<Common><Appendix8A/></Common>}/>
      <Route path='appendix8B' element={<Common><Appendix8B/></Common>}/>
      <Route path='ir8s' element={<Common></Common>}/>
      <Route path='irasSubmission' element={<Common><IRASSubmission/></Common>}/>
      <Route path='hrCalender' element={<Common><HRCalender/></Common>}/>
      <Route path='hrImport' element={<Common><HRImport/></Common>}/>
      <Route path='hrReport' element={<Common><HRReport/></Common>}/>
      <Route path='fileManager' element={<Common><FileManager/></Common>}/>
      <Route path='multiLanguage' element={<Common><Language/></Common>}/>
      <Route path='setting' element={<Common><Settings/></Common>}/>
      <Route path='setupModules' element={<Common><SetupModules/></Common>}/>
      <Route path='themeSetting' element={<Common><ThemeSetting/></Common>}/>
      <Route path='paymentGateway' element={<Common><PaymentGateway/></Common>}/>
      <Route path='constants' element={<Common><Constants/></Common>}/>
      <Route path='databaseBackup' element={<Common><DatabseBackup/></Common>}/>
      <Route path='logout' element={<Common></Common>}/>
      <Route path='payslipreport' element={<Common><Payslip/></Common>}/>
      <Route path='attendancereport' element={<Common><Attendance/></Common>}/>
      <Route path='userrolereport' element={<Common><UserRoles/></Common>}/>
      <Route path='employeereport' element={<Common><Employee/></Common>}/>
      <Route path="practice" element={<Practice/>}/>
      </Routes>
  </BrowserRouter>
  
  </AuthProvider>
  </SettingProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
