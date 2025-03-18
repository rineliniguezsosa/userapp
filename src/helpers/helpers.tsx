/* eslint-disable react-hooks/rules-of-hooks */
import { GridColDef } from '@mui/x-data-grid';
import { MuiButton, MuiModal } from '../components/MuiComponents';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const deleteuser = import.meta.env.VITE_DELETEUSER;

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
        field:'streetPostcode', headerName: 'C.P',
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
          const [loading, setloading] = useState(false);
    

          const handleOpen = () =>{
            setopen(true);
          }

          const handleClose = () =>{
            setopen(false);
          }

          const deleteUser = () =>{
            setloading(true);
            setTimeout(async()=>{
              try {
                  await axios.delete(`${deleteuser}/${params.row._id}`);
                  handleClose()
              } catch (error) {
                console.log(error);
              }
            },1500)
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
                            <MuiButton loading={loading} onClick={deleteUser}  variant='contained' color='success' sizes='small'>Aceptar</MuiButton>
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
            navigate(`/edit/heroe?_id=${params.row._id}`)
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

export const Generos = [
  {
    value:'male',
    label:'Male'
  },
  {
    value:'female',
    label:'Female'
  }
]