import { useState, useEffect } from "react";

import { getDevices } from "../data/api";
import LineChart from "../components/LineChart";
import { getData } from "../data/fakeApi";
import DeviceContainer from "../components/DeviceContainer";

export default function Devices() {
    const [devices, setDevices] = useState([]);
    const [devicesOrder, setDevicesOrder] = useState({});

    const [dataLine, setDataLine] = useState({});

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
        <div className="p-4">
            <div className="flex justify-between">
                <h1 className="text-white uppercase w-full md:w-1/2">DISPOSITIVOS</h1>
                <input type="text" className="text-white px-4 py-2 bg-dark-gray rounded-sm outline-none w-full md:w-1/2" 
                placeholder="Registre un tipo de dispositivo "/>
            </div>
            <div className="my-2">
                    {Object.keys(devicesOrder).map((key)=>{
                    return <div key={key}  className="w-full flex items-center">
                        <div className="w-full md:w-1/2 lg:w-8/12">
                            <DeviceContainer title={key} devices={devicesOrder[key]}/>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-4/12 p-2">
                            {Object.keys(dataLine).length > 0 && <LineChart chartData={dataLine}/>}
                        </div>
                    </div>
                    })}
            </div>
        </div>
    );
}