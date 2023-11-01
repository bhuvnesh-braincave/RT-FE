// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// const data = [
//     {
//       id: '1',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       id: '2',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       id: '3',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       id: '4',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       id: '5',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       id: '6',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       id: '7',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];

// export default function EmployeeStatics() {
//     return(
//             <LineChart
//                 width={600}
//                 height={400}
//                 data={data}
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                   }}
//             >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="id" />
//             <YAxis />
//             <Tooltip/>
//             <Legend />
//             <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
//             </LineChart>
//     )
// };


import ReactApexChart from "react-apexcharts"

export default function EmployeeStatics() {
  const series = [
    {
      name: "series1",
      data: [34, 40, 28, 52, 42, 109, 100],
    },
  ]

  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: ["#556ee6", "#34c38f"],
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  }
  
  return(
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height="350"
    />
  )
};
