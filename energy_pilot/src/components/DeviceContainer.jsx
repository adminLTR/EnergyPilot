export default function DeviceContainer({title, devices}) {
    return (
        <div className="my-4">
            <div className="flex justify-between items-center py-2">
                <p className="text-white">
                    {title} (4)
                </p>
                <button className="btn-purple py-1 px-2 bg-dark-gray pill text-sm">
                    Agregar Dipositivo
                </button>
            </div>
            <div className="rounded-md bg-gray2 text-white p-4">
                <table className="w-full">
                    <thead className="text-light-gray font-bold"><tr>
                        <td>Nombre</td>
                        <td>Potencia nominal</td>
                        <td>Fecha de registro</td>
                        <td>Opciones</td>
                    </tr></thead>
                    <tbody className="text-soft-gray font-bold">
                        <tr>
                            <td>TV 1</td>
                            <td>125 W</td>
                            <td>02/03/2023</td>
                            <td className="flex justify-cemter gap-2 items-center">
                                <button className="btn-circle bg-green-300 text-green-700" >
                                <span class="material-symbols-outlined text-sm">
                                    edit
                                </span>
                                </button>
                                <button className="btn-circle bg-red-300 text-red-700">
                                <span class="material-symbols-outlined text-sm">
                                    delete
                                </span>
                                </button>
                                <button className="btn-circle bg-yellow-300 text-yellow-700">
                                    <span class="material-symbols-outlined text-sm">
                                        visibility
                                    </span>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>TV 2</td>
                            <td>120 W</td>
                            <td>22/03/2023</td>
                            <td className="flex justify-cemter gap-2 items-center">
                                <button className="btn-circle bg-green-300 text-green-700" >
                                <span class="material-symbols-outlined text-sm">
                                    edit
                                </span>
                                </button>
                                <button className="btn-circle bg-red-300 text-red-700">
                                    <span class="material-symbols-outlined text-sm">
                                        delete
                                    </span>
                                </button>
                                <button className="btn-circle bg-yellow-300 text-yellow-700">
                                    <span class="material-symbols-outlined text-sm">
                                        visibility
                                    </span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}