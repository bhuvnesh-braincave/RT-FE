import MainPage from "../../../Components/Common/MainPage";
import Filter from "./Filter";
import Table from "./Table";

export default function Attendances() {
    return(
        <MainPage title={"Attandance"}>
            <Filter/>
            <Table/>
        </MainPage>
    )
};
