import Button from '@mui/material/Button';
import { MuiButtonProps } from '../../../types/interfaces';

export const MuiButton = ({loading,variant,color,onClick,sizes,children,type,...props}:MuiButtonProps) => {
  return (
    <Button
        loading={loading}
        variant={variant}
        color={color}
        onClick={onClick}
        size={sizes}
        type={type}
        {...props}
    >
        {children}
    </Button>
  )
}
