import { usePatientStore } from "../Store"
import PacientDetails from "./PacientDetails"

export default function PacientsList() {
    const { patients } = usePatientStore()
    
    return (
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
                    </p>
                    {patients.map(patient => (
                        <PacientDetails
                            key={patient.id}
                            patient={patient}
                        />
                    ))}
                </>
            ):(
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacenttes {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}
