import MainPage from "../../../Components/Common/MainPage";
import LatestHoliday from "./LatestHoliday";
import LatestLeave from "./LatestLeave";
import LatestRequest from "./LatestRequest";
import SalesReport from "./SalesReport";
import TimesheetSummery from "./TimesheetSummery";

export default function TimesheetDashboard() {
    return(
        <MainPage title={"Timesheet Dashboard"}>
            <TimesheetSummery/>
            <SalesReport/>
            <LatestLeave/>
            <LatestHoliday/>
            <LatestRequest/>
        </MainPage>
    )
};
