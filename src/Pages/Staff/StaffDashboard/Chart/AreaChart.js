import ReactApexChart from "react-apexcharts"

export default function AreaChart() {
    const options = {
    colors: ["#ccc", "#3c4ccf", "#02a499"],
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 0.1,
    },
    grid: {
      borderColor: "#f8f8fa",
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Set","Oct","Nov","Dec"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
  }
  const series = [
    {
      name: "Current",
      data: [2800, 1500, 4200, 5200, 1800, 2100, 3800, 3200, 2500, 3500, 4800, 4500],
    },
    {
      name: "Previous",
      data: [5300, 3300, 4900, 2600, 1600, 3900, 4300, 2200, 2900, 4600, 3600, 1900],
    },
  ]


    return(
        <ReactApexChart
      options={options}
      series={series}
      type="area"
      height="290"
    />
    )
};




