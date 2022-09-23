import React, { FC } from 'react';
import {
  Table,
  TableGroup,
  TableRow,
  TableHeader,
  TableCell,
} from '../../../components';
import {
  groupAppointments,
  GroupByType,
  ParsedAppointment,
  sortGroupedAppointmentsByStartDate,
} from '../../../utils/appointmentUtils';
import { formatDuration } from '../../../utils/dateUtils';

export interface GroupedTableProps {
  groupBy: GroupByType;
  appointments: ParsedAppointment[];
  onDelete: (appointmentId: string) => void;
}

export const GroupedTable: FC<GroupedTableProps> = ({
  appointments,
  groupBy,
  onDelete,
}) => {
  const groupedAppointments = groupAppointments(appointments, groupBy);
  const sortedAppointments =
    sortGroupedAppointmentsByStartDate(groupedAppointments);

  const handleClick = (appointmentId: string) => () => onDelete(appointmentId);

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Name of the patient</TableHeader>
          {groupBy === 'clinicianName' && <TableHeader>Start date</TableHeader>}
          <TableHeader>Start time</TableHeader>
          <TableHeader>Duration</TableHeader>
          {groupBy === 'appointmentDay' && (
            <TableHeader>Clinician name</TableHeader>
          )}
        </TableRow>
      </thead>

      {Object.entries(sortedAppointments).map(([groupName, appointments]) => (
        <TableGroup key={groupName} caption={groupName} columnCount={4}>
          {appointments.map((appointment) => {
            const duration = formatDuration(appointment.duration);
            const highlightRow =
              duration.hour > 1 ||
              (duration.hour >= 1 &&
                (duration.minute > 0 || duration.second > 0));

            return (
              <TableRow highlighted={highlightRow} key={appointment.id}>
                <TableCell>{appointment.patient.name}</TableCell>
                {groupBy === 'clinicianName' && (
                  <TableCell>
                    {appointment.startDate.toLocaleDateString()}
                  </TableCell>
                )}
                <TableCell>
                  {appointment.startDate.toLocaleTimeString()}
                </TableCell>
                <TableCell>{duration.toString()}</TableCell>
                {groupBy === 'appointmentDay' && (
                  <TableCell>{appointment.clinicianName}</TableCell>
                )}
                <TableCell>
                  <button onClick={handleClick(appointment.id)}>Delete</button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableGroup>
      ))}
    </Table>
  );
};
