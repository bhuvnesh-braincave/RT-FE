import MainPage from "../../Components/Common/MainPage";
import Tables from "./Tables";
import Tabs from "./Tabs";

export default function FileManager() {
    return(
        <MainPage title={"Files Manager"}>
            <div className="row">
                <Tabs/>
                <Tables/>
            </div>
        </MainPage>
    )
};
