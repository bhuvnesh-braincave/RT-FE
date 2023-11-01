import MainPage from "../../../Components/Common/MainPage";
import Filter from "./Filter";
import Table from "./Table";

export default function MonthlyTimesheet() {
    return(
        <MainPage title={"Monthly Attandance"}>
            <Filter/>
            <Table/>
        </MainPage>
    )
};
