import { Modal } from "@mui/material"
import { MuiModalProps } from "../../../types/interfaces"


export const MuiModal = ({open,onClose,children,...props}:MuiModalProps) => {
  return (
    <Modal open={open} onClose={onClose} {...props}>
        {children}
    </Modal>
  )
}
