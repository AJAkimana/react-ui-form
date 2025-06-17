import React from 'react';

import { FormControlLabel, Switch, type SwitchProps } from '@mui/material';

export interface MFSwitchProps extends Omit<SwitchProps, 'checked'> {
  name?: string;
  value?: boolean;
  label?: React.ReactNode;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}
export const MFSwitch: React.FC<MFSwitchProps> = (props) => {
  const { value, label, name, onChange } = props;
  return (
    <FormControlLabel
      control={
        <Switch
          checked={value ?? false}
          onChange={onChange}
          name={name}
          slotProps={{ input: { 'aria-label': 'controlled' } }}
        />
      }
      label={label}
    />
  );
};
