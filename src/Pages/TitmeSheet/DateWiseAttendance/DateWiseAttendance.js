import MainPage from "../../../Components/Common/MainPage";
import Filter from "./Filter";
import Table from "./Table";

export default function DateWiseAttendance() {
    return(
        <MainPage title={"Date Wise Attandance"}>
            <Filter/>
            <Table/>
        </MainPage>
    )
};
