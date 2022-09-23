import React, { FC, PropsWithChildren } from 'react';
import { TableHeader } from '../TableHeader';
import * as styles from './styles.module.css';

export interface TableGroupProps {
  caption: string;
  columnCount: number;
}

export const TableGroup: FC<PropsWithChildren<TableGroupProps>> = ({
  caption,
  columnCount,
  children,
}) => {
  return (
    <tbody>
      <tr className={styles.groupHeader}>
        <TableHeader colSpan={columnCount}>{caption}</TableHeader>
      </tr>
      {children}
    </tbody>
  );
};
