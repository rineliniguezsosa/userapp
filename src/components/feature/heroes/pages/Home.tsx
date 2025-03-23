import { useEffect,useState } from "react"
import axios from 'axios';
import { Usuario, UsuarioRow } from "../../../../types/interfaces";
import { MuiButton,MuiDataTable,MuiPaper,MuiTextField,MuiForm, MuiSelect,MuiMenuItem } from "../../../MuiComponents";
import { columns, Generos} from "../../../../helpers";
import { useForm } from "../../../../hooks";


const getall = import.meta.env.VITE_GETALL;
const api_key = import.meta.env.VITE_LOCATIONIQ_APIKEY;



export const Home = () => {
  const [userdata, setUserData] = useState<Usuario[]>([])
  const [countries, setCountries] = useState([]);
  // const [updateform, setupdateform] = useState(false)

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
    getUsers()
  },[])

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

            <MuiTextField
              id="streetNumber"
              label="N.Calle" 
              name="streetNumber"
              type="text"
              value={form.streetNumber}  
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
              id="state"
              label="Estado" 
              name="state"
              type="text"
              value={form.state}  
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
