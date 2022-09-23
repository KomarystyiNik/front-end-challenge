import React, { FC } from 'react';
import { Table, TableRow, TableHeader, TableCell } from '../../../components';
import {
  ParsedAppointment,
  sortAppointmentsByStartDate,
} from '../../../utils/appointmentUtils';
import { formatDuration } from '../../../utils/dateUtils';

export interface DefaultTableProps {
  appointments: ParsedAppointment[];
  onDelete: (appointmentId: string) => void;
}

export const DefaultTable: FC<DefaultTableProps> = ({
  appointments,
  onDelete,
}) => {
  const sortedAppointments = sortAppointmentsByStartDate(appointments);

  const handleClick = (appointmentId: string) => () => onDelete(appointmentId);

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Name of the patient</TableHeader>
          <TableHeader>Start date</TableHeader>
          <TableHeader>Start time</TableHeader>
          <TableHeader>Duration</TableHeader>
          <TableHeader>Clinician name</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {sortedAppointments.map((appointment) => {
          const duration = formatDuration(appointment.duration);
          const highlightRow =
            duration.hour > 1 ||
            (duration.hour >= 1 &&
              (duration.minute > 0 || duration.second > 0));

          return (
            <TableRow highlighted={highlightRow} key={appointment.id}>
              <TableCell>{appointment.patient.name}</TableCell>
              <TableCell>
                {appointment.startDate.toLocaleDateString()}
              </TableCell>
              <TableCell>
                {appointment.startDate.toLocaleTimeString()}
              </TableCell>
              <TableCell>{duration.toString()}</TableCell>
              <TableCell>{appointment.clinicianName}</TableCell>
              <TableCell>
                <button onClick={handleClick(appointment.id)}>Delete</button>
              </TableCell>
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
};
