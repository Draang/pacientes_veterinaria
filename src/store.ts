//zustand como reducer con store

import { create } from "zustand";
import type { Patient } from "./types";
type PatientState = {
  patients: Patient[];
};
export const usePatientStore = create<PatientState>(() => ({
  //state y funciones
  patients: [],
}));
