import { DataGrid } from '@mui/x-data-grid';
import { MuiDataTaBleProps } from '../../../types/interfaces';

export const MuiDataTable = ({rows,columns,checkboxSelection = false,...props}:MuiDataTaBleProps) => {
  return (
    <DataGrid
       rows={rows}
       columns={columns}
       checkboxSelection={checkboxSelection}
       {...props}
    />
  )
}
