

export default function PatientDetailElement({ label, detail }: { label: string, detail: string }) {
    return (
        <p className="font-bold mb-3 text-gray-700 uppercase">{label}:{' '} <span className="font-normal normal-case">{detail}</span></p>
    )
}
