import MenuItem from '@mui/material/MenuItem';
import { MuiMenuItemProps } from '../../../types/interfaces';

export const MuiMenuItem = ({children}:MuiMenuItemProps) => {
  return (
    <MenuItem>
        {children}
    </MenuItem>
  )
}
