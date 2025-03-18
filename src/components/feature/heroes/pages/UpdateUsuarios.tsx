/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import { MuiButton, MuiForm, MuiTextField } from "../../../MuiComponents";
import { useForm } from "../../../../hooks";
const getuserbyid = import.meta.env.VITE_USERBYID;

export const UpdateHeroes = () => {
 
  const {form,setform,updateUser,handleChange} = useForm({
      name:'',
      gender:'',
      streetNumber:'',
      streetName:'',
      city:'',
      state:'',
      country:'',
      postcode:'',
      email:'',
      nat:''
    })
  
  const location = useLocation();
  // const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const _id = queryParams.get("_id");
  
  const getUserByMongoId = async() =>{
    try {
      const { data } = await axios.get(`${getuserbyid}/${_id}`)
      const [ info ] = data.data;
       
      setform({
        _id: info._id,
        name: info.name || '',
        gender: info.gender || '',
        streetNumber: info.location?.street?.number?.toString() || '',
        streetName: info.location?.street?.name || '',
        city: info.location?.city || '',
        state: info.location?.state || '',
        country: info.location?.country || '',
        postcode: info.location?.postcode?.toString() || '',
        email: info.email || '',
        nat: info.nat || ''
      })
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getUserByMongoId();
  },[_id])
    
  return (
    <div className="w-full flex items-center justify-center">
      <MuiForm className="w-1/3 flex flex-col gap-3" title="Actualizar registros" onSubmit={updateUser} >
          <MuiTextField
            id="name"
            label="Nombre" 
            name="name"
            type="text"
            value={form.name}  
            onChange={handleChange}         
          />

          <MuiTextField
            id="streetNumber"
            label="N.Calle" 
            name="streetNumber"
            type="text"
            value={form.streetNumber}  
            onChange={handleChange}            
          />

          <MuiTextField
            id="streetName"
            label="Nombre de calle" 
            name="streetName"
            type="text"
            value={form.streetName}  
            onChange={handleChange}            
          />

          <MuiTextField
            id="city"
            label="Cuidad" 
            name="city"
            type="text"
            value={form.city}  
            onChange={handleChange}            
          />

          <MuiTextField
            id="state"
            label="Estado" 
            name="state"
            type="text"
            value={form.state}  
            onChange={handleChange}            
          />

          <MuiTextField
            id="country"
            label="País" 
            name="country"
            type="text"
            value={form.country}  
            onChange={handleChange}            
          />

          <MuiTextField
            id="postcode"
            label="Codigo postal" 
            name="postcode"
            type="text"
            value={form.postcode}  
            onChange={handleChange}            
          />

          <MuiTextField
            id="email"
            label="Email" 
            name="email"
            type="email"
            value={form.email}  
            onChange={handleChange}            
          />

          <MuiTextField
            id="nat"
            label="Nacionalidad" 
            name="nat"
            type="text"
            value={form.nat}  
            onChange={handleChange}         
          />
          
          <MuiButton type="submit" variant="contained" color="success" sizes="medium">
                Actualizar
          </MuiButton>
      </MuiForm>
    </div>
  )
}
