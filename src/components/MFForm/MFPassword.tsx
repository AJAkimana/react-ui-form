import React from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  type OutlinedInputProps,
} from '@mui/material';

export interface MFPasswordProps
  extends Omit<OutlinedInputProps, 'type' | 'value'> {
  id?: string;
  value?: string;
  size?: 'small' | 'medium';
  label?: string;
}

export const MFPassword: React.FC<MFPasswordProps> = (props) => {
  const { id, value, size = 'small', label, ...inputProps } = props;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl variant="outlined" size={size} fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        value={value || ''}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        {...inputProps}
      />
    </FormControl>
  );
};
