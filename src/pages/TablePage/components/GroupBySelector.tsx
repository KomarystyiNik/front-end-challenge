import React, { ChangeEvent, FC } from 'react';
import { Option, Select } from '../../../components';

export interface GroupBySelectorProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const GroupBySelector: FC<GroupBySelectorProps> = ({
  value,
  onChange,
}) => {
  return (
    <Select value={value} onChange={onChange}>
      <Option value="default">Default</Option>
      <Option value="clinicianName">Group by clinician name</Option>
      <Option value="appointmentDay">Group by start date</Option>
    </Select>
  );
};
