import { InputLabel,Select } from "@mui/material"
import { MuiSelectProps } from "../../../types/interfaces"


export const MuiSelect = ({id,name,value,label,labelId,onChange,children,...props}:MuiSelectProps) => {
  return (
    <>
    <InputLabel id={labelId}>{label}</InputLabel>
     <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        name={name}
        {...props}
    >
      {children}
    </Select>
    </>
  )
}
