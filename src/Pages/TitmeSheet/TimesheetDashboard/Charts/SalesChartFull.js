
import ReactApexChart from "react-apexcharts"

const SalesChartFull = () => {
    const series = [2132, 1763, 973]
    const options = {
      labels: ["Product A", "Product B", "Product C"],
      colors: ["#34c38f", "#556ee6", "#f46a6a"],
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "middle",
        floating: false,
        fontSize: "14px",
        offsetX: 0,
        offsetY: -10,
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 240,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    }
  return (
    <>
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      height="380"
    />
    <div class="text-center text-muted">
      <div class="row">
        <div class="col-4">
        <h5>$ 2,132</h5>
        </div>
        <div class="col-4">
        <h5>$ 1,763</h5>
        </div>
        <div class="col-4">
          <h5>$ 973</h5>
        </div>
      </div>
    </div>
  </>
  )
}

export default SalesChartFull
