import Button from '@mui/material/Button';
import { MuiButtonProps } from '../../../types/interfaces';

export const MuiButton = ({variant,color,onClick,sizes,children,...props}:MuiButtonProps) => {
  return (
    <Button
        variant={variant}
        color={color}
        onClick={onClick}
        size={sizes}
        {...props}
    >
        {children}
    </Button>
  )
}
