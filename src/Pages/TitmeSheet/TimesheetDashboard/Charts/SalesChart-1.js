import ReactApexChart from "react-apexcharts"


export default function SalesChart_1() {
    const data = [2132, 1763, 973]
    const series = data.map(ele=>parseFloat(((ele/(2132+1763+973))*100).toFixed(1)))
    const options = {
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return (2132+1763+973)
              },
            },
          },
        },
      },
  
      labels: ["Product A", "Product B", "Product C"],
      colors: ["#34c38f", "#556ee6", "#f46a6a"],
    }
  
    return (
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height="380"
      />
    )
  }
