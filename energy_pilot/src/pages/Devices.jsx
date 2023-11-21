import { useState, useEffect } from "react";

import { getDevices } from "../data/api";

import DeviceContainer from "../components/DeviceContainer";

export default function Devices() {
    const [devices, setDevices] = useState([]);
    const [devicesOrder, setDevicesOrder] = useState({});

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
            console.log(devicesOrder)
        }
    }, [devices])

    return (
        <div className="p-4">
            <div className="flex justify-between">
                <h1 className="text-white uppercase w-full md:w-1/2">DISPOSITIVOS</h1>
                <input type="text" className="text-white px-4 py-2 bg-dark-gray rounded-sm outline-none w-full md:w-1/2" 
                placeholder="Registre un tipo de dispositivo "/>
            </div>
            <div className="my-2">
                <div className="w-full md:w-1/2 lg:w-8/12">
                    {Object.keys(devicesOrder).map((key)=>{
                        return <DeviceContainer key={key} title={key} devices={devicesOrder[key]}/>
                    })}
                </div>
            </div>
        </div>
    );
}