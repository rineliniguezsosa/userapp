import TextField from '@mui/material/TextField';
import { MuiTextFieldProps } from '../../../types/interfaces';

export const MuiTextField = ({id,label,value,...props}:MuiTextFieldProps) => {
  return (
    <TextField
      id={id}
      label={label}
      value={value}
      variant='outlined'
      {...props}
    />
  )
}
