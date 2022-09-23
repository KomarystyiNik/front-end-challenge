import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import * as styles from './styles.module.css';

export interface TextFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export const TextField: FC<TextFieldProps> = ({
  id,
  label,
  className,
  ...inputProps
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={clsx(styles.input, className)}
        id={id}
        {...inputProps}
      />
    </div>
  );
};
