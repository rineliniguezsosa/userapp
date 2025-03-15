import { DataGrid } from '@mui/x-data-grid';
import { MuiDataTaBleProps } from '../../../types/interfaces';

export const MuiDataTable = ({columns,...props}:MuiDataTaBleProps) => {
  return (
    <DataGrid
       columns={columns}
       {...props}
    />
  )
}
