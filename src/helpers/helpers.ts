import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
    {
        field:'id', headerName: 'Id',width:70
    },
    {
        field:'name', headerName: 'Name',width:70
    },
    {
        field:'genre', headerName: 'Gener',width:70
    },
    {
        field:'streetNumber', headerName: 'N.calle',width:70
    },
    {
        field:'streetName', headerName: 'Nombre calle',width:70
    },
    {
        field:'streetCity', headerName: 'Ciudad',width:70
    },
    {
        field:'streetState', headerName: 'Estado',width:70
    },
    {
        field:'streetCountry', headerName: 'País',width:70
    },
    {
        field:'stretPostcode', headerName: 'Codigo postal',width:70
    },
    {
        field:'email', headerName: 'email',width:70
    },
    {
        field:'nat', headerName: 'nacionalidad',width:70
    },
    
]