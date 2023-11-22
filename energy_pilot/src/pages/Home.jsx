import{ useState, useEffect } from "react";

import Gadget from "../components/Gadget";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import { getData } from "../data/fakeApi";

import { getDevices } from "../data/api";

import { getSumDevices, sum } from "../helpers/helpers";

export default function Home({}) {

    const [dataLine, setDataLine] = useState({});
    const [dataDoughnut, setDataDoughnut] = useState({});

    const [devices, setDevices] = useState([]);
    const [devicesOrder, setDevicesOrder] = useState({});

    const [colors, setColors] = useState([]);
    const [devicesKey, setDevicesKey] = useState([]);

    useEffect(()=>{
        const data = async ()=> {
            const x = (await getDevices()).data
            setDevices(x);
        }
        data();
    }, []);

    useEffect(() => {
        const x = {}
        if (devices) {
            for (let i = 0; i < devices.length; i++) {
                if (x[devices[i].type]) {
                    x[devices[i].type].push(devices[i]);
                } else {
                    x[devices[i].type] = [devices[i]];
                }
            }
            setDevicesOrder(x);
        }
        
    }, [devices]);
    
    useEffect(() => {
      setColors(Object.keys(devicesOrder).map(key => {
        return `rgb(${Math.random()*(226)}, ${Math.random()*(226)}, ${Math.random()*(226)})`
      }));
      setDevicesKey(Object.keys(devicesOrder));
      setDataDoughnut({
        labels: devicesKey,
        datasets: [{
          data: getSumDevices(devicesOrder),
          borderRadius: 5,
          cutout: 130,
          backgroundColor: colors
          ,      
          hoverOffset: 4,
          spacing: 8,
          borderColor:[
            'rgb(23, 23, 23)'
          ],
        }]
      })
    }, [devicesOrder]);

    useEffect(() => {
        const d = async () => {
          const x = (await getData()).data;
          setDataLine({
            labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            datasets: [{
              label: "Estadísticas de consumo semanal",
              data: [x[0].kwh_1, x[0].kwh_2, x[0].kwh_3, x[0].kwh_4, x[0].kwh_5, x[0].kwh_6, x[0].kwh_7],
              borderWidth: 4.9,
              borderColor: 'rgba(80, 10, 163, 0.8)',
              borderRadius: true,
            }]
          })
        }
        d();
    }, [devicesOrder]);

    return (
        <div className="w-full block lg:flex justify-between gap-4">
            <div className="w-full lg:w-9/12">
                <div className="w-full center rounded bg-dark-gray p-4 mb-4">
                  <div className="w-full md:w-10/12 lg:w-9/12">
                    {Object.keys(dataLine).length > 0 && <LineChart chartData={dataLine}/>}
                  </div>
                </div>
                <div className="w-full rounded bg-dark-gray p-4 mb-4">
                    <Gadget title={"Consumo habitual"} number={"49,82"} units={true}>
                        <p className="text-soft-gray">De 01 de Enero de 2023 hasta 05 Marzo de 2023</p>
                    </Gadget>
                </div>
                <div className="w-full rounded bg-dark-gray flex justify-between p-4">
                    <Gadget title={"Consumo de esta semana"} number={"89,16"} units={false}>
                        <p className="text-soft-gray"><span className="text-green-500">2,8%</span> mayor que la semana pasada</p>
                    </Gadget>
                    <div className="line"></div>
                    <Gadget title={"Consumo recomendado"} number={"47,31"} units={true}>
                        <p className="text-red-400">Basado en su consumo habitual y en datos de la INEI</p>
                    </Gadget>
                </div>            
            </div>
            <div className="w-full lg:w-3/12 rounded bg-dark-gray flex flex-col p-4">
                <h2 className="text-white font-bold text-center mb-5">
                Información del Consumo semanal
                </h2>
                <div className="w-full center">
                {Object.keys(dataLine).length > 0 && <DoughnutChart chartData={dataDoughnut} devicesKey={devicesKey} colors={colors}/>}
                </div>
            </div>   
        </div>
    )
}