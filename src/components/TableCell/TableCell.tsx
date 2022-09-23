import React, { DetailedHTMLProps, FC, TdHTMLAttributes } from 'react';
import clsx from 'clsx';
import * as styles from './styles.module.css';

export interface TableCellProps
  extends DetailedHTMLProps<
    TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  > {}

export const TableCell: FC<TableCellProps> = ({
  className,
  children,
  ...tdProps
}) => {
  return (
    <td className={clsx(styles.tableCell, className)} {...tdProps}>
      {children}
    </td>
  );
};
