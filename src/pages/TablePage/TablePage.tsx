import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import { appointments as savedAppointments } from '../../data';
import { Appointment } from '../../ts/global';
import { GroupByType, parseAppointments } from '../../utils/appointmentUtils';
import {
  AddAppointmentForm,
  DefaultTable,
  GroupBySelector,
  GroupedTable,
} from './components';
import * as styles from './styles.module.css';

export interface TablePageProps {}

export const TablePage: FC<TablePageProps> = (props) => {
  const [groupBy, setGroupBy] = useState<GroupByType | 'default'>('default');
  const [appointments, setAppointments] =
    useState<Appointment[]>(savedAppointments);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGroupBy(event.target.value as GroupByType);
  };

  const handleAddAppointment = (appointment: Appointment) => {
    setAppointments((prevState) => [...prevState, appointment]);
  };

  const handleDeleteAppointment = (appointmentId: string) =>
    setAppointments((prevState) => [
      ...prevState.filter((appointment) => appointment.id !== appointmentId),
    ]);

  const parsedAppointments = useMemo(() => parseAppointments(appointments), [appointments]);

  return (
    <div className={styles.pageContainer}>
      <GroupBySelector value={groupBy} onChange={handleChange} />
      {groupBy === 'default' ? (
        <DefaultTable
          appointments={parsedAppointments}
          onDelete={handleDeleteAppointment}
        />
      ) : (
        <GroupedTable
          appointments={parsedAppointments}
          groupBy={groupBy}
          onDelete={handleDeleteAppointment}
        />
      )}
      <AddAppointmentForm onAddAppointment={handleAddAppointment} />
    </div>
  );
};
