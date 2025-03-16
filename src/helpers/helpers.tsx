/* eslint-disable react-hooks/rules-of-hooks */
import { GridColDef } from '@mui/x-data-grid';
import { MuiButton, MuiModal } from '../components/MuiComponents';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const columns: GridColDef[] = [
    {
        field:'id', headerName: 'Id',
    },
    {
        field:'name', headerName: 'Name',
    },
    {
        field:'gender', headerName: 'Genero',
    },
    {
        field:'streetNumber', headerName: 'N.calle'
    },
    {
        field:'streetName', headerName: 'Nombre calle'
    },
    {
        field:'streetCity', headerName: 'Ciudad'
    },
    {
        field:'streetState', headerName: 'Estado',
    },
    {
        field:'streetCountry', headerName: 'País'
    },
    {
        field:'stretPostcode', headerName: 'C.P',
    },
    {
        field:'email', headerName: 'email'
    },
    {
        field:'nat', headerName: 'nacionalidad',
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

          const deleteUser = async() =>{

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
                            <MuiButton onClick={deleteUser}  variant='contained' color='success' sizes='small'>Aceptar</MuiButton>
                            <MuiButton onClick={handleClose}  variant='contained' color='error' sizes='small'>Cancelar</MuiButton>
                        </div>
                    </div>
                </MuiModal>
            </React.Fragment>
          );
        },
      },
    {
        field: "actionupdate",
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