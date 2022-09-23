import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useState,
  useCallback,
} from 'react';
import { TextField } from '../../../components';
import { Appointment } from '../../../ts/global';
import * as styles from './styles.module.css';

export interface AddAppointmentFormProps {
  onAddAppointment: (appointment: Appointment) => void;
}

const generateId = () => (Date.now() * Math.random()).toString();

export const AddAppointmentForm: FC<AddAppointmentFormProps> = ({
  onAddAppointment,
}) => {
  const [appointment, setAppointment] = useState<Appointment>({
    id: generateId(),
    clinicianName: '',
    status: 'ACTIVE',
    startDate: '',
    endDate: '',
    patient: {
      id: generateId(),
      name: '',
    },
  });

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'patientName')
      return setAppointment((prevState) => ({
        ...prevState,
        patient: {
          ...prevState.patient,
          name: value,
        },
      }));

    setAppointment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddAppointment(appointment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset}>
        <legend>Add new appointment</legend>
        <TextField
          required
          placeholder="Enter clinician name"
          label="Clinician name:"
          id="clinicianName"
          name="clinicianName"
          type="text"
          value={appointment.clinicianName}
          onChange={handleChange}
        />

        <TextField
          required
          placeholder="Enter start date"
          label="Start date:"
          id="startDate"
          name="startDate"
          type="datetime-local"
          value={appointment.startDate}
          onChange={handleChange}
        />

        <TextField
          required
          placeholder="Enter end date"
          label="End date:"
          id="endDate"
          name="endDate"
          type="datetime-local"
          value={appointment.endDate}
          onChange={handleChange}
        />

        <TextField
          required
          placeholder="Enter patient name"
          label="Patient name:"
          id="patientName"
          name="patientName"
          type="text"
          value={appointment.patient.name}
          onChange={handleChange}
        />

        <button type="submit">Add appointment</button>
      </fieldset>
    </form>
  );
};
