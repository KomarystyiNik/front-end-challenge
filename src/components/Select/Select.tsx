import React, { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react';
import clsx from 'clsx';
import * as styles from './styles.module.css';

export interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {}

export const Select: FC<SelectProps> = ({
  className,
  children,
  ...selectProps
}) => {
  return (
    <select className={clsx(styles.select, className)} {...selectProps}>
      {children}
    </select>
  );
};
