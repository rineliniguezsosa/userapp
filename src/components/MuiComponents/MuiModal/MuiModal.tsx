import { Box, Modal } from "@mui/material"
import { MuiModalProps } from "../../../types/interfaces"
import { MuiButton } from "../MuiButton/MuiButton";


export const MuiModal = ({title,loading,open,action,onClose,...props}:MuiModalProps) => {
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
             <div>
                  <h1>{title}</h1>
            
                  <div className='mt-5 flex justify-between'>
                        <MuiButton loading={loading} onClick={action}  variant='contained' color='success' sizes='small'>Aceptar</MuiButton>
                        <MuiButton onClick={onClose}  variant='contained' color='error' sizes='small'>Cancelar</MuiButton>
                  </div>
              </div>
        </Box>
    </Modal>
  )
}
