import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import * as styles from './styles.module.css';

export interface TableRowProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {
  highlighted?: boolean;
}

export const TableRow: FC<TableRowProps> = ({
  highlighted,
  className,
  children,
  ...trProps
}) => {
  return (
    <tr
      className={clsx(
        styles.tableRow,
        highlighted && styles.highlighted,
        className
      )}
      {...trProps}
    >
      {children}
    </tr>
  );
};
