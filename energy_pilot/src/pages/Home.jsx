import{ useState, useEffect } from "react";

import Gadget from "../components/Gadget";
import LineChart from "../components/LineChart";
import { getData } from "../data/fakeApi";

export default function Home({}) {

    const [data, setData] = useState({})

    useEffect(() => {
      const api = async () => {
        const x = (await getData()).data;
        setData({
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
      console.log(data);
      api();
    }, [])

    return (
        <div className="w-full flex justify-between gap-4">
            <div className="flex-1">
                <div className="w-full rounded bg-dark-gray p-4 mb-4">
                  {Object.keys(data).length > 0 && <LineChart chartData={data} />}
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
            <div className="rounded bg-dark-gray flex justify-between p-4">
                <h2 className="text-white font-bold">
                Información del Consumo semanal
                </h2>
            </div>   
        </div>
    )
}