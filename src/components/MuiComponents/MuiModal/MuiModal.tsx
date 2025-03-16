import { Box, Modal } from "@mui/material"
import { MuiModalProps } from "../../../types/interfaces"


export const MuiModal = ({open,onClose,children,...props}:MuiModalProps) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
  return (
    <Modal open={open} onClose={onClose} {...props}>
        <Box sx={{...style}}>
            {children}
        </Box>
    </Modal>
  )
}
