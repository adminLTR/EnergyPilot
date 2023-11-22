import { useEffect, useRef, useState } from "react";

import { Doughnut  } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function DoughnutChart({chartData, devicesKey, colors}) {

    const [devicesObj, setDevicesObj] = useState([]);
    const [lbs, setLbs] = useState([]);

    useEffect(()=>{
      for (let i = 0; i < colors.length; i++) {
        setDevicesObj(
          [...devicesObj, 
          {
          color: colors[i],
          dev: devicesKey[i],
        }])
      }
    }, []);

    useEffect(()=>{
      setLbs(devicesObj);
    }, [devicesObj])

    return <div><div className="relative"><Doughnut  data={chartData} options={{
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
    <div className="absolute relative-center text-white text-center font-bold text-xl"><p>Total</p><p>49,82kWh</p></div>
    </div>
    <div className="p-2">
      {devicesKey.map((device)=>{
        return <div key={device} className="flex gap-2 items-center my-2">
          <div className="color" style={{backgroundColor: colors[devicesKey.indexOf(device)]}}></div>
          <p className="text-white">{device}</p>
        </div>
      })}
    </div>
    </div>
}