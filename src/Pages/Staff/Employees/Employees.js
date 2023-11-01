
import MainPage from "../../../Components/Common/MainPage";
import ListAllEmployees from "./ListAllEmployees";
import EmployeeSummery from "./SubComponent/EmployeeSummery";



export default function Employees() {
    
    return(
        <MainPage title={"EMPOLYEES"}>
            <EmployeeSummery />
            <ListAllEmployees />
            
        </MainPage>
    )
};
