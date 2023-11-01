import MainPage from "../../Components/Common/MainPage";
import EmployeeSummery from "./EmployeeSummery";
import Table from "./Table";

export default function PayRolls() {
    return(
        <MainPage title={"PAYROLLS"}>
            <EmployeeSummery/>
            <Table/>
        </MainPage>
    )
};
