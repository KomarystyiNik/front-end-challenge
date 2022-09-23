import { Appointment } from '../ts/global';

export interface ParsedAppointment
  extends Omit<Appointment, 'startDate' | 'endDate'> {
  startDate: Date;
  endDate: Date;
  duration: number;
}

export type GroupByType = 'clinicianName' | 'appointmentDay';

type GroupedAppointments = Record<string, ParsedAppointment[]>;

export const parseAppointments = (
  appointments: Appointment[]
): ParsedAppointment[] =>
  appointments.map((appointment) => {
    const startDate = new Date(appointment.startDate);
    const endDate = new Date(appointment.endDate);
    const duration = endDate.getTime() - startDate.getTime();

    return {
      ...appointment,
      startDate,
      endDate,
      duration,
    };
  });

const getKeyForGrouping = (
  appointment: ParsedAppointment,
  groupBy: GroupByType
) => {
  switch (groupBy) {
    case 'clinicianName':
      return appointment.clinicianName;
    case 'appointmentDay':
      return appointment.startDate.toLocaleDateString();
  }
};

export const groupAppointments = (
  appointments: ParsedAppointment[],
  groupBy: GroupByType
) =>
  appointments.reduce<GroupedAppointments>((acc, appointment) => {
    const key = getKeyForGrouping(appointment, groupBy);

    acc[key] ? acc[key].push(appointment) : (acc[key] = [appointment]);

    return acc;
  }, {});

export const sortAppointmentsByStartDate = (
  appointments: ParsedAppointment[]
) =>
  [...appointments].sort(
    (a, b) => b.startDate.getTime() - a.startDate.getTime()
  );

export const sortGroupedAppointmentsByStartDate = (
  gropedAppointments: GroupedAppointments
) =>
  Object.entries(gropedAppointments).reduce<GroupedAppointments>(
    (acc, [groupName, appointments]) => {
      acc[groupName] = [...appointments].sort(
        (a, b) => b.startDate.getTime() - a.startDate.getTime()
      );

      return acc;
    },
    {}
  );
