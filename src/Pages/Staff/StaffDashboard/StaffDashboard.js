import MainPage from "../../../Components/Common/MainPage";
import Cards from "./Cards";
import Chart from "./Chart";

export default function StaffDashboard() {
  return (
    <MainPage title={"Staff Dashboard"}>
      <div class="row">
        <div class="col-xl-12">
            <Cards/>
            <Chart/>
        </div>
      </div>
    </MainPage>
  );
}
