import { Box } from '@mui/material';
import { MuiFormProps } from '../../../types/interfaces';

export const MuiForm = ({children,onSubmit,...props}:MuiFormProps) => {
  return (
    <Box onSubmit={onSubmit} component="form" autoComplete='off' {...props}>
        {children}
    </Box>
  )
}
