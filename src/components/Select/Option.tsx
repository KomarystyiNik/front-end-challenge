import React, { DetailedHTMLProps, FC, OptionHTMLAttributes } from 'react';
import clsx from 'clsx';
import * as styles from './styles.module.css';

export interface OptionProps
  extends DetailedHTMLProps<
    OptionHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  > {}

export const Option: FC<OptionProps> = ({
  className,
  children,
  ...optionProps
}) => {
  return (
    <option className={clsx(styles.option, className)} {...optionProps}>
      {children}
    </option>
  );
};
