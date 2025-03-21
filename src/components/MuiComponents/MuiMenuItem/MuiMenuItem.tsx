import { MenuItem } from "@mui/material";
import { MuiMenuItemProps } from '../../../types/interfaces';

export const MuiMenuItem = ({key,value,children,...props}:MuiMenuItemProps) => {
  return (
    <MenuItem key={key} value={value} {...props}>
        {children}
    </MenuItem>
  )
}
