import { useEffect, useRef, useState } from "react";

import { Doughnut  } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function DoughnutChart({chartData}) {

    return <Doughnut  data={chartData} options={{
        plugins: {
          legend: {
            display: false
          },
          annotation: {
            annotations: {
              centerText: {
                type: "text",
                x: "50%",
                y: "50%",
                backgroundColor: "transparent",
                border: "0",
                text: "Texto en el centro",
                font: {
                  size: 16,
                  weight: "bold",
                },
                enabled: true,
              },
            },
          },
        }
      }}
    />
}