import { GridColDef } from '@mui/x-data-grid';

export const userColumns: GridColDef[] = [
    {
        field:'id', headerName: 'Id',width:20
    },
    {
        field:'name', headerName: 'Name',width:30
    }
]