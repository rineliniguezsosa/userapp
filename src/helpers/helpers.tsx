/* eslint-disable react-hooks/rules-of-hooks */
// import { useNavigate } from 'react-router-dom';
import { GridColDef } from '@mui/x-data-grid';
import { MuiButton, MuiModal } from '../components/MuiComponents';
import React, { useState } from 'react';


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
    {
        field: "action",
        headerName: "Acciones",
        width: 150,
        renderCell: (params) => {
          const [open, setopen] = useState(false);
            console.log("params",params);
    

          const handleOpen = () =>{
            setopen(true);
          }

          const handleClose = () =>{
            setopen(false);
          }
    
          return (
            <React.Fragment>
                <MuiButton
                  variant="contained"
                  color="error"
                  sizes="small"
                  onClick={handleOpen}
                >
                  Eliminar
                </MuiButton>

                <MuiModal open={open} onClose={handleClose}>
                    <h1>Hola</h1>
                </MuiModal>
            </React.Fragment>
          );
        },
      },
    
]