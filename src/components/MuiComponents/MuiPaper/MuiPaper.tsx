import Paper from '@mui/material/Paper';
import { MuiPaperProps } from '../../../types/interfaces';

export const MuiPaper = ({height,width,children,...props}:MuiPaperProps) => {
  return (
    <Paper sx={{height:height,width:width}} {...props}>
        {children}
    </Paper>
  )
}
