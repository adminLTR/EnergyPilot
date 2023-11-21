import DeviceContainer from "../components/DeviceContainer";

export default function Devices() {
    return (
        <div className="p-4">
            <div className="flex justify-between">
                <h1 className="text-white uppercase w-full md:w-1/2">DISPOSITIVOS</h1>
                <input type="text" className="text-white px-4 py-2 bg-dark-gray rounded-sm outline-none w-full md:w-1/2" 
                placeholder="Registre un tipo de dispositivo "/>
            </div>
            <div className="my-2">
                <div className="w-full md:w-1/2 lg:w-8/12">
                    <DeviceContainer title={"Televisores"}/>
                    <DeviceContainer title={"Ventiladores"}/>
                    <DeviceContainer title={"Luces"}/>
                </div>
            </div>
        </div>
    );
}