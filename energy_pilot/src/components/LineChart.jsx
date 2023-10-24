import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function LineChart({chartData}) {
    return <Line data={chartData} options={{
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function(value, index, ticks) {
                return value + ' kWh';
              },
              stepSize: 2 ,
            },
          },
        },
        elements: {
            line: {
              tension: 3,
              cubicInterpolationMode: 'monotone',
            }
          }
        }} plugins={{
            legend: {
              display: false,
              labels: {
                font: {
                  size: 12,
                  family: "'Plus Jakarta Sans', sans-serif",
                  lineHeight: 1,
                  weight: 600
                }
              }
            }
          }}
          />
}