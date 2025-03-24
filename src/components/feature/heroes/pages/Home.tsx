/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState } from "react"
import axios from 'axios';
import { Usuario, UsuarioRow } from "../../../../types/interfaces";
import { MuiButton,MuiDataTable,MuiPaper,MuiTextField,MuiForm, MuiSelect,MuiMenuItem } from "../../../MuiComponents";
import { columns, Generos} from "../../../../helpers";
import { useForm } from "../../../../hooks";
import { AllCountries,StateResponse } from '../../../../types'

const getall = import.meta.env.VITE_GETALL;
const api_key = import.meta.env.VITE_COUNTRYSTATE_APIKEY;

console.log(api_key);


export const Home = () => {
  const [userdata, setUserData] = useState<Usuario[]>([])
  const [countries, setCountries] = useState<AllCountries[]>([]);
  const [state,setstate] = useState<StateResponse[]>([])
  // const [updateform, setupdateform] = useState(false)
 console.log(state);
 
  const {form,handleSubmit,handleChange} = useForm({
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
  console.log(form);
  
  const getUsers = async() =>{
    try {
      const { data } = await axios.get<{status: boolean,data:Usuario[]}>(getall); 
      setUserData(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log(error);
      
    }
  }
  
  const getCountries = async() => {
    try {
      const {data} = await axios.get(`https://api.countrystatecity.in/v1/countries`,{
        headers:{'X-CSCAPI-KEY':api_key}
      });
      console.log(data);
      setCountries(data)
    } catch (error) {
      console.log(error);
      
    }
  }

  const getStates = async() => {
    try {
      if(!form.country) return;

      const { data } = await axios.get(`https://api.countrystatecity.in/v1/countries/${form.country}/states`,{
        headers:{'X-CSCAPI-KEY':api_key}
      })
    
      setstate(data)
    } catch (error) {
      console.log(error);
      
    }
  }
  
  // const paginationModel = { page: 0, pageSize: 5 };
  
   const rows: UsuarioRow[] = userdata.map((user, index) => ({     
    id: index,
    _id: user._id,
    gender: user.gender,
    name: `${user.name}`,
    streetNumber:user.location.street.number.toString() || "",
    streetName: user.location.street.name || "",
    streetCity: user.location.city || "",
    streetState: user.location.state || "",
    streetCountry:  user.location.country || "",
    streetPostcode: user.location.postcode || "",
    email: user.email || "",
    nat: user.nat || "",
  }));
    // console.log("rows: ",rows);
   

  useEffect(()=>{
    getUsers();
    getCountries();
  },[])

  useEffect(()=>{
    if(form.country){
      getStates()
    }
  },[form.country])

  return (
    <div className="w-full h-screen flex">
        {/* contenido de mi api, lista de usuarios  */}
        <div className="w-3/5 p-5">
            <MuiPaper height={400} width={'100%'}>
              <MuiDataTable
            rows={rows}
            columns={columns} checkboxSelection={false}              />
            </MuiPaper>
        </div>

        <div className="w-2/5 p-1">
          {/* form,agregar nuevas items */}

          <div className="w-full flex items-center justify-center mt-5">
          
            <MuiForm className="w-3/4 flex flex-col gap-2" onSubmit={handleSubmit} title="Agrega tus usuarios">
              <MuiTextField
              id="name"
              label="Nombre" 
              name="name"
              value={form.name}  
              onChange={handleChange}            
              />

            <MuiSelect
              labelId="select-gender"
              id="simple-select-gender"
              value={form.gender}
              label="Genero"
              onChange={handleChange}
              name="gender"
            >
            {
              Generos.map(gender => (
                <MuiMenuItem key={gender.value} value={gender.value}>{gender.label}</MuiMenuItem>
              ))

            }
            </MuiSelect>


            <MuiSelect
              labelId="select-country"
              id="simple-select-country"
              value={form.country}
              label="País"
              onChange={handleChange}
              name="country"
            >
            {
              countries.map(countries => (
                <MuiMenuItem key={countries.iso2} value={countries.iso2}>{countries.name}</MuiMenuItem>
              ))

            }
            </MuiSelect>
            {/* <MuiTextField
              id="country"
              label="País" 
              name="country"
              type="text"
              value={form.country}  
              onChange={handleChange}            
              />
             */}
            
            <MuiSelect
              labelId="select-state"
              id="simple-select-state"
              value={form.state}
              label="Estado"
              onChange={handleChange}
              name="state"
            >
            {
              state.map(state => (
                <MuiMenuItem key={state.iso2} value={state.name}>{state.name}</MuiMenuItem>
              ))

            }
            </MuiSelect>
            {/* <MuiTextField
              id="state"
              label="Estado" 
              name="state"
              type="text"
              value={form.state}  
              onChange={handleChange}            
              /> */}
            
              <MuiTextField
                id="city"
                label="Cuidad" 
                name="city"
                type="text"
                value={form.city}  
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
                id="postcode"
                label="Codigo postal" 
                name="postcode"
                type="text"
                value={form.postcode}  
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
                Agregar
              </MuiButton>

            </MuiForm>
          </div>
        </div>

    </div>
  )
}
