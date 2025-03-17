import MenuItem from '@mui/material/MenuItem';
import { MuiMenuItemProps } from '../../../types/interfaces';

export const MuiMenuItem = ({value,children}:MuiMenuItemProps) => {
  return (
    <MenuItem value={value}>
        {children}
    </MenuItem>
  )
}
