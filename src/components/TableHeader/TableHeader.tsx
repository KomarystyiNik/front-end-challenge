import React, { DetailedHTMLProps, FC, ThHTMLAttributes } from 'react';
import clsx from 'clsx';
import * as styles from './styles.module.css';

export interface TableHeaderProps
  extends DetailedHTMLProps<
    ThHTMLAttributes<HTMLTableHeaderCellElement>,
    HTMLTableHeaderCellElement
  > {}

export const TableHeader: FC<TableHeaderProps> = ({
  className,
  children,
  ...thProps
}) => {
  return (
    <th className={clsx(styles.tableHeader, className)} {...thProps}>
      {children}
    </th>
  );
};
