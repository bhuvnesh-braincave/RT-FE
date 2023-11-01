import MainPage from "../../../Components/Common/MainPage";
import Filter from "./Filter";
import Table from "./Table";

export default function Attendance() {
    return(
        <MainPage title={"HR Attendance"}>
            <Filter/>
            <Table />
        </MainPage>
    )
};
