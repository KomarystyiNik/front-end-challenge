import React, { DetailedHTMLProps, FC, TableHTMLAttributes } from 'react';
import clsx from 'clsx';
import * as styles from './styles.module.css';

export interface TableProps
  extends DetailedHTMLProps<
    TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {}

export const Table: FC<TableProps> = ({
  className,
  children,
  ...tableProps
}) => {
  return (
    <table className={clsx(styles.table, className)} {...tableProps}>
      {children}
    </table>
  );
};
