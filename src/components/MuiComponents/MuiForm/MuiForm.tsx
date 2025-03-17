import { Box } from '@mui/material';
import { MuiFormProps } from '../../../types/interfaces';

export const MuiForm = ({children,onSubmit,...props}:MuiFormProps) => {
  return (
    <Box sx={{width:'100%',border:'1px red solid',display:'flex',flexDirection:'column',gap:2}} onSubmit={onSubmit} component="form" autoComplete='off' {...props}>
        {children}
    </Box>
  )
}
