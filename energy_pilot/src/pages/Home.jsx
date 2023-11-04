import{ useState, useEffect } from "react";

import Gadget from "../components/Gadget";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import { getData } from "../data/fakeApi";

export default function Home({}) {

    const [dataLine, setDataLine] = useState({});
    const [dataDoughnut, setDataDoughnut] = useState({});

    useEffect(() => {
      const api = async () => {
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
        const total = x[0].kwh_1 + x[0].kwh_2 + x[0].kwh_3 + x[0].kwh_4 + x[0].kwh_5 + x[0].kwh_6 + x[0].kwh_7;
        const suma1 = total*0.3979;
        const suma2 = total*0.1059;
        const suma3 = total*0.0747;
        const suma4 = total*0.1118;
        const suma5 = total*0.2185;
        const suma6 = total*0.0908;
        setDataDoughnut({
          labels: ['Aire acondicionado','Refrigeradora','Lavadora','Televisores','Cámaras de seguridad','Luces LED'],
          datasets: [{
            data: [suma1, suma2, suma3, suma4, suma5, suma6],
            borderRadius: 5,
            cutout: 90,
            backgroundColor: [
              'rgb(255, 55, 55)', // Rojo vivo intenso
              'rgb(255, 204, 0)', // Amarillo anaranjado vivo
              'rgb(0, 204, 102)', // Verde intenso
              'rgb(51, 102, 255)', // Azul intenso
              'rgb(255, 51, 204)', // Rosa vivo intenso
              'rgb(153, 51, 255)' // Púrpura vivo intenso
            ]      
            ,      
            hoverOffset: 4,
            spacing: 8,
            borderColor:[
              'rgb(23, 23, 23)'
            ],
          }]
        },)
      }
      api();
    }, []);

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
                {Object.keys(dataLine).length > 0 && <DoughnutChart chartData={dataDoughnut}/>}
                </div>
            </div>   
        </div>
    )
}