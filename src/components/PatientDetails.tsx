import { toast } from "react-toastify";
import { usePatientStore } from "../store";
import type { Patient } from "../types";
import PatientDetailElement from "./PatientDetailElement";

type PatientDetailsProps = {
  patient: Patient;
};
export default function PatientDetails({ patient }: PatientDetailsProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);
  const handleDelete = () => {
    deletePatient(patient.id);
    toast(`Paciente ${patient.name} eliminado`, {
      type: "error",
    });
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailElement label="ID" detail={patient.id} />
      <PatientDetailElement label="Nombre" detail={patient.name} />
      <PatientDetailElement label="Propietario" detail={patient.caretaker} />
      <PatientDetailElement label="Email" detail={patient.email} />
      <PatientDetailElement
        label="Fecha Alta"
        detail={patient.date.toString()}
      />
      <PatientDetailElement label="Sintomas" detail={patient.symptoms} />
      <div className="flex just gap-3 mt-10 flex-col md:flex-row">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
