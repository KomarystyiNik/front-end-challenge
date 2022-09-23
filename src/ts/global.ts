export interface Patient {
  id: string;
  name: string;
}

export type AppointmentStatus = 'ACTIVE' | 'CANCELLED';

export interface Appointment {
  id: string;
  startDate: string;
  endDate: string;
  clinicianName: string;
  patient: Patient;
  status: AppointmentStatus;
}
