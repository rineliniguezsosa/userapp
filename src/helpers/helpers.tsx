/* eslint-disable react-hooks/rules-of-hooks */
import { GridColDef } from '@mui/x-data-grid';
import { MuiButton, MuiModal } from '../components/MuiComponents';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
        headerName: "Eliminar",
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
                    <div className=''>
                        <h1>¿Estás seguro de que deseas eliminar este registro? </h1>

                        <div className='mt-5 flex justify-between'>
                            <MuiButton  variant='contained' color='success' sizes='small'>Aceptar</MuiButton>
                            <MuiButton onClick={handleClose}  variant='contained' color='error' sizes='small'>Cancelar</MuiButton>
                        </div>
                    </div>
                </MuiModal>
            </React.Fragment>
          );
        },
      },
    {
        field: "action",
        headerName: "Actualizar",
        width: 150,
        renderCell: (params) => {
         const navigate = useNavigate()

         const handleNavigate = () =>{
            navigate(`/edit/heroe?${params.row}`)
         }
          return (
            <React.Fragment>
                <MuiButton
                  variant="contained"
                  color="success"
                  sizes="small"
                  onClick={handleNavigate}
                >
                  Actualizar
                </MuiButton>
            </React.Fragment>
          );
        },
      },
    
]