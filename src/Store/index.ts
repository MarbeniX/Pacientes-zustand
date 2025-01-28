import { create } from 'zustand'
import { DraftPatient, Patient } from '../Types'
import { v4 as uuidv4 } from 'uuid'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient : DraftPatient) : Patient => {
    return { ...patient, id: uuidv4()}
}
//Hi there 
export const usePatientStore = create<PatientState>()(
    devtools(
        persist((set) => ({
            patients: [],
            activeId: '',
            addPatient: (data) => {
                const createNewPatient = createPatient(data)
                set((state) => ({
                    patients: [...state.patients, createNewPatient]
                }))
            },
            deletePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter(patient => patient.id !== id)
                }))
            },
            getPatientById: (id) => {
                set(() => ({
                    activeId: id
                }))
            },
            updatePatient: (data) => {
                set((state) => ({
                    patients: state.patients.map(patient => patient.id === state.activeId ? {id: state.activeId, ...data} : patient),
                    activeId: ''
                }))
            }
        }), {
            name: 'patient-storage',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
))