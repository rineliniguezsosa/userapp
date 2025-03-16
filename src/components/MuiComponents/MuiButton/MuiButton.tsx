import Button from '@mui/material/Button';
import { MuiButtonProps } from '../../../types/interfaces';

export const MuiButton = ({variant,color,sizes,title,...props}:MuiButtonProps) => {
  return (
    <Button
        variant={variant}
        color={color}
        size={sizes}
        {...props}
    >
        {title}
    </Button>
  )
}
