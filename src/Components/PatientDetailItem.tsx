type PatientDetailItetmProps = {
    label: string
    data: string
}

export default function PatientDetailItem({label, data} : PatientDetailItetmProps) {
    return (
        <p className="font-bold mb-3 text-gray-700 uppercase"> {label}: {''}
            <span className="font-normal normal-case">{data}</span>
        </p>    
    )
}
