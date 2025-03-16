import Button from '@mui/material/Button';
import { MuiButtonProps } from '../../../types/interfaces';

export const MuiButton = ({loading,variant,color,onClick,sizes,children,...props}:MuiButtonProps) => {
  return (
    <Button
        loading={loading}
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
